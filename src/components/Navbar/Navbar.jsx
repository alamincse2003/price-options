import React from "react";
import Link from "../Link/Link";

const Navbar = () => {
  const routes = [
    {
      id: 1,
      path: "/",
      name: "Home Page",
    },
    {
      id: 2,
      path: "/about",
      name: "About Us",
    },
    {
      id: 3,
      path: "/product/:id",
      name: "Product Details",
    },
    {
      id: 4,
      path: "*",
      name: "404 Page",
    },
  ];

  return (
    <nav>
      <ul className="md:flex">
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
