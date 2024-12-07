import { useCallback, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";

const slideStyles = {
  width: "100%",
  height: "100%",
  borderRadius: "10px",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const rightArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  right: "32px",
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
};

const leftArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  left: "32px",
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
};

const sliderStyles = {
  position: "relative",
  height: "100%",
  width: "100%",
};

// eslint-disable-next-line react/prop-types
const SlideShow = ({ slides }) => {
  const timeRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides]);
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  useEffect(() => {
    if (timeRef.current) {
      clearTimeout(timeRef.current);
    }
    timeRef.current = setTimeout(() => {
      goToNext();
    }, 2000);
    return () => {
      clearTimeout(timeRef.current);
    };
  }, [goToNext]);

  return (
    // <div style={sliderStyles}>
    //   <div>
    //     <div onClick={goToPrevious} style={leftArrowStyles}>
    //       ❰
    //     </div>
    //     <div onClick={goToNext} style={rightArrowStyles}>
    //       ❱
    //     </div>
    //   </div>
    //   <div style={slideStylesWidthBackground}></div>
    // </div>
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiperMain w-full h-full"
      >
        {/* {slides &&
          slides.map((slide) => {
            <SwiperSlide key={slide.title}>
              <img src={slide.url} alt="" />
            </SwiperSlide>;
          })} */}
        <SwiperSlide>
          <img
            className=""
            width={"100%"}
            src="https://g.top4top.io/p_3155igm8n1.png"
            alt=""
          />
          <h1>
            جائزة الموسى للتميز في المدارس والمعاهد القرآنية تقيم ملتقى
            الممارسات المتميزة وحفلها الختامي
          </h1>
          <div className="wow"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            width={"100%"}
            src="https://i.top4top.io/p_3155z4nyx1.png"
            alt=""
          />
          <h1>
            جائزة الموسى للتميز في المدارس والمعاهد القرآنية تقيم ملتقى
            الممارسات المتميزة وحفلها الختامي
          </h1>
          <div className="wow"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            width={"100%"}
            src="https://f.top4top.io/p_3155fiolf1.png"
            alt=""
          />
          <div className="wow"></div>
          <h1>
            جائزة الموسى للتميز في المدارس والمعاهد القرآنية تقيم ملتقى
            الممارسات المتميزة وحفلها الختامي
          </h1>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SlideShow;
