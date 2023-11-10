import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Link, Image} from "@nextui-org/react";
import SignInForm from "./SignInForm";

const SignInFormCard = () => {
  return (
    <Card  isBlurred  className="w-full h-full max-w-[610] ">
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
      <h4 className="text-large font-semibold leading-none text-default-600">LOGIN</h4>

       <SignInForm/>
      </CardBody>
      <CardFooter className="">
  <div className="flex gap-1">
    <p className=" text-default-400 text-small">Don't Have an Account?  </p>
  </div>
  <div className="flex gap-1">
    <p className="text-default-400 text-small"><Link href="/sign-up" size='md'>Sign Up</Link></p>
  </div>
</CardFooter>
    </Card>

  )
}

export default SignInFormCard