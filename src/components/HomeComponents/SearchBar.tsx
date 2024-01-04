import searchImg from "../../images/search.svg";
import { useState } from "react";
import { faker } from "@faker-js/faker";

interface props {
  setResults: any;
}

interface FashionItem {
  productName: string;
  brand: string;
  price: string;
  rating: number;
}

const SearchBar: React.FC<props> = ({ setResults }) => {
  const [input, setInput] = useState("");
  const fetchResults = (search: string, numberOfItems: number) => {
    const fashionData: FashionItem[] = [];
    for (let i = 0; i < numberOfItems; i++) {
      const item: FashionItem = {
        productName: faker.commerce.productName(),
        brand: faker.company.name(),
        price: faker.commerce.price(),
        rating: parseFloat(
          faker.number.float({ min: 0, max: 5, precision: 0.1 }).toFixed(1)
        ),
      };
      fashionData.push(item);
    }

    const filteredResults = fashionData.filter(
      (item) =>
        item.productName.toLowerCase().includes(search.toLowerCase()) ||
        item.brand.toLowerCase().includes(search.toLowerCase())
    );
    const topResults = filteredResults
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 10);
    console.log(topResults);
    setResults(topResults);
  };
  const handleSearch = (search: string) => {
    setInput(search);
    fetchResults(search, 50);
  };

  return (
    <div className="flex bg-white rounded-xl min-h-12 items-center font-light px-5 py-3 w-[80%]">
      <input
        type="text"
        className="w-full h-full rounded-lg p-2 focus:outline-none text-2xl tracking-wide"
        placeholder="Search"
        onChange={(e) => handleSearch(e.target.value)}
      />
      <img
        src={searchImg}
        alt="search"
        className="w-8 h-8 hover:cursor-pointer"
        onClick={() => console.log("search")}
      />
    </div>
  );
};

export default SearchBar;
