export default function Testimonial() {
  return (
    <section
      className="bg-cover bg-center flex justify-center items-center p-8 flex-col w-full"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1524946274118-e7680e33ccc5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
      }}
    >
      <div className="mx-auto flex justify-center items-center flex-col text-white py-36 w-full lg:max-w-[40%] text-center">
        <p className="w-28 rounded-lg bg-slate-100/20 text-white px-3 font-medium hover:bg-slate-100/30 cursor-pointer border">
          ADVENTURE
        </p>
        <h1 className="py-4 text-2xl capitalize md:text-2xl lg:text-5xl font-semibold">
          Richard Norton Photorealistic{" "}
          <span className="text-[#15bfae]">rendering as real photos</span>
        </h1>
        <div className="flex space-y-4 lg:items-center flex-col">
          <h1 className="font-bold pr-4">04.05.2024</h1>
          <p className="py-3 text-md md:text-md font-bold text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            modi distinctio voluptate vitae! Quo ullam reiciendis veniam
            possimus quos similique porro aliquid, voluptatum repellat eos vero,
            nobis minus inventore sed. Autem eligendi voluptatibus aut rerum
            laborum. Blanditiis nihil repudiandae at aperiam. Doloribus
            cupiditate assumenda cumque praesentium commodi consequuntur
            accusantium quidem exercitationem voluptatem? Sed aliquam facilis,
            neque nesciunt voluptate beatae voluptates.
          </p>
        </div>
      </div>
    </section>
  );
}
