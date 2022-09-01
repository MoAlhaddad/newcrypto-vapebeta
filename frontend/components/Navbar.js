import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Logo from "../assets/cvnavbar.svg";
import NavItem from "./NavItem";
import { useRouter } from "next/router";
// import {selectUser} from "../slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
// import Login from "./Login";
import Logout from "./Logout";
import Vapes from "./Vapes";
import { userR } from "../slices/userSlice";
import LoginOne from "../pages/users/[id]";
import { store } from "../slices";
import { login, userReducer, selectUser } from "../slices/userSlice";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    background: "linear-gradient(315deg, #b1bfd8 0%, #667eaa 74%)",
  },
  wrapper: {
    padding: "20px 40px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  img: {
    width: "40px",
  },
  hamburber: {
    width: "30px",
    height: "3px",
    background: "#fff",
    borderRadius: "5px",
    boxShadow: "0 2px 5px rgb(255, 101, 47,.2)",
    transition: "all 0.5s ease-in-out",
    "&::before": {
      content: "''",
      position: "absolute",
      width: "30px",
      height: "3px",
      background: "#fff",
      borderRadius: "5px",
      transition: "all 0.5s ease-in-out",
      transform: "translateY(-10px)",
    },
    "&::after": {
      content: "''",
      position: "absolute",
      width: "30px",
      height: "3px",
      background: "#fff",
      borderRadius: "5px",
      transition: "all 0.5s ease-in-out",
      transform: "translateY(10px)",
    },
  },
  activeHamburger: {
    width: "30px",
    height: "3px",
    borderRadius: "5px",
    transform: "translateX(-50px)",
    background: "transparent",
    transition: "all 0.5s ease-in-out",
    "&::before": {
      content: "''",
      position: "absolute",
      width: "30px",
      height: "3px",
      background: "#fff",
      borderRadius: "5px",
      transition: "all 0.5s ease-in-out",
      transform: "rotate(45deg) translate(35px, -35px)",
    },
    "&::after": {
      content: "''",
      position: "absolute",
      width: "30px",
      height: "3px",
      background: "#fff",
      borderRadius: "5px",
      transition: "all 0.5s ease-in-out",
      transform: "rotate(-45deg) translate(35px, 35px)",
    },
  },
  sidenav: {
    position: "fixed",
    width: "100%",
    height: "100vh",
    background: "linear-gradient(150deg, #b1bfd8 0%, #667eaa 74%)",
    transform: "translateX(100%)",
    transition: "all 0.5s ease-in-out",
  },
  activeSidenav: {
    position: "fixed",
    width: "100%",
    height: "100vh",
    background: "linear-gradient(150deg, #b1bfd8 0%, #667eaa 74%)",
    transform: "translateX(50%)",
    transition: "all 0.5s ease-in-out",
  },
  ul: {
    listStyleType: "none",
    "& li": {
      padding: "20px 0",
    },
  },
  a: {
    margin: "20px 0",
    color: "white",
  },
}));



const MENU_LIST = [
  //   { text: "Home", href: "/" },
  { name: "Vapes", Link: "/vapes" },
  { name: "Accessories", Link: "/accessories" },
  { name: "Account", Link: "/account" },
  { name: "Register", Link: "/register" },
  { name: "Login", Link: "/users/1" },
];
const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);
  const router = useRouter();
  const [windowDimension, setWindowDimension] = useState(null);
  const [isOpen, setOpen] = useState(false);
  const classes = useStyles();
  const [active, setActive] = useState(false);
  // const toggleMenu = () => {
  //   let dd = document.body;
  //   dd.classList.toggle("nav__menu-bar");
  //   setOpen(!isOpen);

  // };

  // useEffect(() => {
  //   setWindowDimension(window.innerWidth);
  // }, []);

  // useEffect(() => {
  //   function handleResize() {
  //     setWindowDimension(window.innerWidth);
  //   }

  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  const isMobile = windowDimension <= 640;

  // const {username} = useSelector( state => this.state.);
  const username = useSelector(state=> state.selectUser);
  const dispatch = useDispatch()

  const handleClick = () => {
    console.log("taking you to login");
    router.push("/users/1");
  };

  

  //   const [navActive, setNavActive] = useState(null);
  // const [activeIdx, setActiveIdx] = useState(-1);

  return (
    // <header>
    //   <nav className={`nav`}>
    //     <Link href={"/"}>
    //       <a>
    //         <h1 className="logo"><Image src={Logo} /></h1>
    //       </a>
    //     </Link>
    //     <div
    //       onClick={() => setNavActive(!navActive)}
    //       className={`nav__menu-bar`}
    //     >
    //       <div></div>
    //       <div></div>
    //       <div></div>
    //     </div>
    //     <div className={`${navActive ? "active" : "closed"} nav__menu-list`}>
    //       {MENU_LIST.map((menu, idx) => (
    //         <div
    //           onClick={() => {
    //             setActiveIdx(idx);
    //             setNavActive(false);
    //           }}
    //           key={menu.text}
    //         >
    //           <NavItem active={activeIdx === idx} {...menu} />
    //         </div>
    //       ))}
    //     </div>
    //   </nav>
    // </header>


// isMobile ? return ()
    <div className={classes.main}>
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <Image src={Logo} />
        <div onClick={() => setActive(!active)}>
          <div
            className={active ? classes.activeHamburger : classes.hamburber}
          />
        </div>
      </div>
    </div>
    <div className={active ? classes.activeSidenav : classes.sidenav}>
      <ul className={classes.ul}>
        {MENU_LIST.map((item, i) => (
          <li key={i}>
            <a href="#" className={classes.a}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </div>
        
  );
};

export default Navbar;