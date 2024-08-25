import React from "react";

const Newsletter = () => {
  return (
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16">
      <div className="flex items-center justify-center lg:w-2/5 mx-auto">
        <div className="text-center">
          <h2 className="lg:text-5xl text-3xl text-neutral-800 font-semibold mb-6 lg:leading-snug">
            How to design your site footer like we did
          </h2>
          <div className="flex items-center justify-center gap-8">
            <button className="btn-primary text-white">
              Get a Demo{" "}
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="inline-block ml-2"
              >
                <path
                  d="M11.2503 11.0001L13.7201 8.53039C14.013 8.23749 14.013 7.7626 13.7201 7.4697L11.2503 4.99997M13.5004 8.00004L2.50012 8.00004"
                  stroke="white"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
