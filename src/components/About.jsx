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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae excepturi aut esse quasi ratione doloribus repellendus totam culpa ducimus voluptas aperiam cumque eligendi vero ullam ut, impedit, eos sed nulla soluta! Quibusdam nostrum nulla, consequuntur ipsa sequi esse! Porro hic voluptate doloribus possimus alias esse nulla voluptatum voluptatem, itaque dolor?
            </p>
            <button className="btn-primary">Learn More</button>
          </div>
        </div>
      </div>

      {/* company stats */}
      <div>
        
      </div>
    </div>
  );
};

export default About;
