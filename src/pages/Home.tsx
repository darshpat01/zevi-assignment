import SearchBar from "../components/HomeComponents/SearchBar";
import SearchResults from "../components/HomeComponents/SearchResults";
import zeviLogo from "../images/zevi-logo.png";
import { useState } from "react";

const Home: React.FC = () => {
  const [results, setResults] = useState([]);

  return (
    <div className="w-screen h-screen bg-primary bg-cover bg-left-top">
      <div className="flex h-full w-full justify-center items-center ">
        <div className="absolute top-0 right-0 m-4">
          <img src={zeviLogo} alt="logo" className="w-16" />
        </div>
        <div className="flex justify-center w-[60%] h-[85%] mt-4">
          <div className="w-full h-full flex flex-col items-center">
            <SearchBar setResults={setResults} />
            <SearchResults results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
