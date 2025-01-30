export default function ProductItem() {
  return (
    <div className="border-2 border-neutral-200 p-4 rounded-2xl">
      <div>
        <img
          src="https://cdsassets.apple.com/live/7WUAS350/images/tech-specs/iphone-16.png"
          alt=""
        />
      </div>
      <div className="space-y-5">
        <div className=" flex items-center justify-between">
          <h2 className="text-center font-bold text-sm sm:text-xl">
            عنوان محصول
          </h2>
          <p className="text-xl text-green-700 font-medium text-center">55$</p>
        </div>
        <p className="line-clamp-3 text-justify break-normal text-sm">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است.
        </p>
      </div>
    </div>
  );
}
