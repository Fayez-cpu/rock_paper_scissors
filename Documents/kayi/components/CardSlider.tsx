import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import styles from "./cardslider.module.css"

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

SwiperCore.use([Navigation, Pagination]);



const cards = [
    {name: 'Mohamed Yousef',
     img: "https://lh3.googleusercontent.com/a-/ALV-UjWpqT3S-6V31qKtZhwwFPjJb7RdBq3f3o0vBo5qCVz57Tr39rs=w72-h72-p-rp-mo-ba4-br100",
     description: `Great place, service and amazing food. If you haven't been before I would definitely add it on the list of places to eat at and I'll grab the bill if you didn't like!🤣
Ps. Don't sit on the doorway side, can be a bit chilly when cold outside. Enjoy the great experience`,
     images: ["https://lh3.googleusercontent.com/geougc-cs/AB3l90CKgQp0v4G-s04VuuEQ4TR_WsW8PEbxNGNZN8foBl_oQLMdqUW0G3QGXRDvdhSWtkeqSjGk158GPGBs1kIEHcgEsqNt082MGgD5KqVsQqQHTmQQGZC8lD3gPBUrvmGlSS2QKDDY=s175-p-k-rw", 
      "moh_img_1.jpg"
      ],
     key: 1
    },
      {name: 'Amna Irfan',
     img: "/amna.PNG",
     description: `Amazing Amazing food and service went there for the first time. The meal was awesome and the staff was extremely attentive and friendly. Natalie our Syrian server was very good with my kids. We got chicken wings, tea and dessert complimentary!!!`,
     images: [],
     key: 2
    },
    {name: 'Hans Gruber',
     img: "/hans.png",
     description: `Without doubt the best meal I have had during my time working in Derby. The restaurant is beautifully presented with polished clean tiled floors, lovely looking stone cladding and an amazing BBQ set up where you can watch your food being Cooked.
The mixed grill was delicious. The chicken was cooked just right with a BBQ flavour that didn't dry the meat.
I will be returning to KAYI once a week during my stay in Derby as it is only a 5 minute walk from the Mickleover court hotel.
The service was also very friendly and accommodating. Thank you for such a good experience.`,
     images: ["/hans_img_1.jpg"],
     key: 3
    },
    {name: "Joe Wood",
     img : "/joe.png",
     description: `Delicious! We had the sharing platter. The food was some of the best Middle Eastern food I’ve had in the uk. Staff were friendly and professional with
      fast service and the restaurant looks lovely.`,
     images: [],
     key: 4
    },    

    {name: "Hafiz Mughal",
     img : "",
     description: `From the minute you enter till the end the service is impeccable! Absolutely fantastic food one of the best I’ve had. Everything is super clean and the quality and presentation of each dish is just 
     incredible! Loved this place and everything we had including the dessert was super delicious.`,
     images: ["/hafiz_img_1.jpg", "hafiz_img_2.jpg", "/hafiz_img_3.jpg"],
     key: 5
    },
    {name: "Josh Td",
    img: "/josh.png",
    description: `First time here and it was unreal!
Food was so clean, fresh and tasty, staff were great too. Great to see the restaurant packed. Highly recommend`,
    images: [],
    key: 6
    },
    {name: "Rui Fernandes",
    img: "/rui.png",
    description: `Delicious food with a big variety/selection of cold and hot dishes/mezzes.
    Also their service and staff is exceptionally good.
    Recommend it!`,
    images: [],
    key: 7
    },    
    {name: "K3rri",
    img: "/k3rri.png",
    description: `My first experience here was highly enjoyable. Really nice interior and ambience to place could see my food being grilled. Food was seasoned, flavourful and came out hot. Waitresses were lovely and h
    ad a friendly, inviting atmosphere. Will definitely be back here!`,
    images: ["/k3rri_img_1.jpg"],
    key: 9
    },
    {name: "Caitlin Hall",
    img: "/caitlin.png",
    description: `Lovely service and great food!
    A really great selection on the menu, and the staff were informative and helpful when answering questions.
    The food was beautifully cooked and well presented. Huge portions too! Definitely will be returning :)`,
    images: ["/caitlin_img_2.jpg", "/caitlin_img_1.jpg"],
    key: 10
    },
    {name: "Mumtaz Rafiq",
    img: "/mumtaz.png",
    description: `Ist time experience of Turkish cuisine,  definitely worth a visit , fast polite friendly service
     and amazing food variety to meet everyone's individual tastes . Worth a visit !`,
    images: [],
    key: 11
    }
    
    
]


export default function CardSlider() {
  let currentIndex = 0;
  let widthNum = 0
  let width = "";
  const getkey = () => {
    currentIndex += 1;
    return currentIndex;
  };



  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-800">What Our Customers Say</h2>
          <p className="mt-4 text-blue-600 text-lg max-w-2xl mx-auto">
            We’re proud to share some feedback from our amazing customers.
          </p>
        </div>

        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={3}
            spaceBetween={25}
            loop={true}
            grabCursor={true}
            autoplay={{
              delay: 300000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={true}
            breakpoints={{
              0: { slidesPerView: 1 },
              520: { slidesPerView: 2 },
              950: { slidesPerView: 3 },
            }}
            className="rounded-2xl overflow-visible relative !pb-12"
          >
            {cards.map((card, idx) => (
              <SwiperSlide key={idx}>
                <div className="bg-white rounded-2xl flex flex-col items-center shadow-lg hover:shadow-xl transition-shadow duration-300" >
                  <div className="relative flex flex-col items-center py-6">
                    <span className="absolute inset-x-0 top-0 block h-full rounded-t-2xl"></span>
                    <div className="relative w-32 h-32 rounded-full bg-white p-1 shadow-lg">
                      <img
                        src={card.img || "/placeholder.svg"}
                        alt={card.name}
                        className="w-full h-full object-cover rounded-full border-4 border-blue-800"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center px-6 pb-6 text-center">
                    <h3 className="text-xl font-semibold text-blue-800 mb-3">{card.name}</h3>
                    <p className="text-blue-600 text-sm leading-relaxed mb-4 line-clamp-4">"{card.description}"</p>
                    <div className="flex text-yellow-400 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                    {/* If you want to display images under each card */}
                  <div className="flex  gap-2 justify-center">
                    {card.images?.length > 0 &&
                      card.images.map((image, i) => {
                        const widthPercent = 95 / card.images.length;
                        const imgWidth = `${widthPercent}%`;

                        return (
                          <img
                            key={getkey()}
                            src={image}
                            alt={`img-${i}`}
                            style={{
                              borderRadius: 5,
                              width: imgWidth,
                              objectFit: "cover",
                            }}
                            className='img_review'
                          />
                        );
                      })}
                  </div>

                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}