import Image from "next/image";
import Link from "next/link";

const heroContent = {
  text: {
    subheding: "Welcome to FamSec",
    heading: "Protecting Families, Securing Futures",
    description:
      "Lorem ipsum dolorsit amet consectetur adipisicing elit Voluptatum sunt Quo excepturi delectusconsequuntur harum modi voluptate pariatursaepe repellendus dolorum debitis rerum autem ea aliquam placeat nihil velit magni?",
  },
  images: {
    img1: "/babynew.png",
    img2: "/baby2.png",
    img3: "/family.png",
    img4: "/family2.png",
    img5: "/familynew1.png",
  },
};

const Hero = () => {
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <div className="md:flex justify-between items-center">
          <div className="md:w-5/12 mb-10 md:mb-0">
            {heroContent.text.subheding && (
              <span
                className="inline-block py-0.5 pl-3 text-heading font-semibold
                relative mb-7 before:content-[''] before:absolute before:w-2/3 before:bg-yellowLight before:left-0 before:top-0 before:bottom-0 before:z-[-10]"
              >
                {heroContent.text.subheding}
              </span>
            )}
            {heroContent.text.heading && (
              <h1 className="text-4xl md:text-5xl font-bold text-heading mb-7">
                {heroContent.text.heading}
              </h1>
            )}
            {heroContent.text.description && (
              <p className="leading-relaxed text-body mb-10">
                {heroContent.text.description}
              </p>
            )}

            <div className="flex space-x-3">
              <Link
                href={"#"}
                className=" py-4 px-5 bg-primary text-white rounded-lg duration-300 transition-all ease-in-out hover:bg-[#134761] hover:shadow-lg inline-block relative top-0 hover:-top-1"
              >
                Get Started
              </Link>
              <Link
                href={"#"}
                className=" py-4 px-5 bg-secondary text-white rounded-lg duration-300 transition-all ease-in-out hover:bg-[#179792] hover:shadow-lg inline-block relative top-0 hover:-top-1"
              >
                How It Works?
              </Link>
            </div>
          </div>
          <div className="md:w-6/12 space-y-2">
            <div className="flex items-stretch space-x-2">
              <div className="w-8/12">
                {heroContent.images.img1 && (
                  <Image
                    src={heroContent.images.img1}
                    width={397}
                    height={406}
                    alt="ali-image"
                    className="object-cover w-full h-full rounded-lg"
                  />
                )}
              </div>
              <div className="w-4/12 self-end space-y-2">
                <div className="grid grid-cols-2 gap-2">
                  {heroContent.images.img2 && (
                    <div>
                      <Image
                        src={heroContent.images.img2}
                        width={437}
                        height={437}
                        alt="ali-image"
                        className=" object-cover w-full h-full rounded-2xl "
                      />
                    </div>
                  )}
                  <div className="bg-yellowLight rounded-2xl rounded-tr-[200px]"></div>
                </div>
                {heroContent.images.img3 && (
                  <div>
                    <Image
                      src={heroContent.images.img3}
                      width={374}
                      height={392}
                      alt="image-ali"
                      className="object-cover w-full h-full rounded-2xl"
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="flex space-x-2">
              <div className="w-4/12">
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-greenLight rounded-2xl rounded-bl-[200px]"></div>
                  {heroContent.images.img4 && (<div>
                    <Image  src={heroContent.images.img4} width={394} height={394} 
                    className="object-cover w-full h-full rounded-2xl"/>
                  </div>)}
                </div>
              </div>
              <div className="w-5/12">
              {heroContent.images.img5 && (
                    <Image  src={heroContent.images.img5} width={446} height={495} 
                    className="object-cover w-full h-full rounded-2xl"/>
                  )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
