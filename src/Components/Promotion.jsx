import Editor from "../Components/Editor.json";

export default function Promotion() {
  return (
    <>
      <section className="w-full lg:w-[80%] gap-6 mx-auto py-40 px-6">
        <div>
          <h1 className="text-3xl font-semibold md:text-2xl lg:text-3xl xl:text-4xl text-slate-700">
            Editor's Pick
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-12">
          {Editor.map((item, index) => (
            <div
              key={index}
              className="bg-center bg-cover w-full h-[300px] rounded-lg relative"
              style={{ backgroundImage: `url(${item.url})` }}
            >
              <div className="flex flex-col  py-32 px-8 text-white">
                <p className="absolute top-0 right-0 px-3 py-1 m-4 font-medium text-white/90 bg-slate-100/20 hover:bg-slate-100/30 cursor-pointer rounded-lg border">
                  {item.category}
                </p>
                <h1 className="text-2xl py-2 text-[#15bfae] font-bold">{item.title}</h1>
                <p className="text-justify">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
