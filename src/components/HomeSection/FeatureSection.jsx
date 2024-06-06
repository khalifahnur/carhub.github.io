// components/LandingPage.js
import Image from 'next/image';

const FeatureSection = () => {
  return (
      <section className="bg-white py-16 mt-3 cursor-pointer">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-5 text-3xl text-center font-extrabold text-[#b6b6b6]">How It Works</h2>
          <h3 className="text-lg font-semibold mb-12 ">Rent your desired car with following 3 working steps</h3>
          <div className="flex flex-col lg:flex-row justify-center items-center space-y-12 lg:space-y-0 lg:space-x-12">
            {/* Step 1 */}
            <div className="flex flex-col items-center">
              <div className="bg-white shadow-lg rounded-full p-4 mb-4">
                <Image src={'/pin.png'} alt="Pick Your Location" width={34} height={34} />
              </div>
              <h4 className="text-lg font-medium mb-2">Pick Your Location</h4>
              <p className="text-gray-600 text-sm">Choose your location and find your best car.</p>
            </div>
            {/* Step 2 */}
            <div className="flex flex-col items-center">
              <div className="bg-red-600 shadow-lg rounded-full p-4 mb-4">
                <Image src={'/calendar.png'} alt="Pick-up Date/Time" width={34} height={34} />
              </div>
              <h4 className="text-lg font-medium mb-2">Pick-up date/time</h4>
              <p className="text-gray-600 text-sm">Select your pick-up date and time to book your car.</p>
            </div>
            {/* Step 3 */}
            <div className="flex flex-col items-center ">
              <div className="bg-white shadow-lg rounded-full p-4 mb-4">
                <Image src={'/car.png'} alt="Book your Desired Car" width={34} height={34} />
              </div>
              <h4 className="text-lg font-medium mb-2">Book your Desired Car</h4>
              <p className="text-gray-600 text-sm">We will deliver it directly to you.</p>
            </div>
          </div>
        </div>
      </section>
  );
}

export default FeatureSection;
