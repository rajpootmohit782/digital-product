import React from "react";
import VideoBackground from "./Videbackground.jsx"; // Path to the VideoBackground component file
// import ClientLogosSlider from "./ClientLogosSlider.jsx";

function Marketing() {
  return (
    <div>
      {/* <ClientLogosSlider /> */}
      <section className="bg-gray-50 dark:bg-gray-800 ">
        <div
          className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6 z-10"
          style={{ zIndex: "10" }}
        >
          {/* Row 1 */}
          <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
            <div className="text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                High performance Marketing with Next Gen Tools.
              </h2>
              <p
                className="mb-8 font-light lg:text-xl"
                style={{ color: "grey" }}
              >
                Unlock unparalleled growth and ROI with high-performance
                marketing fueled by next-gen tools tailored for success in the
                digital age.
              </p>
              {/* List */}
              <ul
                role="list"
                className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
              >
                <li className="flex space-x-3">
                  {/* Icon */}
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                    Continuous integration and deployment
                  </span>
                </li>
                {/* Additional list items */}
              </ul>
              <p
                className="mb-8 font-light lg:text-xl"
                style={{ color: "grey" }}
              >
                Harness the power of next-gen analytics, AI-driven insights, and
                hyper-targeted strategies to elevate your marketing game and
                leave the competition in the dust."
              </p>
            </div>
            <img
              className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
              src="./feature-1.png"
              alt="dashboard feature image"
            />
          </div>
          {/* Row 2 */}
          <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
            <img
              className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
              src="/feature-2.png"
              alt="feature image 2"
            />
            <div className="text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                We invest in the world’s potential
              </h2>
              <p
                className="mb-8 font-light lg:text-xl"
                style={{ color: "grey" }}
              >
                Experience the future of marketing with cutting-edge,
                high-performance tools designed to propel your brand into the
                digital stratosphere.
              </p>
              {/* List */}
              <ul
                role="list"
                className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
              >
                <li className="flex space-x-3">
                  {/* Icon */}
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                    Dynamic reports and dashboards
                  </span>
                </li>
                {/* Additional list items */}
              </ul>
              <p className="font-light lg:text-xl" style={{ color: "gray" }}>
                Deliver great service experiences fast - without the complexity
                of traditional ITSM solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Marketing;
