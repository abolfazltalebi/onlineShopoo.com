import Button from "../components/Button";

export default function ProductPage() {
  return (
    <section className="grid grid-cols-2 gap-3 items-center max-w-6xl mx-auto">
      <div>
        <img
          src="https://cdsassets.apple.com/live/7WUAS350/images/tech-specs/iphone-16.png"
          alt=""
        />
      </div>
      <div className="space-y-6 ">
        <h2 className="text-2xl font-bold">آیفون 16 نرمال 128 گیگابایت</h2>
        <p className="text-sm text-justify text-amber-700 font-medium">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای است.
        </p>
        <ul className="space-y-3">
          <li className="flex items-center gap-2">
            <span className="font-bold">رنگ:</span>
            <span>مشکی</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="font-bold">حافظه داخلی:</span>
            <span>128 گیگابایت</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="font-bold">دوربین اصلی:</span>
            <span>48 مگاپیکسل</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="font-bold">باتری:</span>
            <span>4500 میلی‌آمپر</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="font-bold">قیمت:</span>
            <span className="text-amber-700 font-bold">999 دلار</span>
          </li>
        </ul>
        <div>
          <Button
            variant="secondary"
            onClick={() => {
              alert("hello button");
            }}
          >
            افزودن به سبد خرید
          </Button>
        </div>
      </div>
    </section>
  );
}
