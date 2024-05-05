import { useState } from "react";
import Post from "../Components/post.json";

export default function Pagination() {
  const [currentPage, setCurrentPage] = useState("All");

  const handlePagination = (e) => {
    const text = e.target.innerHTML;
    setCurrentPage(text);
    console.log(currentPage);
  };

  return (
    <>
      <section className="py-40 w-full md:w-full lg:w-[70%] mx-auto">
        <div className="p-6 md:p-12 lg:p-4 xl:p-4">
          <div className="flex flex-col space-y-6">
            <h1 className="text-lg md:text-3xl lg:text-3xl xl:text-4xl font-semibold">
              Popular topics
            </h1>
            <div className="flex flex-wrap">
              <button
                className={`pr-2 mb-2 md:pr-4 md:mb-0 ${
                  currentPage === "All" ? "text-[#15bfae]" : null
                } hover:text-slate-400 font-medium`}
                onClick={handlePagination}
              >
                All
              </button>
              <button
                className={`pr-2 mb-2 md:pr-4 md:mb-0 ${
                  currentPage === "Adventure" ? "text-[#15bfae]" : null
                } hover:text-slate-400 font-medium`}
                onClick={handlePagination}
              >
                Adventure
              </button>
              <button
                className={`pr-2 mb-2 md:pr-4 md:mb-0 ${
                  currentPage === "Fashion" ? "text-[#15bfae]" : null
                } hover:text-slate-400 font-medium`}
                onClick={handlePagination}
              >
                Fashion
              </button>
              <button
                className={`pr-2 mb-2 md:pr-4 md:mb-0 ${
                  currentPage === "Travel" ? "text-[#15bfae]" : null
                } hover:text-slate-400 font-medium`}
                onClick={handlePagination}
              >
                Travel
              </button>
              <button
                className={`pr-2 mb-2 md:pr-4 md:mb-0 ${
                  currentPage === "Technology" ? "text-[#15bfae]" : null
                } hover:text-slate-400 font-medium`}
                onClick={handlePagination}
              >
                Technology
              </button>
              <button
                className={`pr-2 mb-2 md:pr-4 md:mb-0 ${
                  currentPage === "Branding" ? "text-[#15bfae]" : null
                } hover:text-slate-400 font-medium`}
                onClick={handlePagination}
              >
                Branding
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 p-5 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {Post?.[`${currentPage}`].map((item, index) => {
            return (
              <div
                key={index}
                className="hover:scale-105 transition-transform duration-300 ease-in-out"
              >
                <div
                  style={{ backgroundImage: `url(${item.url})` }}
                  className="flex justify-center mx-auto  text-center rounded-lg py-28 lg:py-32 lg:px-32 bg-cover bg-center relative"
                >
                  <p className="absolute top-0 uppercase text-sm right-0 px-5 py-1 border m-4 rounded-lg bg-slate-100/20 text-white hover:bg-slate-100/40 cursor-pointer">
                    {item.Category}
                  </p>
                </div>
                <p className="px-2 py-2 font-medium text-slate-400/90">
                  {item.date}
                </p>
                <div className="px-2">
                  <h1 className="text-2xl my-2 text-[#15bfae] font-medium">
                    {item.title}
                  </h1>
                  <p className="text-justify text-slate-400">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
