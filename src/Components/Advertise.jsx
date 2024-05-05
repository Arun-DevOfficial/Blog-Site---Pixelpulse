export default function Advertise() {
  return (
    <footer className="bg-gray-800 py-6">
      <div className="container mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center lg:justify-between">
        <div className="text-gray-300 font-medium mb-4 lg:mb-0 flex flex-col lg:flex-row lg:items-center lg:divide-x-2">
          <h1 className="pr-3 text-base lg:text-lg">2024</h1>
          <p className="lg:pl-3 text-sm lg:text-base">Dark Publisher Studio</p>
        </div>
        <button className="py-3 px-4 text-gray-800 bg-gray-100 text-sm hover:text-white font-medium rounded-lg hover:bg-teal-500 transition duration-300 ease-in-out">
          Subscribe Now
        </button>
      </div>
    </footer>
  );
}
