import stripe from "https://esm.sh/stripe@12.5.0?bundle";

export const onRequestPost = async ({ request, env }) => {
  const stripeClient = stripe(env.STRIPE_SECRET_KEY);

  try {
    const { items } = await request.json();

    const line_items = items.map((item) => ({
      price_data: {
        currency: "gbp",
        product_data: {
          name: item.name,
        },
        unit_amount: Math.round(item.price * 100),
      },
      quantity: item.quantity,
    }));

    const session = await stripeClient.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items,
      success_url: "https://your-site.com/success",
      cancel_url: "https://your-site.com/cancel",
    });

    return new Response(JSON.stringify({ url: session.url }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
