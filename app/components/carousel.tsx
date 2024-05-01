"use client";
import { useEffect } from "react";

const Carousel = () => {
  useEffect(() => {
    const init = async () => {
      const { Carousel, initTWE } = await import("tw-elements");
      initTWE({ Carousel });
    };
    init();
  }, []);
  return (
    <div
      id="carouselExampleCaptions"
      className="relative"
      data-twe-carousel-init
      data-twe-ride="carousel"
    >
      <div className="relative rounded-lg w-full overflow-hidden ">
        <div
          className="relative float-left -mr-[100%] w-[90vw]  transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-twe-carousel-active
          data-twe-carousel-item
          style={{ backfaceVisibility: "hidden" }}
        >
          <img
            src="/img.jpeg"
            className="block h-[75vh] w-full rounded-lg "
            alt="..."
          />
          {/* top text */}
          <div className="absolute inset-x-[7%] inset-y-[5%]  rounded-md !flex !justify-between  bottom-10   text-white md:block">
            <div className="font-bold text-2xl  ">Mains</div>
            <div className=" ">
              Answer writing is <br /> that{" "}
              <span className="simple"> simple!</span>
            </div>
          </div>

          {/* green verdict */}
          <div className="absolute green inset-x-[1%] inset-y-[5%]  bottom-20  px-10 py-52 text-white md:block">
            Green <br /> Verdict
          </div>

          <div className="absolute inset-x-[5%]  bs3 rounded-md   bottom-10  py-5 text-white md:block">
            <div className="">
              <img
                src="/img.jpeg"
                alt=""
                width={110}
                height={92}
                className="rounded flex"
              />
            </div>
            <div className="gs3">
              <h4 className="flex">
                <section className="bg-red-500 rounded  bg-cover font-bold">
                  GS3
                </section>
                Conversation
              </h4>
              <p className="font-bold">
                Analysis of campaign songs and newspaper ads of the BJP and
                Congress during <br /> Lok Sabha elections
              </p>
            </div>
            <div>
              <button
                type="button"
                className=" btn-bg focus:outline-none text-white focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
              >
                Read More
              </button>
            </div>
          </div>
        </div>

        <div
          className="relative float-left -mr-[100%] hidden w-[90vw] transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-twe-carousel-item
          style={{ backfaceVisibility: "hidden" }}
        >
          <img
            src="/img.jpeg"
            className="block h-[75vh] w-full rounded-lg "
            alt="..."
          />
          <div className="absolute inset-x-[7%] inset-y-[5%]  rounded-md !flex !justify-between  bottom-10   text-white md:block">
            <div className="font-bold text-2xl  ">Mains</div>
            <div className=" ">
              Answer writing is <br /> that{" "}
              <span className="simple"> simple!</span>
            </div>
          </div>

          {/* green verdict */}
          <div className="absolute green inset-x-[1%] inset-y-[5%]  bottom-20  px-10 py-52 text-white md:block">
            Green <br /> Verdict
          </div>

          <div className="absolute inset-x-[5%]  bs3 rounded-md   bottom-10  py-5 text-white md:block">
            <div className="">
              <img
                src="/img.jpeg"
                alt=""
                width={110}
                height={92}
                className="rounded flex"
              />
            </div>
            <div className="gs3">
              <h4 className="flex">
                <section className="bg-red-500 rounded  bg-cover font-bold">
                  GS3
                </section>
                Conversation
              </h4>
              <p className="font-bold">
                Analysis of campaign songs and newspaper ads of the BJP and
                Congress during <br /> Lok Sabha elections
              </p>
            </div>
            <div>
              <button
                type="button"
                className=" btn-bg focus:outline-none text-white focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>

      <button
        className="absolute bottom-0 left-0 top-0 right-10 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        data-twe-target="#carouselExampleCaptions"
        data-twe-slide="prev"
      >
        <span className="inline-block h-8 w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </span>
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Previous
        </span>
      </button>
      <button
        className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        data-twe-target="#carouselExampleCaptions"
        data-twe-slide="next"
      >
        <span className="inline-block h-8 w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </span>
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Next
        </span>
      </button>
      <div className="font-bold mt-4 ml-2">Mains Categories</div>
    </div>
  );
};

export default Carousel;
