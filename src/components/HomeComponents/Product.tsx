import { LazyLoadImage } from "react-lazy-load-image-component";
import { useState } from "react";

type props = {
  id: number;
  name: string;
  brand: string;
  price: number;
  rating: number;
  img: string;
};

const Product: React.FC<props> = ({ id, name, brand, price, rating, img }) => {
  const [wishlist, setWishlist] = useState(false);
  const renderStars = () => {
    return Array.from({ length: rating }, (_, index) => (
      <span key={index} className="material-icons text-yellow-500">
        star
      </span>
    ));
  };
  return (
    <>
      <div>
        <div className="group w-[239px] h-[325px] relative rounded-sm hover:cursor-pointer ">
          <div className="invisible group-hover:visible absolute z-99 bottom-0  bg-indigo-500 bg-opacity-40 w-full text-white flex justify-center items-center text-xl p-2">
            View Product
          </div>
          <LazyLoadImage
            alt="dress"
            src={img}
            className="w-full h-full rounded-sm "
          />
          <span
            onClick={() => {
              setWishlist(!wishlist);
            }}
            className={`material-icons ${
              wishlist ? "text-red-500" : "text-white"
            } absolute top-0 right-0 p-2 hover:text-red-500 hover:cursor-pointer scale-110 `}
          >
            {wishlist ? "favorite" : "favorite_border"}
          </span>
        </div>
        <div className="pt-2 ">Round neck cotton Tee</div>
        <div className="flex">
          <div className=" line-through text-gray-500 ">Rs.599</div>
          <div className=" text-blue-500 font-bold pl-2">Rs.{price}</div>
        </div>
        <div className="flex items-center">{renderStars()}</div>
      </div>
    </>
  );
};

export default Product;
