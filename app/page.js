"use client"
import React,{useState,useEffect} from "react";
import { Spacer } from "@nextui-org/react";
import wine_bg_light from "../public/images/homepage1.png";
import wine_bg_dark from "../public/images/HomePageWineBg.png";
import Nav from "../components/Nav";
import { Button,Link } from "@nextui-org/react";

import CardComponent from "../components/CardComponent";
import Brand from "../components/Brand";

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("jwtToken"); // Get the token from localStorage

    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  })

  return (
    <>
      {isAuthenticated ? (
        <div id="parent">
          <div className="flex h-screen w-screen items-start justify-center bg-gray-900 bg-cover bg-no-repeat bg-transparent"  style={{ backgroundImage: `url(${wine_bg_light.src})` }}>
            <div
              id="imagecontainer"
              style={{ backgroundImage: `url(${wine_bg_dark.src})` }}
              className="h-screen w-full bg-cover bg-no-repeat brightness-80 "
              
            >
            <Nav />
            <div id="item inside shadow image" className="flex flex-col h-screen justify-center items-center bgimg bg-cover">
              THE WEB# wine
            </div>
            </div>
          </div>
          <Spacer y="3" />
          <CardComponent />

          <Spacer y="40" />
          <Brand />
        </div>
      ) : (
        <div>
          <h1 className="text-2xl font-semibold mb-4">Not Authenticated</h1>
          <p>Please sign in to access the dashboard.</p>
          <Button asChild>
            <Link href="/login">Login</Link>
          </Button>
        </div>
      )}
    </>
  );
}
