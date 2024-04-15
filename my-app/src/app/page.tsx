"use client";
import style from "./page.module.scss";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Home = () => {
  const catalog = [
    {
      id: 1,
      title: "На грани",
      reiting: 8.9,
      poster: {
        path: "/assets/Home/images/Content1.png",
        alt: "poster",
        width: 216,
        height: 324,
      },

      info: "2022, 2 часа 37 мин",
    },
    {
      id: 2,
      title: "8 подруг Оушена",
      reiting: 8.2,
      poster: {
        path: "/assets/Home/images/Content2.png",
        alt: "poster",
        width: 216,
        height: 324,
      },

      info: "2022, 2 часа 37 мин",
    },
    {
      id: 3,
      title: "Нэнси Дрю",
      reiting: 9.0,
      poster: {
        path: "/assets/Home/images/Content3.png",
        alt: "poster",
        width: 216,
        height: 324,
      },

      info: "2022, 2 часа 37 мин",
    },
    {
      id: 4,
      title: "На западном фронте без перемен",
      reiting: 7.9,
      poster: {
        path: "/assets/Home/images/Content4.png",
        alt: "poster",
        width: 216,
        height: 324,
      },

      info: "2022, 2 часа 37 мин",
    },
  ];

  return (
    <>
      <article className={style.trailer_section}>
        <div className={style.trailer}>
          <Link href="`/${filmId}`">
            <div className={style.trailer__video}>
              <div className={style.video}>
                <Image
                  src="/assets/Home/movie.png"
                  alt="avatar"
                  width={960}
                  height={594}
                />
              </div>
              <div className={style.video_title}>
                <Image
                  src="/assets/Home/nameMovie.svg"
                  alt="avatar"
                  width={338}
                  height={101}
                />
              </div>
            </div>
          </Link>
        </div>
      </article>
      <article className={style.catalog}>
        <h1>Новинки</h1>
        <div className={style.swiper_wrapper}>
          <Swiper
            className={style.swiper}
            slidesPerView={4}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
          >
            {catalog.map((film) => (
              <SwiperSlide key={film.id}>
                <div className={style.reiting}>{film.reiting}</div>
                <Image
                  className={style.poster}
                  src={film.poster.path}
                  alt={film.poster.alt}
                  width={film.poster.width}
                  height={film.poster.height}
                ></Image>
                <div className={style.info}>
                  <span className={style.name}>{film.title}</span>
                  <span className={style.time}>{film.info}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </article>
    </>
  );
};
export default Home;
