import searchImg from "../images/search.svg";
import zeviLogo from "../images/zevi-logo.png";
const Search: React.FC = () => (
  <div className="h-screen w-screen">
    <div className="h-[10%] flex ">
      <div className="basis-[20%]"></div>
      <div className="basis-[60%] justify-center flex items-center py-6">
        <div className="flex justify-center items-center w-[80%] bg-white rounded-lg px-2 border-2 border-gray-400 font-normal">
          <input
            type="text"
            className="w-full h-full p-2 rounded-lg focus:outline-none text-2xl tracking-wide "
            placeholder="Search"
          />
          <img
            src={searchImg}
            alt="search"
            className="w-8 h-8 hover:cursor-pointer"
            onClick={() => console.log("search")}
          />
        </div>
      </div>
      <div className="basis-[20%] flex justify-end items-center">
        <img src={zeviLogo} alt="logo" className="w-16 m-4" />
      </div>
    </div>
    <div className="h-[90%] bg-gray-100 flex">
      <div className="w-[25%] bg-yellow-200 p-4">
        <div></div>
      </div>
      <div className="w-[75%] bg-red-300"></div>
    </div>
  </div>
);

export default Search;
