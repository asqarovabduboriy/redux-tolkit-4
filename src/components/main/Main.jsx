import React from "react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import img from "../../assets/Imgs/Main img.png";
import "./Main.css";

const Main = () => {
  return (
    <>
      <main>
        <div className="container">
          <Swiper
            loop={true}
            navigation={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Navigation, Autoplay, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="main__text_content">
                <div>
                  <h4>Welcome to GreenShop</h4>
                  <h2>
                    Let’s Make a Better <span>Planet</span>
                  </h2>
                  <p>
                    We are an online plant shop offering a wide range of cheap
                    and trendy plants. Use our plants to create an unique Urban
                    Jungle. Order your favorite plants!
                  </p>
                  <button>Shop Now</button>
                </div>
                <div>
                  <img src={img} alt="plant" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="main__text_content">
                <div>
                  <h4>Welcome to GreenShop</h4>
                  <h2>
                    Let’s Make a Better <span>Planet</span>
                  </h2>
                  <p>
                    We are an online plant shop offering a wide range of cheap
                    and trendy plants. Use our plants to create an unique Urban
                    Jungle. Order your favorite plants!
                  </p>
                  <button>Shop Now</button>
                </div>
                <div>
                  <img src={img} alt="plant" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="main__text_content">
                <div>
                  <h4>Welcome to GreenShop</h4>
                  <h2>
                    Let’s Make a Better <span>Planet</span>
                  </h2>
                  <p>
                    We are an online plant shop offering a wide range of cheap
                    and trendy plants. Use our plants to create an unique Urban
                    Jungle. Order your favorite plants!
                  </p>
                  <button>Shop Now</button>
                </div>
                <div>
                  <img src={img} alt="plant" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </main>
    </>
  );
};

export default Main;
