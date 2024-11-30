import { nav } from "../assets/data/index";
import React from "react";
import Link from "next/link";

const NavbarComponent = () => {
  return (
    <>
      <header className="flex px-5 py-5 bg-amber-100 justify-between">
        <nav className="text-4xl font-bold">
          <Link href={"/"}>YourAI</Link>
        </nav>
        <section className="flex items-center gap-5">
          {nav.map((item) => {
            return (
              <nav key={item.id} className="hover:text-blue-500">
                <Link href={item.href}>{item.name}</Link>
              </nav>
            );
          })}
        </section>
      </header>
    </>
  );
};

export default NavbarComponent;
