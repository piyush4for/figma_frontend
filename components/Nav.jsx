"use client"
import React,{useState,useEffect} from "react";
import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Spinner,
  User
} from "@nextui-org/react";
import {Link as NextLink} from "next/link.js";
// import WalletLogo from '@/public/images/Groupwallet.svg'
import { WineLogo } from "./WineLogo.jsx";
import { Wallet } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Nav() {
  const router = useRouter()

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSpinner, setShowSpinner] = useState(true);
  useEffect(() => {
    const token = localStorage.getItem("jwtToken"); // Get the token from localStorage

    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
    const timeout = setTimeout(() => setShowSpinner(false), 2000);
    return () => clearTimeout(timeout);
  }, []);
  return (
    
    <Navbar
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "space-x-6",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary",
        ],
      }}
      // isBlurred='false'
      onMenuOpenChange={setIsMenuOpen}
      className="mt-2 lg:opacity-40 sm:opacity-40 md:opacity-40"
      >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <WineLogo />
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent
        as="div"
        className="hidden sm:flex gap-4 items-end"
        justify="end"
        >
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            HOME
          </Link>
        </NavbarItem>
        <NavbarItem  >
          <Link color="foreground" href="#marketplace">
            MARKETPLACE
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#brand">
            BRANDS
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#wineries">
            WINERIES
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end" className="hidden sm:flex gap-6">
        {/* <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem> */}
        {isAuthenticated ? 
        <User   
        name="Jane Doe"
        description="Product Designer"
        
        avatarProps={{
          src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
        }}
        />
        
        :
        <NavbarItem>
          <Button
            className="bg-gradient-to-r from-red-400 via-red-600 to-red-700"
            as={Link}
            href="#"
            variant="flat"
            onClick={()=>{router.push('/login')}}
            >
              
{showSpinner ? <Spinner color="primary" size="sm"/> : <><Wallet/>"Connect wallet"</>}
            

          </Button>
        </NavbarItem>
        }
      </NavbarContent>
      
      <NavbarMenu>
        <NavbarMenuItem>
          <Link
            style={{
              minWidth: "100%",
              color: "inherit",
            }}
            href="#"
            as={NextLink}
          >
            Home
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            style={{
              minWidth: "100%",
              color: "inherit",
            }}
            href="#marketplace"
            as={NextLink}
          >
            MARKETPLACE
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            style={{
              minWidth: "100%",
              color: "inherit",
            }}
            href="#brand"
            as={NextLink}
          >
            BRAND
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            style={{
              minWidth: "100%",
              color: "inherit",
            }}
            href="#wineries"
            as={NextLink}
          >
            WINERIES
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
 

    </Navbar>

  );
}
