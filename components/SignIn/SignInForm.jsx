"use client"
import React from 'react'
import { useForm, Controller ,reset} from "react-hook-form";
import axios from 'axios';

import { useRouter } from 'next/navigation';
import {
    Button,
    Input,
    Checkbox,
  } from "@nextui-org/react";
import { EyeFilledIcon } from '../PasswordInput/EyeFilledIcon';
import { EyeSlashFilledIcon } from '../PasswordInput/EyeSlashFilledIcon';


const SignInForm = () => {
  const router = useRouter()
  const [token, setToken] = React.useState(null);

    //for email valiadate
    const [value, setValue] = React.useState("testing@gmail.com");
    const [passwordvalue, setpasswordValue] = React.useState("123456789");
    

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
          remember_me: false,
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
            const response = await axios.post('https://figma-backend.onrender.com/login', data)
            if (response.status === 200) {
              setToken(response.data.token);
              localStorage.setItem('jwtToken', response.data.token);
              
              console.log(response.data.token);
              response.data.token==null?reset():setTimeout( ()=> { router.push('/')},2000);
            } else {
              alert('Login failed. Please try again.');
            }
          } catch (error) {
            alert('wrong email or password');
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
            <div className="flex flex-col mt-4 w-full max-w-xs gap-4">
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
    <div className='flow-root w-full'>

      <div className='float-left'>
      <Controller
              name="remember_me"
              control={control}
              rules={{
                required: false,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Checkbox
                  size='sm'
                  color="primary"
                  onBlur={onBlur}
                  onChange={onChange}
                  isSelected={value}
                >
                  Remember me
                </Checkbox>
                
              )}
            />
      </div>
      <div className='float-right mr-0'>
      Forgot Password?

      </div>
    </div>
            
             
 
            <div className="mt-8 flex flex-col  w-full max-w-xs gap-4">
              <Button className='w-full'type="submit" color="primary" isDisabled={!watch(isInvalidPassword)}>
                LOGIN
              </Button>
              {/* <Button onPress={reset}>Reset</Button> */}
            </div>
          </form>
        </div>
      );
    }

export default SignInForm