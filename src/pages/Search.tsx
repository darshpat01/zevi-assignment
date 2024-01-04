import searchImg from "../images/search.svg";
import { useState } from "react";
import zeviLogo from "../images/zevi-logo.png";
import img1 from "../images/img1.jpeg";
import Product from "../components/HomeComponents/Product";
import { Checkbox } from "@chakra-ui/react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  Box,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

const Search: React.FC = () => {
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
      <div className="h-[90%] flex">
        <div className="w-[25%]  p-4 overflow-y-auto">
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
                <Checkbox border="black">Mango</Checkbox>
                <Checkbox border="black">H&M</Checkbox>
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
                <Checkbox border="black">Under 500</Checkbox>
                <Checkbox border="black">1000 to 3000</Checkbox>
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
                <Checkbox border="black">
                  <span className="material-icons text-yellow-500">star</span>
                  <span className="material-icons text-yellow-500">star</span>
                  <span className="material-icons text-yellow-500">star</span>
                  <span className="material-icons text-yellow-500">star</span>
                  <span className="material-icons text-yellow-500">star</span>
                </Checkbox>
                <Checkbox border="black">
                  {" "}
                  <span className="material-icons text-yellow-500">star</span>
                  <span className="material-icons text-yellow-500">star</span>
                  <span className="material-icons text-yellow-500">star</span>
                  <span className="material-icons text-yellow-500">star</span>
                </Checkbox>
                <Checkbox border="black">
                  {" "}
                  <span className="material-icons text-yellow-500">star</span>
                  <span className="material-icons text-yellow-500">star</span>
                  <span className="material-icons text-yellow-500">star</span>
                </Checkbox>
                <Checkbox border="black">
                  {" "}
                  <span className="material-icons text-yellow-500">star</span>
                  <span className="material-icons text-yellow-500">star</span>
                </Checkbox>
                <Checkbox border="black">
                  {" "}
                  <span className="material-icons text-yellow-500">star</span>
                </Checkbox>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="w-[75%] h-full overflow-y-auto">
          <div className="grid grid-cols-4 gap-x-2 gap-y-4 py-4 h-full">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
