import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../assets/images/tomaplesecondicon.png";
import potato from "../assets/images/potatodonuticon.jpg";
import filled from "../assets/images/filled-donuts.jpg";
import bar from "../assets/images/bar-donuts.jpg";
import packaging from "../assets/images/packaging-donuts.jpg";
import holiday from "../assets/images/holiday-donuts2.jpg";
import bintaro from "../assets/images/bintaroxchange.jpg";
import rdtx from "../assets/images/rdtx-1.jpg";
import plaza from "../assets/images/plazaindonesia.jpg";
import wisma from "../assets/images/wisma46.webp";
import radioplaza from "../assets/images/radioplaza.webp";



export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleOpen = (name) => setOpenDropdown(name);
  const handleClose = () => setOpenDropdown(null);

  const [menuOpen,setMenuOpen]=useState(false);
  const [donutOpen,setDonutOpen]=useState(false);
  const [bevOpen,setBevOpen]=useState(false);
  const [storeOpen,setStoreOpen]=useState(false);

  useEffect(()=>{
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  },[menuOpen]);

  const closeMenu = ()=>{
    setMenuOpen(false);
    setDonutOpen(false);
    setBevOpen(false);
    setStoreOpen(false);
  }


  function DropCircle({ img, title, link }) {
  return (
    <Link to={link} className="dropItem">
      <div className="dropImgCircle">
        <img src={img} alt={title} />
      </div>
      <p className="dropText">{title}</p>
    </Link>
  );
}


  return (
    <header className="navWrap">
      <div className="navBar">
        {/* Logo */}
        <div className="navLogo">
          <img
            src={logo}
            alt="Tomaple Logo"
          />
        </div>

        {/* Links */}
        <nav className="navLinks" style={{ padding: 20, borderBottom: "1px solid #eee" }}>
          <NavLink to="/about" className="navItem">
            About
          </NavLink>

          {/* Donuts Dropdown */}
          <div
            className="navItem dropdown"
            onMouseEnter={() => handleOpen("donuts")}
            onMouseLeave={handleClose}
          >
            <span className="dropTitle">
              Donuts <span className="arrow">▾</span>
            </span>

            {openDropdown === "donuts" && (
              <div className="dropdownMenu">
                <div className="dropdownCard">
                  <DropCircle img={potato} title="Potato Donuts" link="/donuts/potato" />
                  <DropCircle img={filled} title="Filled Donuts" link="/donuts/filled" />
                  <DropCircle img={bar} title="Bar Donuts" link="/donuts/bar" />
                  <DropCircle img={packaging} title="Packagings" link="/donuts/packaging" />
                  <DropCircle img={holiday} title="Holiday Edition" link="/donuts/holiday" />
                </div>
              </div>
            )}
          </div>

          {/* Beverages Dropdown */}
          <div
            className="navItem dropdown"
            onMouseEnter={() => handleOpen("beverages")}
            onMouseLeave={handleClose}
          >
            <span className="dropTitle">
              Beverages <span className="arrow">▾</span>
            </span>

            {openDropdown === "beverages" && (
              <div className="dropdownMenu">
                <div className="dropdownCard">
                  <DropCircle title="Coffee" />
                  <DropCircle title="Chocolate" />
                  <DropCircle title="Milk Series" />
                  <DropCircle title="Others" />
                </div>
              </div>
            )}
          </div>

          <NavLink to="/promo" className="navItem">
            Promo
          </NavLink>

          <NavLink to="/merchandise" className="navItem">
            Merchandise
          </NavLink>

          {/* Storess Dropdown */}
          <div
            className="navItem dropdown"
            onMouseEnter={() => handleOpen("stores")}
            onMouseLeave={handleClose}
          >
            <span className="dropTitle">
              Stores <span className="arrow">▾</span>
            </span>

            {openDropdown === "stores" && (
              <div className="dropdownMenu">
                <div className="dropdownCard">
                  <DropCircle img={radioplaza} title="Radio Dalam" link="" />
                  <DropCircle img={plaza} title="Plaza Indonesia" link=""/>
                  <DropCircle img={wisma} title="Wizma 46" link=""/>
                  <DropCircle img={rdtx} title="RDTX Place" link=""/>
                  <DropCircle img={bintaro} title="Bintaro Xchange" link=""/>
                </div>
              </div>
            )}
          </div>

          <NavLink to="/contact" className="navItem">
            Contact Us
          </NavLink>
        </nav>

          <div
           className={`menuBtn ${menuOpen ? "open" : ""}`}
           onClick={()=>setMenuOpen(true)}
          >
           <span></span>
           <span></span>
           <span></span>
          </div>

        <div className={`sideMenu ${menuOpen ? "active":""}`}>
          <span onClick={closeMenu}>✕</span>

        <div className="sideHeader">
          <img src="src/assets/images/tomaplesecondicon.png"/>
          {/* <span onClick={closeMenu}>✕</span> */}
        </div>

        <ul className="sideLinks">

          <li><Link onClick={closeMenu} to="/about">About</Link></li>

          <li onClick={()=>setDonutOpen(!donutOpen)}>
            Donuts <span className={donutOpen?"rotate":""}>▾</span>
          </li>

          {donutOpen && (
            <div className="subMenu">
              <Link onClick={closeMenu} to="/donuts/potato">Potato Donuts</Link>
              <Link onClick={closeMenu} to="/donuts/filled">Filled Donuts</Link>
              <Link onClick={closeMenu} to="/donuts/bar">Bar Donuts</Link>
              <Link onClick={closeMenu} to="/donuts/packaging">Packagings</Link>
              <Link onClick={closeMenu} to="/donuts/holiday">Holiday Edition</Link>
            </div>
          )}

          <li onClick={()=>setBevOpen(!bevOpen)}>
            Beverages <span className={bevOpen?"rotate":""}>▾</span>
          </li>

          {bevOpen && (
            <div className="subMenu">
              <Link onClick={closeMenu} to="/beverages">Coffee</Link>
              <Link onClick={closeMenu} to="/beverages">Tomaple Special</Link>
              <Link onClick={closeMenu} to="/beverages">Frappe</Link>
              <Link onClick={closeMenu} to="/beverages">By Litre</Link>

            </div>
          )}

          <li><Link onClick={closeMenu} to="/promo">Promo</Link></li>
          <li><Link onClick={closeMenu} to="/merchandise">Merchandise</Link></li>

          <li onClick={()=>setStoreOpen(!storeOpen)}>
            Stores <span className={storeOpen?"rotate":""}>▾</span>
          </li>

          {storeOpen && (
            <div className="subMenu">
              <Link onClick={closeMenu} to="/srores">Radio Dalam</Link>
              <Link onClick={closeMenu} to="/stores">Plaza Indonesia</Link>
              <Link onClick={closeMenu} to="/stores">Wisma46</Link>
              <Link onClick={closeMenu} to="/stores">RDTX Place</Link>
              <Link onClick={closeMenu} to="/stores">Bitaro Xchange</Link>
           </div>
          )}

          <li><Link onClick={closeMenu} to="/contact">Contact Us</Link></li>

        </ul>
      </div>

      {menuOpen && <div className="overlay" onClick={closeMenu}></div>}

      </div>
    </header>
  );
}
