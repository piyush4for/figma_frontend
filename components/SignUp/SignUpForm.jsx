"use client"
import React from 'react'
import { useForm, Controller } from "react-hook-form";
import { useRouter } from 'next/navigation';
import axios from 'axios';
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
    Button,
    Input,
    
  } from "@nextui-org/react";
import { EyeFilledIcon } from '../PasswordInput/EyeFilledIcon';
import { EyeSlashFilledIcon } from '../PasswordInput/EyeSlashFilledIcon';

   
      
const SignUpForm = () => {
  const router = useRouter()
    
    //for email valiadate
    const [value, setValue] = React.useState("aadya@mailinator.com");
    const [passwordvalue, setpasswordValue] = React.useState("*********");
    

  const validateEmail = (value) => value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

    const isInvalidPassword = React.useMemo(()=>{
        if(passwordvalue.length<8 ) return true;
        return false;
    },[passwordvalue])

  const isInvalid = React.useMemo(() => {
    if (value === "") return false;

    return validateEmail(value) ? false : true;
  }, [value]);

  
  //for password
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);


    const {
        register,
        handleSubmit,
        control,
        watch,
        reset,
        formState: { errors },
      } = useForm({
        mode: "onBlur",
        defaultValues: {
          email: "",
        //   terms: false,
          password: "",
        },
      });
    
      const onSubmit = async (values) => {
        console.log(JSON.stringify(values));
        
        let data={
            "username":values.email,
            "password":values.password
          }
          try {
            const response = await axios.post('https://figma-backend.onrender.com/signup', data);
            if (response.status === 201) {
              toast.success('A Verification link has been sent on your registered email address.Please click on link to verify your account.', {
                position: toast.POSITION.TOP_RIGHT,
                progress:0 
                
            });
            response.data.token==null?reset():setTimeout( ()=> { router.push('/login')},2000);
            } else {
                toast.error('connection error', {
                    position: toast.POSITION.TOP_RIGHT,
                    progress:0   
                });
            }
          } catch (error) {
            toast.warning('User already exist', {
                autoClose:false,
                closeButton: false,
                position: toast.POSITION.TOP_RIGHT,
                progress:"0" ,
            });
            console.error('Error:', error);
          }
      };
    
    //   const inputRegister = register("email", { required: true });
    
      return (
        <div className="">
          <form 
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-start gap-4"
          >
            <div className="flex flex-col mt-4 w-full max-w-xs  gap-4">
              <Input
              radius='full'
              type='email'
                label="Email Address :"
                placeholder="Enter email address"
                labelPlacement="outside"
                variant="bordered"
                onClear={() => console.log("clear")}
                isInvalid={isInvalid}
                color={isInvalid ? "danger" : "default"}
                errorMessage={isInvalid && "Please enter valid email address."}
                onValueChange={setValue}
                {...register("email",{required:true})}
              />
              
            </div>
                
            <Input
            radius='full'
      label="Password :"
      labelPlacement="outside"
      variant="bordered"
      placeholder="Enter password"
      isInvalidPassword={isInvalidPassword}
      color={isInvalidPassword?"danger":"default"}
      errorMessage={isInvalidPassword && "Please enter a valid password"}
      onValueChange={setpasswordValue}
      endContent={
        <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
          {isVisible ? (
            <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          ) : (
            <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          )}
        </button>
      }
      type={isVisible ? "text" : "password"}
      className="max-w-xs"
      {...register("password",{required:true,minLength:8})}
    />

    
            {/* <Controller
              name="terms"
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Checkbox
                  color="warning"
                  onBlur={onBlur}
                  onChange={onChange}
                  isSelected={value}
                >
                  Accept terms & conditions
                </Checkbox>
              )}
            /> */}
            <div className=" flex-col mt-8 w-full max-w-xs gap-4">
              <Button className='w-full'type="submit" color="primary" isDisabled={!watch(isInvalidPassword)}>
                SIGN UP
              </Button>
              
              {/* <Button onPress={reset}>Reset</Button> */}
            </div>
          </form>
        </div>
      );
    }

export default SignUpForm