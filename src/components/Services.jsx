import React from "react";

const Services = () => {
  return (
    <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto">
      <div className="text-center my-8">
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-3">
          Our Clients
        </h2>
        <p className="text-neutralDGrey">
          We have been working with some Fortune 500+ clients
        </p>

        {/* company logo */}
        <div className="my-12 flex flex-wrap justify-between items-center gap-8">
          <img src="/src/assets/company1.png" alt="company 1" />
          <img src="/src/assets/company2.png" alt="company 2" />
          <img src="/src/assets/company3.png" alt="company 3" />
          <img src="/src/assets/company4.png" alt="company 4" />
          <img src="/src/assets/company5.png" alt="company 5" />
          <img src="/src/assets/company6.png" alt="company 6" />
          <img src="/src/assets/company7.png" alt="company 7" />
        </div>
      </div>
      {/* services cards */}
      <div className="mt-20 md:w-1/2 mx-auto text-center">
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-3">
          Manage your entire community in a single system
        </h2>
        <p className="text-neutralDGrey">Who is Nextcent suitable for?</p>
      </div>
    </div>
  );
};

export default Services;
