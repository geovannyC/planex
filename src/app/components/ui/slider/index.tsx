"use client"
import React, { ReactElement, useState } from "react";
import { setCurrentPublications, setLoaderHandleChangueIndex } from "@/redux/features/app";
import { useAppDispatch } from "@/redux/hooks";
import { Publication } from "@/redux/schemmas/publicationSchemma";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Mousewheel, Pagination } from "swiper/modules";
import { isMobile } from "react-device-detect";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/pagination";

import PublicationPreview from "../publication/index";
import styles from "./index.module.scss";

interface DataProps {
  data: Publication[]
}

const Slider = ({ data }: DataProps): ReactElement => {
  const [currentIndex, setCurrentIndex] = useState<Number>(2);
  const dispatch = useAppDispatch();
  const changueTitle = (index: number) => {
    const newParameters = {
      index: index,
      parameters: {
        idColor: data[index].colors[0].id,
        idSize: data[index].sizes[0].id,
        image: data[index].colors[0].images[0]
      }
    }
    dispatch(
      setCurrentPublications(newParameters)
    );
    setCurrentIndex(index);
    dispatch(
      setLoaderHandleChangueIndex(true)
    )
  };
  const handleChangueTile = (e: number) => {
    dispatch(
      setLoaderHandleChangueIndex(false)
    )
    setTimeout(() => {
      const index = e;
      changueTitle(index);
    }, 250);
  };
  if (!data[0]) {
    return <h3>
      loading
    </h3>
  }
  return (
    <Swiper
      effect={"coverflow"}
      direction="horizontal"
      centeredSlides={true}
      slidesPerView={"auto"}
      spaceBetween={isMobile ? 80 : "1vw"}
      initialSlide={2}
      coverflowEffect={{
        rotate: 0,
        stretch: 100,
        modifier: 1,
        depth: 50,
        slideShadows: false,
      }}
      modules={[EffectCoverflow, Mousewheel, Pagination]}
      className={styles.swiperContainer}
      onActiveIndexChange={(e) => handleChangueTile(e.activeIndex)}
      mousewheel
      simulateTouch
      slideToClickedSlide
      pagination={{

        horizontalClass: styles.pagination,
        clickable: true,
        bulletActiveClass: styles.swiperPaginationBulletActive,
      }}
    >
      {data.map((element, index) => (
        <SwiperSlide className={styles.slide} key={`${element.title}`}>
          <PublicationPreview publication={element.colors[0].images[0]} className={`${styles.publication} ${index === currentIndex && styles.active}`}
            width={200}

            height={200}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
export default Slider