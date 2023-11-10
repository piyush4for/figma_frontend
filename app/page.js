import React from "react";
import { Spacer } from "@nextui-org/react";
import wine_bg from "../public/images/homepage1.png";
import Nav from "../components/Nav";

import CardComponent from "@/components/CardComponent";


export default function Home() {
  
  return (
    <>
      
        {/* {isAuthenticated ? ( */}
        <div>
          <div
            id="imagecontainer"
            className="h-screen w-full bg-cover bg-no-repeat brightness-80 "
            style={{ backgroundImage: `url(${wine_bg.src})` }}
          >
            <Nav />
          </div>
          {/* <Image alt='homepage1'isZoomed src="/images/homepag1.png" /> */}
          

        </div>
        <Spacer y="3"/>
           <CardComponent/>
        {/* is autnenticated page wont login */}
        {/* ) : (
          <div>
            <h1 className="text-2xl font-semibold mb-4">Not Authenticated</h1>
            <p>Please sign in to access the dashboard.</p>
            <Button asChild>
              <Link href="/login">Login</Link>
            </Button>
          </div>
        )}
         */}
      
    </>
  );
}
