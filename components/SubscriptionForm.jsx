
import { Button, Input } from "@nextui-org/react";
import React from "react";

const SubscriptionForm = () => {
    
  
  return (
    <div id="wineries ">
      <div className="newsletter-subscribe bg-dark p-12 text-center bg-[url('/images/footerImage.png')">
        <div className="max-w-screen-md mx-auto">
          <div className="intro">
            <h2 className="text-3xl  mb-6 font-extrabold">Stay Notified</h2>
            <p className="text-white font-sans">
              Join our mailing list to learn about our upcoming Wineries
            </p>
          </div>
          <form className="flex justify-center mt-6" onSubmit={(e)=>e.preventDefault()}>
            <div className="flex items-center gap-4">
              <Input
              
                variant="bordered"
                
                classNames={{label:"text-white ml-2 mb-8  bg-black  px-1",input:"placeholder:text-default-700/50 "}}
                isInvalid={false}
                label="Email"
                color="primary"
                type="email"
                name="email"
                placeholder="abc@gmail.com"
              />
              <Button color="primary" >Join</Button>
               
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionForm;
