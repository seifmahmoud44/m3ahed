import NewsCard from "../../pages/news/newsCard/NewsCard";
import classes from "./lastNews.module.css";

import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
const LastNews = () => {
  return (
    <section className={classes.newsSectionHome}>
      <h1 className={classes.section3Title}>آخر الأخبار</h1>
      <div className={classes.cards}>
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
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          modules={[Autoplay]}
          className="mySwiper w-full h-full m-auto"
        >
          <SwiperSlide>
            <NewsCard
              imagPath="../../../public/download (1).png"
              auther=" اسم الكاتب"
              title="عنوان الخبر"
              date="12/12/2021"
              id={1}
              words="
               لوريم إيبسوم دولور يجلس أميت لوريم إيبسوم دولور يجلس أميت لوريم
               إيبسوم دولور يجلس أميت لوريم إيبسوم دولور يجلس أميت لوريم إيبسوم
               دولور يجلس أميت لوريم إيبسوم دولور يجلس أميت لوريم إيبسوم دولور
               يجلس أميت..."
            />
          </SwiperSlide>
          <SwiperSlide>
            <NewsCard
              imagPath="../../../public/download (1).png"
              auther=" اسم الكاتب"
              title="عنوان الخبر"
              date="12/12/2021"
              id={1}
              words="
               لوريم إيبسوم دولور يجلس أميت لوريم إيبسوم دولور يجلس أميت لوريم
               إيبسوم دولور يجلس أميت لوريم إيبسوم دولور يجلس أميت لوريم إيبسوم
               دولور يجلس أميت لوريم إيبسوم دولور يجلس أميت لوريم إيبسوم دولور
               يجلس أميت..."
            />
          </SwiperSlide>
          <SwiperSlide>
            <NewsCard
              imagPath="../../../public/download (1).png"
              auther=" اسم الكاتب"
              title="عنوان الخبر"
              date="12/12/2021"
              id={1}
              words="
               لوريم إيبسوم دولور يجلس أميت لوريم إيبسوم دولور يجلس أميت لوريم
               إيبسوم دولور يجلس أميت لوريم إيبسوم دولور يجلس أميت لوريم إيبسوم
               دولور يجلس أميت لوريم إيبسوم دولور يجلس أميت لوريم إيبسوم دولور
               يجلس أميت..."
            />
          </SwiperSlide>
          <SwiperSlide>
            <NewsCard
              imagPath="../../../public/download (1).png"
              auther=" اسم الكاتب"
              title="عنوان الخبر"
              date="12/12/2021"
              id={1}
              words="
               لوريم إيبسوم دولور يجلس أميت لوريم إيبسوم دولور يجلس أميت لوريم
               إيبسوم دولور يجلس أميت لوريم إيبسوم دولور يجلس أميت لوريم إيبسوم
               دولور يجلس أميت لوريم إيبسوم دولور يجلس أميت لوريم إيبسوم دولور
               يجلس أميت..."
            />
          </SwiperSlide>
          <SwiperSlide>
            <NewsCard
              imagPath="../../../public/download (1).png"
              auther=" اسم الكاتب"
              title="عنوان الخبر"
              date="12/12/2021"
              id={1}
              words="
               لوريم إيبسوم دولور يجلس أميت لوريم إيبسوم دولور يجلس أميت لوريم
               إيبسوم دولور يجلس أميت لوريم إيبسوم دولور يجلس أميت لوريم إيبسوم
               دولور يجلس أميت لوريم إيبسوم دولور يجلس أميت لوريم إيبسوم دولور
               يجلس أميت..."
            />
          </SwiperSlide>
        </Swiper>
        {/* <CustomLink className={classes.btn} to="/news">
          <p>المزيد</p>
        </CustomLink> */}
      </div>

      {/* link to the news page */}
    </section>
  );
};

function CustomLink({ to, children, ...props }) {
  return (
    <Link to={to} {...props}>
      {children}
    </Link>
  );
}

export default LastNews;
