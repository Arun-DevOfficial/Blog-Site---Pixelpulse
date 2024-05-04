import Background from "../assets/Ocean.jpg";
import Navbar from "../Components/Navbar";
import Pagination from "../Components/Pagination";
import Promotion from "../Components/Promotion";
import Testimonial from "../Components/Testimonial";

export default function Home() {
  return (
    <>
      <section className="w-full min-h-screen">
        <header
          className="w-full bg-center bg-cover object-left relative"
          style={{ backgroundImage: `url(${Background})` }}
        >
          <section>
            <nav className="bg-black/20 p-5">
              <div className="mx-auto flex w-full lg:w-[93%] justify-between px-4 py-3">
                <Navbar />
              </div>
            </nav>
            <div className="mx-auto w-full lg:w-[75%] py-40 p-8 text-white">
              <div className="w-full md:max-w-[80%] lg:w-[80%] lg:max-w-[70%] xl:max-w-[40%]">
                <p className="w-28 rounded-lg bg-slate-100/20 text-white px-3 font-medium hover:bg-slate-100/30 cursor-pointer">
                  ADVENTURE
                </p>
                <h1 className="py-4 text-xl md:text-2xl lg:text-4xl font-semibold">
                  Richard Norton Photorealistic rendering as real photos
                </h1>
                <div className="divide-x-2 flex space-y-4 lg:items-center flex-col md:flex-row">
                  <h1 className="font-semibold pr-4">04.05.2024</h1>
                  <p className="pl-3 text-justify text-sm">
                    Progressively incentivize cooperative sysytems through
                    technically sound functionalities.The credibly productivate
                    seamless data.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </header>
        <Pagination />
        <Testimonial />
        <Promotion />
      </section>
    </>
  );
}
