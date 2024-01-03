import { LazyLoadImage } from "react-lazy-load-image-component";

type Props = {
  img: string;
  text: String;
};

const SearchBar: React.FC<Props> = ({ img, text }) => (
  <div className="flex flex-col justify-center items-center hover:scale-105 hover:cursor-pointer ease-in duration-300 ">
    <LazyLoadImage alt="dress" src={img} width={150} className="h-[225px]" />
    <span className="mt-2 text-sm ">{text}</span>
  </div>
);

export default SearchBar;
