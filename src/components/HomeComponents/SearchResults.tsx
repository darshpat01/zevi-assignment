import TrendItem from "./TrendItem";
import img1 from "../../images/img1.jpeg";
const divStyle =
  "my-2 hover:cursor-pointer hover:font-bold ease-in duration-100";
const SearchResults: React.FC = () => (
  <div className="bg-white shadow-lg mt-4 rounded-sm h-[100%] align-middle w-full p-6">
    <div className="">
      <div className="font-semibold text-xl mb-3">Latest Trends</div>
      <div className="flex flex-wrap  justify-between">
        <TrendItem img={img1} text="Shirt with puffed sleeves" />
        <TrendItem img={img1} text="Linen jumpsuit" />
        <TrendItem img={img1} text="White formal suit" />
        <TrendItem img={img1} text="Pattern dresses" />
        <TrendItem img={img1} text="Leather shirt dress" />
      </div>
      <div className="font-semibold text-xl mt-6 mb-3">Popular suggestions</div>
      <div className={divStyle}>Striped shirt dress</div>
      <div className={divStyle}>Satin shirts</div>
      <div className={divStyle}>Denim jumpsuit</div>
      <div className={divStyle}>Leather dresses</div>
      <div className={divStyle}>Solid tshirts</div>
    </div>
  </div>
);

export default SearchResults;
