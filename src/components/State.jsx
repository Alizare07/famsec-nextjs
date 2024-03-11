import React from "react";
import Link from "next/link";
import { BiChevronRight } from "react-icons/bi";

const stateContent = {
  states: [
    {
      number: "99.9%",
      label: "Child Safety Solutions",
    },
    {
      number: "3.912",
      label: "Happy Customers",
    },
    {
      number: "4.5",
      label: "Rating Reviews",
    },
  ],
  getStarted: {
    heading: "Get started with our service?",
    descripion:
      "We understand protecting your loved one is of almost important.",
    img: "/babynew.png",
    cta: {
      cta_href: "#_",
      cta_label: "Learn more",
    },
  },
  
};

const State = () => {
  return (
    <section className="pt-20 pb-10">
      <div className="container px-4 mx-auto">
        <div className="md:flex justify-between items-center space-x-0">
          <div className="w-full md:w-7/12 mb-20 md:mb-0">
            <div className="grid grid-cols-3 ">
              {stateContent.states.map((state, idx) => (
                <div className="text-center md:text-left" key={state.label}>
                  <strong
                    className="text-primary text-4xl lg:text-[52px]
                            font-bold block leading-tight"
                  >
                    {state.number}
                  </strong>
                  <span>{state.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full md:w-5/12">
            <div className="bg-light py-10 px-7 md:px-10 !pr-28 md:!pr-32 lg:!pr-42 rounded-lg relative">
                {stateContent.getStarted.img && (
                    <img src={stateContent.getStarted.img} alt="image-5"
                    className="absolute right-0 md:right-6 -top-14 w-24"/>
                )}
                {stateContent.getStarted.heading && (
                   <h3 className="text-heading text-xl font-bold mb-3">{stateContent.getStarted.heading}</h3>
                )}
                {stateContent.getStarted.descripion && (
                   <p className=" text-md  mb-5">{stateContent.getStarted.descripion}</p>
                )}
                {stateContent.getStarted.cta.cta_label && (
                   <Link href={stateContent.getStarted.cta.cta_href} className="flex space-x-2 outline-none items-center font-semibold text-primary group">
                    <span>{stateContent.getStarted.cta.cta_label}</span>
                    <span className="w-6 h-6 rounded-full bg-primary text-white inline-flex items-center justify-center duration-300 transition-all ease-in-out group-hover:bg-secondary relative left-0 group-hover:left-1">
                        <BiChevronRight className="text-lg"/>
                    </span>
                   </Link>
                )}

            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default State;
