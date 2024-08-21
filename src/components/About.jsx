import React from "react";
import aboutImg from "../assets/about1.png";

const About = () => {
  return (
    <div>
      {/* about text */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <img src={aboutImg} alt="about image" />
          </div>
          <div className="md:w-3/5 mx-auto">
            <h2 className="txt-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5">
              The unseen of spending three years at Pixelgrade
            </h2>
            <p className="md:w-3/4 text-sm text-neutralGrey mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              excepturi aut esse quasi ratione doloribus repellendus totam culpa
              ducimus voluptas aperiam cumque eligendi vero ullam ut, impedit,
              eos sed nulla soluta! Quibusdam nostrum nulla, consequuntur ipsa
              sequi esse! Porro hic voluptate doloribus possimus alias esse
              nulla voluptatum voluptatem, itaque dolor?
            </p>
            <button className="btn-primary">Learn More</button>
          </div>
        </div>
      </div>

      {/* company stats */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16 border-2 border-yellow-500">
        <div className="flex flex-col md:flex-row  justify-between items-center gap-8 border-2 border-yellow-500">
          <div className="md:w-1/2 border-2 border-yellow-500">
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-2/3">
              Helping a local{" "}
              <span className="text-brandPrimary">
                business reinvent itself
              </span>
            </h2>
            <p className="md:w-3/4 text-sm text-neutralGrey mb-8">
              We reached here with our hard work and dedication
            </p>
            <button className="btn-primary">Learn More</button>
          </div>

          {/* stats */}
          <div className="md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <img src="/src/assets/icons/member.png" alt="member icon" />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                    2,245,341
                  </h4>
                  <p>Members</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img src="/src/assets/icons/club.png" alt="club icon" />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                    46,328
                  </h4>
                  <p>Clubs</p>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <img src="/src/assets/icons/event.png" alt="event icon" />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                    828,867
                  </h4>
                  <p>Event Bookings</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img src="/src/assets/icons/payment.png" alt="payment icon" />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                    1,926,436
                  </h4>
                  <p>Payments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
