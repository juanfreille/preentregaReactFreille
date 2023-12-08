import React, { useState, useContext, useEffect } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";
import Slider from "react-slick";
import { GrNext, GrPrevious } from "react-icons/gr";
import ImageHover from "../ImageHover/ImageHover";
import "./ItemDetail.css";

const ItemDetail = ({ item }) => {
  const [quantity, setQuantity] = useState(0);
  const { addToCart, cart } = useContext(CartContext);

  const SampleArrow = ({ className, onClick, icon }) => (
    <div onClick={onClick} className={`arrow ${className}`}>
      {React.createElement(icon, {
        className: "arrows",
        style: { color: "white" },
      })}
    </div>
  );

  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <img src={`${item.image[i]}`} alt={`Product ${i}`} />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleArrow direction="next" icon={GrNext} />,
    prevArrow: <SampleArrow direction="prev" icon={GrPrevious} />,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
  };

  return (
    <>
      <ImageHover />
      <div className="product-container">
        <div className="carousel-container">
          <Slider {...settings}>
            {item.image.map((image, index) => (
              <div className="bimage" key={index}>
                <img src={image} alt={`Product ${index}`} />
              </div>
            ))}
          </Slider>
        </div>
        <div className="product-info">
          <h2>{item.nombre}</h2>
          <div className="price-box">
            <span className="pricebox-price">
              $ {item.precio.toLocaleString(undefined)}
            </span>
          </div>
          <hr />
          <p className="descripcion">{item.descripcion}</p>
          <br />
          <p>
            Stock: &nbsp;
            {item.stock !== 0 ? item.stock : <span>Agotado</span>}
          </p>
          <hr />

          <ItemCount
            initial={1}
            stock={item.stock}
            onAdd={(cantidad) => {
              setQuantity(cantidad);
              addToCart(item, cantidad);
            }}
            id={item.id}
          />
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
