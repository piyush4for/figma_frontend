import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";
import SignUpForm from "./SignUpForm";

const SignUpFormCard = () => {
  return (
    <Card isBlurred  className="w-full h-full max-w-[400px]">
      <CardHeader className="w-full h-full justify-center">
        <Image
          alt="Wine logo"
          height={80}
          radius="sm"
          src="/images/FormLogo.png"
          width={90}
        />
        
      </CardHeader>
      
      <CardBody>
      <h4 className="text-large font-semibold leading-none text-default-600">SIGNUP</h4>

       <SignUpForm/>
      </CardBody>
      
    </Card>

  )
}

export default SignUpFormCard