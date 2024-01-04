import { LazyLoadImage } from "react-lazy-load-image-component";
import img1 from "../../images/img1.jpeg";
import { useState } from "react";

// type Props = {
//   img: string;
//   title: string;
//   p1: string;
//   p2: string;
//   rating: number;
//   ratingNumber: number;
// };

const Product: React.FC = () => {
  const [wishlist, setWishlist] = useState(false);
  return (
    <>
      <div className="flex flex-col justify-center items-center h-full">
        <div className="w-[239px] h-[325px] relative rounded-sm hover:cursor-pointer">
          <LazyLoadImage
            alt="dress"
            src={img1}
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
          <div className=" text-blue-500 font-bold pl-2">Rs.599</div>
        </div>
        <div className="flex items-center">
          <span className="material-icons text-yellow-500">star</span>
          <span className="material-icons text-yellow-500">star</span>
          <span className="material-icons text-yellow-500">star</span>
          <span className="material-icons text-yellow-500">star</span>
          <span className="material-icons text-yellow-500">star</span>
          <span className="text-sm text-gray-500">(210)</span>
        </div>
      </div>
    </>
  );
};

export default Product;
