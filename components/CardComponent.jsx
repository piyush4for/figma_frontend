"use client";
import { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";
import axios from "axios";
import { HeartIcon } from "@/components/HeartIcon";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CardComponent() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [perPage, setperPage] = useState(8);
  const [isButtonSelectedGroup, setisButtonSelectedGroup] = useState({});
  const [liked, setLiked] = useState({});

  const fetchProducts = async (page) => {
    try {
      const token = localStorage.getItem("jwtToken");
      const response = await axios.get(
        `https://figma-backend.onrender.com/products?page=${page}&perPage=${perPage}`,
        {
          headers: { Authorization: `${token}` },
        }
      );
      if (response.status === 200) {
        setProducts(response.data.products);
      } else {
        console.log("Failed to fetch products.");
      }
    } catch (error) {
      console.log("Unauthorized: token expired or not login");
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchProducts(page);
  }, [page]);

  const handleNextPage = () => {
    setPage(page + 1);
    setperPage(8)
  };
  const handleAllPage = () => {
    setperPage(10)
    setPage(page+1)
    setPage(page-1)
  }
  
  const handlePrevPage = () => {
    setperPage(10)
    if (page > 1) {
      setPage(page - 1);
    }
  };
  const toggleLike = (productId) => {
    setLiked((prevLiked) => ({
      ...prevLiked,
      [productId]: !prevLiked[productId],
    }));
  };

  const toggleButton = (productId) => {
    setisButtonSelectedGroup((previsButtonSelectedGroup) => ({
      ...previsButtonSelectedGroup,
      [productId]: !previsButtonSelectedGroup[productId],
    }));
  };

  return (
    <>
      {/* buttons for pagination */}
        <div id="marketplace" className="mt-4 flex justify-between px-10 ">
      <p  className="px-4 text-3xl font-medium justify-start">
        MARKETPLACE
      </p>
      <div className="flex justify-end items-center px-12  border-white ">
      
          <Button
            className=" mx-1 w-auto h-auto border-white border-1"
            variant="light"
            radius="full"
            isIconOnly
            onClick={handlePrevPage}
            >
            <ChevronLeft size={37} strokeWidth={0.5}/>
          </Button>
          <Button
            className="w-auto h-auto  border-white border-1 mx-2"
            variant="light"
            radius="full"
            isIconOnly
            onClick={handleNextPage}
          >
            <ChevronRight size={37} strokeWidth={0.5}/>
          </Button>
          <Button
            className="bg-sky-800 "
            variant="flat"
            size="icon"
            radius="large"
            onClick={handleAllPage}
            >
            ALL
          </Button>
            </div>
        </div>
      {/* Cards grid */}
        <div className="px-10 grid grid-cols-2 md:grid-cols-4 gap-4 justify-center mt-4">
          {products.map((product, i) => (
            <div key={i} className="w-full">
              <Card className="py-4 max-w-[300px]">
                <CardHeader className="overflow-visible py-0.5">
                  <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src="/images/card.png"
                    width={270}
                  />
                  <p className="justify-between  overflow-hidden py-1 absolute before:rounded-xl rounded-large top-5 right-3 w-12  ml-12 z-20">
                    <Button
                      style={{ borderRadius: 50, opacity: 30 }}
                      isIconOnly
                      variant="flat"
                      onClick={() => toggleLike(product.id)}
                    >
                      <HeartIcon
                        className={liked ? "[&>path]:stroke-transparent" : ""}
                        fill={liked[product.id] ? "currentColor" : "none"}
                      />
                    </Button>
                  </p>
                </CardHeader>
                <CardBody className=" pb-0 pt-2 px-4 flex-col items-start">
                  <p className="text-large uppercase font-bold">{product.name}</p>
                </CardBody>
                <CardFooter className="pb-0 text-small justify-between">
                  <p className="text-white">Total Volume</p>
                  <p className="text-white">Floor price</p>
                </CardFooter>
                <CardFooter className=" pt-0 text-small justify-between">
                  <p className="text-default-500">
                    <span className="text-green-400">14.21 </span>ETH
                  </p>
                  <p className="text-default-500">
                    <span className="text-green-400">0.0349 </span>ETH
                  </p>
                </CardFooter>
                <CardFooter className="text-small justify-between">
                  <div>
                    <p className="text-xs font-sans text-white py-2">
                      DROP EVENT ENDS IN:
                    </p>
                    <b>12h 43m 42s</b>
                  </div>
                  <p className="text-default-500">
                    <Button
                      className="text-white"
                      color={
                        isButtonSelectedGroup[product.id] ? "primary" : "primary"
                      }
                      onClick={() => toggleButton(product.id)}
                      variant={
                        isButtonSelectedGroup[product.id] ? "solid" : "bordered"
                      }
                    >
                      BUY NOW
                    </Button>
                  </p>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
    </>
  );
}
