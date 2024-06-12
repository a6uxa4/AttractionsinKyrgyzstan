"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative } from "swiper/modules";
import { usePathname } from "next/navigation";
import { GENERATE_DATA } from "@/utils/constants";
import path from "path";

export default function Home() {
  const pathname = usePathname();

  return (
    <main className="w-full max-w-[1440px] flex items-center justify-center min-h-[calc(100vh_-_50px)]">
      <Swiper
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        modules={[EffectCreative]}
      >
        {GENERATE_DATA[pathname.slice(1)].map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className={`w-full h-full rounded-md relative bg-${pathname.slice(
                1
              )}${index}`}
            >
              <h2 className="absolute text-[30px] bottom-[100px] left-5">
                {item.title}
              </h2>
              <p className="absolute text-[20px] bottom-10 left-5 bg-black/50 p-1 rounded-lg">
                {item.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
}
