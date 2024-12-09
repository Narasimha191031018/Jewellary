import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Homecss from "./Home.module.css";
import logo from "../Assets/Images/2c7bb380c54b464fabf78d565fb62687-free.png";
import corousalImg1 from "../Assets/Images/Men-Gold-Kada-web.jpg";
import corousalImg2 from "../Assets/Images/Gold-Chain-web-24092024.jpg";
import corousalImg3 from "../Assets/Images/Silver-web-20102024.jpg";

const HomeComp = () => {
  return (
    <div>
        <header>
            <div className={Homecss.stylebrand}>
                <img className={Homecss.logo} src={logo} alt='logo'></img>
                <h1 className={Homecss.brandname}>Narasimha Jewellery</h1>
            </div>
        </header>
        <nav>
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="0"
      className="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="2"
      aria-label="Slide 3"
    ></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img
        className={Homecss.corousalImg1}
        src={corousalImg1}
        alt="Men Gold Kada"
      />
      <div className="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img
        className={Homecss.corousalImg2}
        src={corousalImg2}
        alt="Gold Chain"
      />
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img
        className={Homecss.corousalImg3}
        src={corousalImg3}
        alt="Silver Jewellery"
      />
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

        </nav>
    </div>
  )
}
export default HomeComp;
