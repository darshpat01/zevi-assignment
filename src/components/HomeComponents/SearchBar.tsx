import searchImg from "../../images/search.svg";

const SearchBar: React.FC = () => (
  <div className="flex bg-white rounded-xl min-h-12 items-center font-light px-5 py-3 w-[80%]">
    <input
      type="text"
      className="w-full h-full rounded-lg p-2 focus:outline-none text-2xl tracking-wide"
      placeholder="Search"
    />
    <img
      src={searchImg}
      alt="search"
      className="w-8 h-8 hover:w-10 hover:h-10 hover:cursor-pointer"
      onClick={() => console.log("search")}
    />
  </div>
);

export default SearchBar;
