import React, { Component } from "react";
import Slider from "react-slick";
import PizzaImg1 from '../Carousel/images/pizza1.jpeg'
import PizzaImg2 from '../Carousel/images/pizza2.jpg'
import Hamburger from '../Carousel/images/hamburger1.jpeg'
import Kebab from '../Carousel/images/kebab.jpg'

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none"}}
      onClick={onClick}
    />
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none"}}
      onClick={onClick}
    />
  );
}
export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      fade: true,
      speed: 800,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      cssEase: "linear",
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img src={PizzaImg1} alt="Pizzaimg1" style={{width:'100%',height:'1000px'}}/>
          </div>
          <div>
            <img src={PizzaImg2} alt="Pizzaimg2" style={{width:'100%',height:'1000px'}}/>
          </div>
          <div>
            <img src={Hamburger} alt="Pizzaimg3" style={{width:'100%',height:'1000px'}}/>
          </div>
          <div>
            <img src={Kebab} alt="Pizzaimg3" style={{width:'100%',height:'1000px'}}/>
          </div>
        </Slider>
      </div>
    );
  }
}