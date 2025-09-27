import React from "react";
import Toolbar from "./Toolbar";
import Logo from "./Logo";
export default function Header() {
  return (
    <>
      <div className="w-full flex h-10 mt-2">
        <Logo />
        <Toolbar />
      </div>
    </>
  );
}
