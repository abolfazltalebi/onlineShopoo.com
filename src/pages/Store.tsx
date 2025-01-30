import { Link } from "react-router-dom";
import ProductItem from "../components/ProductItem/ProductItem";

export default function Store() {
  return (
    <section className="space-y-4 max-w-6xl mx-auto">
      <h1 className="m-5 text-xl font-bold">جدیدترین محصولات</h1>
      <div className=" grid grid-cols-4 mx-auto gap-3">
        <Link to={`/products/${1}`}>
          <ProductItem />
        </Link>
        <Link to={`/products/${2}`}>
          <ProductItem />
        </Link>
        <Link to={`/products/${3}`}>
          <ProductItem />
        </Link>
        <Link to={`/products/${4}`}>
          <ProductItem />
        </Link>
      </div>
    </section>
  );
}
