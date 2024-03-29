import searchImg from "../images/search.svg";
import { useState, useEffect } from "react";
import zeviLogo from "../images/zevi-logo.png";
import Product from "../components/HomeComponents/Product";
import { Checkbox, RadioGroup, Radio, Stack } from "@chakra-ui/react";
import img1 from "../images/s-img-1.jpeg";
import img2 from "../images/s-img-2.jpeg";
import img3 from "../images/s-img-3.jpeg";
import img4 from "../images/s-img-4.jpeg";
import img5 from "../images/s-img-5.jpeg";
import img6 from "../images/s-img-6.jpeg";
import img7 from "../images/s-img-7.jpeg";
import img8 from "../images/s-img-8.jpeg";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  Box,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

type Product = {
  id: number;
  name: string;
  brand: string;
  price: number;
  rating: number;
  img: string;
};

type Brand = string;
type Rating = number;

const defaultData = [
  {
    id: 1,
    name: "Round neck cotton Tee",
    brand: "Mango",
    price: 599,
    rating: 5,
    img: img1,
  },
  {
    id: 2,
    name: " High waist trousers",
    brand: "Mango",
    price: 749,
    rating: 4,
    img: img2,
  },
  {
    id: 3,
    name: "High neck pullover",
    brand: "Mango",
    price: 1099,
    rating: 4,
    img: img3,
  },
  {
    id: 4,
    name: "Round neck cotton Tee",
    brand: "Mango",
    price: 1099,
    rating: 2,
    img: img4,
  },
  {
    id: 5,
    name: "Round neck cotton Tee",
    brand: "Mango",
    price: 699,
    rating: 4,
    img: img5,
  },
  {
    id: 6,
    name: "Round neck cotton Tee",
    brand: "Mango",
    price: 299,
    rating: 4,
    img: img6,
  },
  {
    id: 7,
    name: "Round neck cotton Tee",
    brand: "H&M",
    price: 1099,
    rating: 1,
    img: img7,
  },
  {
    id: 8,
    name: "Round neck cotton Tee",
    brand: "H&M",
    price: 2099,
    rating: 3,
    img: img8,
  },
];

const Search: React.FC = () => {
  const [selectedBrands, setSelectedBrands] = useState<Brand[]>([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>("");
  const [selectedRatings, setSelectedRatings] = useState<Rating[]>([]);
  const [data, setData] = useState<Product[]>(defaultData); // Assuming your mock data matches the Product type

  const handleBrandChange = (brand: Brand) => {
    const newBrands = selectedBrands.includes(brand)
      ? selectedBrands.filter((b) => b !== brand)
      : [...selectedBrands, brand];
    console.log(newBrands);
    setSelectedBrands(newBrands);
  };

  const handlePriceChange = (event: any) => {
    setSelectedPriceRange(event);
  };

  const handleRatingsChange = (rating: Rating) => {
    const newRatings = selectedRatings.includes(rating)
      ? selectedRatings.filter((r) => r !== rating)
      : [...selectedRatings, rating];
    console.log(newRatings);
    setSelectedRatings(newRatings);
  };

  const applyFilters = (): Product[] => {
    // Check if no filters are active
    const areFiltersInactive =
      selectedBrands.length === 0 &&
      selectedPriceRange === "" &&
      selectedRatings.length === 0;

    // If no filters are active, return all data
    if (areFiltersInactive) {
      return defaultData;
    }

    let filteredData = defaultData;

    // Filter by brands
    if (selectedBrands.length > 0) {
      filteredData = filteredData.filter((item) =>
        selectedBrands.includes(item.brand)
      );
    }

    // Filter by price range
    if (selectedPriceRange) {
      let minPrice = 0;
      let maxPrice = Infinity;
      switch (selectedPriceRange) {
        case "1":
          maxPrice = 500;
          break;
        case "2":
          minPrice = 1000;
          maxPrice = 3000;
          break;
        // Add more cases for other ranges
      }
      filteredData = filteredData.filter(
        (item) => item.price >= minPrice && item.price <= maxPrice
      );
    }

    // Filter by ratings
    if (selectedRatings.length > 0) {
      filteredData = filteredData.filter((item) =>
        selectedRatings.includes(item.rating)
      );
      console.log(filteredData);
    }

    return filteredData;
  };

  useEffect(() => {
    const filteredData = applyFilters();
    setData(filteredData);
  }, [selectedBrands, selectedPriceRange, selectedRatings]);

  return (
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
      <div className="h-[90%] md:flex w-full">
        <div className=" md:w-[30%]  lg:w-[25%]  p-4 overflow-y-auto">
          <Accordion defaultIndex={[0, 1, 2]} allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Brand
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="flex flex-col">
                <Checkbox
                  border="black"
                  onChange={() => handleBrandChange("Mango")}
                >
                  Mango
                </Checkbox>
                <Checkbox
                  border="black"
                  onChange={() => handleBrandChange("H&M")}
                >
                  H&M
                </Checkbox>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Price Range
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="flex flex-col">
                <RadioGroup
                  onChange={handlePriceChange}
                  value={selectedPriceRange}
                >
                  <Stack>
                    <Radio value="1">Under 500</Radio>
                    <Radio value="2">1000 to 3000</Radio>
                  </Stack>
                </RadioGroup>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Ratings
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="flex flex-col">
                <Checkbox
                  border="black"
                  onChange={() => handleRatingsChange(5)}
                >
                  <span className="material-icons text-yellow-500">star</span>
                  <span className="material-icons text-yellow-500">star</span>
                  <span className="material-icons text-yellow-500">star</span>
                  <span className="material-icons text-yellow-500">star</span>
                  <span className="material-icons text-yellow-500">star</span>
                </Checkbox>
                <Checkbox
                  border="black"
                  onChange={() => handleRatingsChange(4)}
                >
                  {" "}
                  <span className="material-icons text-yellow-500">star</span>
                  <span className="material-icons text-yellow-500">star</span>
                  <span className="material-icons text-yellow-500">star</span>
                  <span className="material-icons text-yellow-500">star</span>
                </Checkbox>
                <Checkbox
                  border="black"
                  onChange={() => handleRatingsChange(3)}
                >
                  {" "}
                  <span className="material-icons text-yellow-500">star</span>
                  <span className="material-icons text-yellow-500">star</span>
                  <span className="material-icons text-yellow-500">star</span>
                </Checkbox>
                <Checkbox
                  border="black"
                  onChange={() => handleRatingsChange(2)}
                >
                  <span className="material-icons text-yellow-500">star</span>
                  <span className="material-icons text-yellow-500">star</span>
                </Checkbox>
                <Checkbox
                  border="black"
                  onChange={() => handleRatingsChange(1)}
                >
                  <span className="material-icons text-yellow-500">star</span>
                </Checkbox>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
        <div className=" md:w-[70%] lg:w-[75%] h-full overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-2 gap-y-4 py-4 px-2 h-full">
            {data.length !== 0 &&
              data.map((item) => (
                <Product
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  brand={item.brand}
                  price={item.price}
                  rating={item.rating}
                  img={item.img}
                />
              ))}
            {data.length === 0 && (
              <div className="text-2xl text-center col-span-4">
                No Products to show
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
