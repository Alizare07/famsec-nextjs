"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useCallback,  useRef, useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";

const blogContent = {
  heading: {
    headingSubTitle: "Our Writeups",
    headingTitle: "Our Latest Articles",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, error maiores ullam non dolor sed molestias soluta labore autem magnam. Exercitationem doloribus quam harum incidunt deserunt ipsam blanditiis fuga fugit.",
  },
  recentBlog: [
    {
      permalink: "#_",
      featuredImg: "/family2.png",
      title: "10 Essensial tips for protecting your home from burglaries",
      excert:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Idplaceat quisquam reiciendis,",
      author: {
        img: "/babynew.png",
        name: "Ali Zare",
        title: "Editor ,SEo",
      },
    },
    {
      permalink: "#_",
      featuredImg: "/family2.png",
      title: "10 Essensial tips for protecting your home from burglaries",
      excert:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Idplaceat quisquam reiciendis,",
      author: {
        img: "/babynew.png",
        name: "Ali Zare",
        title: "Editor ,SEo",
      },
    },
    {
      permalink: "#_",
      featuredImg: "/family2.png",
      title: "10 Essensial tips for protecting your home from burglaries",
      excert:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Idplaceat quisquam reiciendis,",
      author: {
        img: "/babynew.png",
        name: "Ali Zare",
        title: "Editor ,SEo",
      },
    },
    {
      permalink: "#_",
      featuredImg: "/family2.png",
      title: "10 Essensial tips for protecting your home from burglaries",
      excert:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Idplaceat quisquam reiciendis,",
      author: {
        img: "/babynew.png",
        name: "Ali Zare",
        title: "Editor ,SEo",
      },
    },
    {
      permalink: "#_",
      featuredImg: "/family2.png",
      title: "10 Essensial tips for protecting your home from burglaries",
      excert:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Idplaceat quisquam reiciendis,",
      author: {
        img: "/babynew.png",
        name: "Ali Zare",
        title: "Editor ,SEo",
      },
    },
    {
      permalink: "#_",
      featuredImg: "/family2.png",
      title: "10 Essensial tips for protecting your home from burglaries",
      excert:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Idplaceat quisquam reiciendis,",
      author: {
        img: "/babynew.png",
        name: "Ali Zare",
        title: "Editor ,SEo",
      },
    },
  ],
  cta: {
    href: "#_",
    label: "the view all post",
    labelSuffix: "click here",
  },
};

const RecentBlog = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [isEnd, setIsEnd] = useState(null);
  const [isBegining, setIsBegining] = useState(null);
  const slideRef = useRef(null);

  useState(() => {
    setIsEnd(slideRef.current?.swiper.isEnd);
    setIsBegining(slideRef.current?.swiper.isBegining);
  });

  const prevHandler = useCallback(() => {
    if (!slideRef.current) return;
    slideRef.current.swiper.slidePrev();
  });
  const nextHandler = useCallback(() => {
    if (!slideRef.current) return;
    slideRef.current.swiper.slideNext();
  });

  return (
    <section className="py-20 bg-light overflow-x-hidden">
      <div className="container px-4 mx-auto">
        <div className="lg:flex justify-between items-center mb-10">
          <div className="lg:w-5/12 mb-10 lg:mb-0">
            {blogContent.heading.headingSubTitle && (
              <span
                className="inline-block py-0.5 z-50 pl-3 text-heading font-semibold
                      relative mb-7 before:content-[''] before:absolute before:w-2/3 before:bg-yellowLight before:left-0 before:top-0 before:bottom-0 before:-z-10"
              >
                {blogContent.heading.headingSubTitle}
              </span>
            )}
            {blogContent.heading.headingTitle && (
              <h2 className="text-heading text-2xl lg:text-4xl font-bold mb-5">
                {blogContent.heading.headingTitle}
              </h2>
            )}
            {blogContent.heading.description && (
              <p className="text-body leading-relaxed">
                {blogContent.heading.description}
              </p>
            )}
          </div>
          <div className="lg:w-5/12 text-left lg:text-right">
            <div className="inline-flex ml-auto space-x-3">
              <div
                onClick={prevHandler}
                className={`${
                  isBegining == true
                    ? "opacity-0 bg-[#e1e7ea] cursor-auto"
                    : "opacity-100 hover:bg-primary"
                }
                    group duration-300 transition-all ease-in-out w-12 h-12 curser-pointer bg-[#E1E7Ea] rounded-full inline-flex justify-center items-center`}
              >
                <BiChevronRight
                  className={`text-3xl text-primary duration-300 transition-all ease-in-out group-hover:text-white ${
                    isBegining == true
                      ? "group-hover:!text-primary"
                      : "group-hover:text-white"
                  }`}
                />
              </div>
              <div
                onClick={nextHandler}
                className={`${
                  isEnd == true
                    ? "opacity-0 bg-[#e1e7ea] cursor-auto"
                    : "opacity-100 hover:bg-primary"
                }
                    group duration-300 transition-all ease-in-out w-12 h-12 curser-pointer bg-[#E1E7Ea] rounded-full inline-flex justify-center items-center`}
              >
                <BiChevronLeft
                  className={`text-3xl text-primary duration-300 transition-all ease-in-out group-hover:text-white ${
                    isEnd == true
                      ? "group-hover:!text-primary"
                      : "group-hover:text-white"
                  }`}
                />
              </div>
            </div>
          </div>
        </div>
        <Swiper
          breakpoints={{
            640: {
              width: "640",
              slidesPerView: "1",
            },
            768: {
              width: "768",
              slidesPerView: "2",
            },
            968: {
              width: "968",
              slidesPerView: "3",
            },
          }}
          ref={slideRef}
          speed={700}
          onSlideChange={(swiper) => setSlideIndex(swiper.activeIndex)}
          className="z-50 py-32 mb-24 relative flex items-stretch !overflow-visible
            befor:content-[''] before:py-32 before:z-50 before:right-full before:w-screen before:absolute before:-top-5 before:-bottom-5 before:bg-light"
        >
          {blogContent.recentBlog.map((blog, idx) => (
            <SwiperSlide className="overflow-visible h-full">
              <div className="p-5 rounded-lg bg-white relative mt-10">
                <Link
                  href={blog.permalink}
                  className="relative -mt-10 inline-block overflow-hidden rounded-lg "
                >
                  <Image
                    src={blog.featuredImg}
                    width={782}
                    height={462}
                    alt="image-6"
                  />
                </Link>
                <h2 className="text-heading text-lg font-bold leading-7 mb-5">
                  <Link href={blog.permalink} className="relative text-heading">
                    {blog.title}
                  </Link>
                </h2>
                <p className=" relative mb-6">{blog.excert}</p>
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <Image
                      src={blog.author.img}
                      width={50}
                      height={50}
                      className="rounded-full w-15 h-15 object-cover"
                    />
                  </div>
                  <div className="leading-5">
                    <strong className="text-primary">{blog.author.name}</strong>
                    <span className=" block text-sm">{blog.author.title}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default RecentBlog;
