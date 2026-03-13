import React, { useRef } from "react";
import { useRecentArticles } from "../../Hooks/useRecentArticles";
import { Articles } from "../../types/ArticlesType";
import { Card } from "../Card/Card";
import { Loader } from "../Loader/Loader";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./ArticleBanner.css";

export interface ArticleBannerProps {
  from?: number;
  limit?: number;
}
export const ArticleBanner = ({ from, limit }: ArticleBannerProps) => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const { articles, loading, error } = useRecentArticles(from, limit);
  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <section className="container lg:max-w-4xl xl:max-w-7xl w-[100%] my-20 mx-auto ">
      <h2 className="text-2xl text-primary font-semibold text-center my-20">
        Des articles réguliers pour vous accompagner
      </h2>
      <Swiper
        slidesPerView={3}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        spaceBetween={20}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
      >
        {articles.map((article: Articles) => (
          <SwiperSlide key={article._id}>
            <Card
              id={article._id}
              imageSrc={article.image as string}
              titleArticle={article.title}
              date={article.createdAt}
              category={article.category}
              descriptionArticle={
                article.content.replace(/<img[^>]*>/g, "").slice(0, 100) + "..."
              }
            />
          </SwiperSlide>
        ))}
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </section>
  );
};
