import { NavLink } from "react-router-dom";


const NavLinks = () => {
  const menuItems = [
    { label: "Home", url: "/" },
    { label: "Products", url: "/products" },
    { label: "About", url: "/about" },
  ];
  return (
    <>
      <ul className="menu menu-horizontal px-1">
        {menuItems.map((menuItem) => (
          <li key={menuItem.url}>
            <NavLink to={menuItem.url}>{menuItem.label}</NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavLinks;
