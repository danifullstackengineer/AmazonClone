import React from "react";
import "./Home.css";
import Product from "./Product.js";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="100000"
            title='Acer Nitro 5 AN515-55-53E5 Gaming Laptop | Intel Core i5-10300H | NVIDIA GeForce RTX 3050 Laptop GPU | 15.6" FHD 144Hz IPS Display | 8GB DDR4 | 256GB NVMe SSD | Intel Wi-fi 6 | Backlit Keyboard'
            img="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ3E6ldUdBKvC9JgYbb0v6OjYaAU_RE9dK7opgNLCEMSdHhkLso"
            price={785.32}
            rating={4}
          />
          <Product
            id="100001"
            title='Acer Predator Helios 300 PH315-54-760S Gaming Laptop | Intel i7-11800H | NVIDIA GeForce RTX 3060 Laptop GPU | 15.6" Full HD 144Hz 3ms IPS Display | 16GB DDR4 | 512GB SSD | Killer WiFi 6 | RGB Keyboard'
            img="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT4D_pBFh7luevCfR_RsKQuZtxnen9F2fUYNsIiwZloFUi1ZQH4"
            price={1238.04}
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="10002"
            title="2021 Apple MacBook Pro (14-inch, Apple M1 Pro chip with 10-core CPU and 16-core GPU, 16GB RAM, 1TB SSD) - Silver"
            img="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSCL7OBYCgRNg9HGMoKXLDhKpopim_Ip9pQBV7ngyRHIsbfqrej"
            price={2389.95}
            rating={3}
          />
          <Product
            id="10003"
            title="CYBERPOWERPC Gamer Xtreme VR Gaming PC, Intel Core i5-11600KF 3.9GHz, 16GB DDR4, GeForce RTX 3060 12GB, 500GB NVMe SSD, 1TB HDD, WiFi Ready & Win 11 Home(GXiVR8480A10)"
            img="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRWrDA487Y8Fr1_t8aouvfrCc-7yo7MXGVNaBPps7vmDwdV-itw"
            price={1460.0}
            rating={5}
          />
          <Product
            id="10004"
            title="CYBERPOWERPC Gamer Xtreme VR Gaming PC, Intel Core i5-11400F 2.6GHz, 8GB DDR4, GeForce RTX 2060 6GB, 500GB NVMe SSD, WiFi Ready & Win 11 Home (GXiVR8060A11)"
            img="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSbmQmBWVgGlaGQhRsVbBPyZcCAkq_rbY5cbmaYf0Dt4721ynpu"
            price={964.99}
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="10005"
            title='MSI GS76 Stealth Gaming Laptop: 17.3" 4K Display, Intel Core i9-11900H, NVIDIA GeForce RTX 3080, 64GB, 2TB SSD, Thunderbolt 4, WiFi 6, Win10, Black(11UH-078)'
            img="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ-ZtzNW7obI0Baj47NRsoYvVYAg46sL6QmINRo3oPcEHdjIOph"
            price={3499.00}
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
