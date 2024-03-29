"use client";
import MobileMenuLogo from "@/public/MobileMenuLogo";
import Slider from "./Header/Slider/Slider";
import HeaderButton from "./Header/HeaderButton";
import { useState } from "react";
import MobileMenu from "./Header/MobileMenu";
import Link from "next/link";

//
export default function Header() {
  const [loggedin, setLoggedin] = useState(true);
  const [show, setShow] = useState("hidden");

  //console.log(document.cookie.split("="));

  function mobileMenuHeandler() {
    //setMobileMenuOpen(!mobileMenuOpen);
    if (show === "animate-hide" || show === "hidden") {
      setShow("animate-show");
    } else {
      setShow("animate-hide");
    }
  }

  return (
    <div className="relative bg-light_green">
      {loggedin ? (
        <div className="flex gap-4">
          <p>logged</p>
          <Link href={"/admin"}>admin</Link>
          <Link href={"/login"}>login</Link>
        </div>
      ) : null}

      <div className="relative z-30 flex justify-between items-center h-[104px] px-4 pt-4 max-w-[1175px] w-full mx-auto sm:h-[140px] sm:pt-8">
        <img alt="logo" src="/logo.png" className="h-full" />
        <div className="hidden md:flex -mt-[30px] gap-4 lg:gap-8">
          <HeaderButton>НОВОСТИ</HeaderButton>
          <HeaderButton>БИБЛИОТЕКА</HeaderButton>
          <HeaderButton>ВИДЕО</HeaderButton>
          <HeaderButton>БИОГРАФИЯ</HeaderButton>
          <HeaderButton>СОРАТНИКИ</HeaderButton>
          <HeaderButton>КОНТАКТЫ</HeaderButton>
        </div>
        <div
          onClick={() => mobileMenuHeandler()}
          className="w-[68px] h-[68px] relative md:hidden"
        >
          <MobileMenuLogo />
          <MobileMenu show={show} />
        </div>
      </div>
      <div className="flex relative items-end w-full mt-[-90px] z-1 h-[265px] xxs:h-[317px] xs:h-[355px] sm:h-[400px] md:h-auto">
        <Slider />
      </div>
      <div className="relative">
        <img
          alt="geopolitic"
          src="/geo.png"
          className="absolute z-20 bottom-0 right-0 translate-y-1/2 mr-4 max-w-[185px] xxs:max-w-[250px] xs:max-w-[185px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-[510px] "
        />
      </div>
    </div>
  );
}
