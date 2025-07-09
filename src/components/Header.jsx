import { navigation } from "../constants"
import { useLocation } from "react-router-dom"
import Button from "./Button";
import MenuSvg from '../assets/svg/MenuSvg'
import { HamburgerMenu } from "./design/Header";
import { useState } from "react";
import { disablePageScroll,enablePageScroll } from "scroll-lock";
const Header = () => {
      const pathname = useLocation();
       const [openNavigation, setOpenNavigation] = useState(false);
         const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };
const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };
  return (
<div
  className={`fixed top-0 left-0 w-full z-50   border-[color:var(--n-6)] lg:bg-[color:var(--n-8)] lg:backdrop-blur-sm ${
    openNavigation ? "bg-[color:var(--n-8)]" : "bg-[color:var(--n-8)]/90 backdrop-blur-sm"
  }`}
>


<div className="flex  items-center px-5 lg:px-7_5 xl:px-10 max-lg:py-4"  >
    <a href="#hero" className="block w-[12rem] xl:mr-8 " >
    <img src="/images/logo.png"  className="w-[120px] h-[100px] "   alt="NeuroSpark" />
</a>
<nav onClick={handleClick} className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}>
<div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row" >
{navigation.map((item)=>(
    <a href={item.url} key={item.id} onClick={handleClick} className={`block relative font-code text-2xl uppercase text-n1 transition-colors hover-text-color-1 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                  item.url === pathname.hash
                    ? "z-2 lg:text-n1"
                    : "lg:text-[color:var(--n-1)] lg:opacity-50"
                } lg:leading-5 lg:hover:text-n1 xl:px-12`}>
        {item.title}
    </a>
))}
</div>
<HamburgerMenu/>
</nav>
<a  href="#signup"
className="button hidden mr-8 text-n1-50  transition-colors hover-text-color-1 lg:block">
 New account
</a>
 <Button className=" hidden lg:flex" href="#login">
          Sign in
    </Button>
     <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
</div>
</div>
  )
}

export default Header
