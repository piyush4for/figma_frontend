"use client"
import React,{useState,useEffect} from "react";
import { Spacer } from "@nextui-org/react";
import wine_bg from "../public/images/homepage1.png";
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
          <div>
            <div
              id="imagecontainer"
              className="h-screen w-full bg-cover bg-no-repeat brightness-80 "
              style={{ backgroundImage: `url(${wine_bg.src})` }}
            >
              <Nav />
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
