import classes from "./successPartners.module.css";
import CountUp from "react-countup";
import LogoPlaceholder from "../../../public/logo.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const SuccessParteners = () => {
  return (
    <>
      <section id="sucess" className={classes.section5}>
        <p className={classes.section5Title}> شركاء النجاح</p>
        <div className={classes.partner}>
          <div className={classes.partnerCardContainer}>
            <Swiper
              slidesPerView={1}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                768: {
                  slidesPerView: 1,
                  spaceBetween: 0,
                },

                1024: {
                  slidesPerView: 5,
                  spaceBetween: 30,
                },
              }}
              modules={[Autoplay]}
              className="mySwiper w-full h-full m-auto"
            >
              <SwiperSlide>
                <div className={classes.partnerCard}>
                  <img className={classes.partnerImage} src={LogoPlaceholder} />
                  <p className={classes.partnerName}>
                    الجمعية الخيرية لتحفيظ القرآن الكريم بمحافظة الجبيل
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={classes.partnerCard}>
                  <img className={classes.partnerImage} src={LogoPlaceholder} />
                  <p className={classes.partnerName}>
                    الجمعية الخيرية لتحفيظ القرآن الكريم بمحافظة الجبيل
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={classes.partnerCard}>
                  <img className={classes.partnerImage} src={LogoPlaceholder} />
                  <p className={classes.partnerName}>
                    الجمعية الخيرية لتحفيظ القرآن الكريم بمحافظة الجبيل
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={classes.partnerCard}>
                  <img className={classes.partnerImage} src={LogoPlaceholder} />
                  <p className={classes.partnerName}>
                    الجمعية الخيرية لتحفيظ القرآن الكريم بمحافظة الجبيل
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={classes.partnerCard}>
                  <img className={classes.partnerImage} src={LogoPlaceholder} />
                  <p className={classes.partnerName}>
                    الجمعية الخيرية لتحفيظ القرآن الكريم بمحافظة الجبيل
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={classes.partnerCard}>
                  <img className={classes.partnerImage} src={LogoPlaceholder} />
                  <p className={classes.partnerName}>
                    الجمعية الخيرية لتحفيظ القرآن الكريم بمحافظة الجبيل
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
            {/* <div className={classes.partnerCard}>
              <img className={classes.partnerImage} src={LogoPlaceholder} />
              <p className={classes.partnerName}>
                الجمعية الخيرية لتحفيظ القرآن الكريم بمحافظة الجبيل
              </p>
            </div>

            <div className={classes.partnerCard}>
              <img className={classes.partnerImage} src={LogoPlaceholder} />
              <p className={classes.partnerName}>
                مركز معاهد للاستشارات التربوية والتعليمية
              </p>
            </div> */}
          </div>
        </div>

        <div className={classes.statistecs}>
          <div className={classes.panner}>
            {/* <p className={classes.title}>الأحصائات </p> */}
            <div className={classes.contentSection5}>
              <div className={classes.box}>
                <img src="../../../public/diplomatPhoto.png" />
                <CountUp end={2} duration={10} />
                <p> الدبلومات الأكاديمية </p>
              </div>
              <div className={classes.box}>
                <img src="../../../public/mosiPhoto.png" />
                <CountUp end={18} duration={10} />
                <p> الإصدارات والمنتجات </p>
              </div>
              <div className={classes.box}>
                <img src="../../../public/productsPhoto.png" />
                <CountUp end={3} duration={10} />
                <p> دورات جائزة الموسى </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SuccessParteners;
