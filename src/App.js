import "./App.css";
import "./cart.css";

import React, { useState } from "react";

import CartLogo from "../src/images/icon-cart.svg";
import CartLogoWhite from "../src/images/icon-cart-white.svg";

import AvatarImage from "../src/images/image-avatar.png";
import PlusIcon from "../src/images/icon-plus.svg";
import MoinsIcon from "../src/images/icon-minus.svg";
import TrashIcon from "../src/images/icon-delete.svg";
import CloseIcon from "../src/images/icon-close.svg";
import NextIcon from "../src/images/icon-next.svg";
import PreviousIcon from "../src/images/icon-previous.svg";
import IconMenu from "../src/images/icon-menu.svg";

import ImgProduct1 from "../src/images/image-product-1.jpg";
import ImgProduct2 from "../src/images/image-product-2.jpg";
import ImgProduct3 from "../src/images/image-product-3.jpg";
import ImgProduct4 from "../src/images/image-product-4.jpg";

import ImgProduct1_thumbnail1 from "../src/images/image-product-1-thumbnail.jpg";
import ImgProduct1_thumbnail2 from "../src/images/image-product-2-thumbnail.jpg";
import ImgProduct1_thumbnail3 from "../src/images/image-product-3-thumbnail.jpg";
import ImgProduct1_thumbnail4 from "../src/images/image-product-4-thumbnail.jpg";

function App() {
  const [quantity, setQuantity] = useState(0);
  const [cart, setCart] = useState(0);
  const [show, setShow] = useState(false);
  const [showMenuMobile, setShowMenuMobile] = useState(false);
  const [mainPicture, setMainPicture] = useState(ImgProduct1);
  const [selectThumbnailStyle, setSelectThumbnailStyle] = useState(0);
  const [mainPictureThumbnail, setMainPictureThumbnail] = useState(ImgProduct1);
  const [selectThumbnailLightbox, setSelectThumbnailLightbox] = useState(0);

  const thumbnailImages = [
    ImgProduct1_thumbnail1,
    ImgProduct1_thumbnail2,
    ImgProduct1_thumbnail3,
    ImgProduct1_thumbnail4,
  ];
  const ImgProduct = [ImgProduct1, ImgProduct2, ImgProduct3, ImgProduct4];

  const incrementCounter = () => {
    setQuantity(quantity + 1);
  };

  const decrementCounter = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const MainImage = (indexImage) => {
    let photo = ImgProduct[indexImage];
    setSelectThumbnailStyle(indexImage);
    setMainPicture(photo);
  };

  const MainImageThumbnail = (indexImage) => {
    let photo_lightbox = ImgProduct[indexImage];
    setSelectThumbnailLightbox(indexImage);
    setMainPictureThumbnail(photo_lightbox);
  };

  const handleShow = () => {
    setShow(!show);
  };

  const AddToCart = () => {
    if (quantity !== 0) {
      setCart(cart + quantity);
      setShow(true);
    }
  };

  const [lightbox, setLightbox] = useState(false);

  return (
    <div className="App">
      <div className="header_container">
        <div className="header_left_side">
          <div className="header_menu_mobile">
            <img
              className="icon_mobile_menu"
              src={IconMenu}
              alt="icon_menu"
              onClick={() => setShowMenuMobile(!showMenuMobile)}
            />
            {showMenuMobile ? (
              <div className="menu_mobile_item">
                <div className="group_menu">
                  <img
                    src={CloseIcon}
                    alt="icon-close"
                    className="icon_close_mobile"
                    onClick={() => setShowMenuMobile(!showMenuMobile)}
                  />
                  <div className="menu_item_group">
                    <p className="menu_item_mobile">Collection</p>
                    <p className="menu_item_mobile">Men</p>
                    <p className="menu_item_mobile">Women</p>
                    <p className="menu_item_mobile">About</p>
                    <p className="menu_item_mobile">Contact</p>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
          <div className="header_sneakers">
            <p>sneakers</p>
          </div>
          <div className="header_menu">
            <p className="header_menu_item">Collection</p>
            <p className="header_menu_item">Men</p>
            <p className="header_menu_item">Women</p>
            <p className="header_menu_item">About</p>
            <p className="header_menu_item">Contact</p>
          </div>
        </div>
        <div className="header_rigth_side">
          <div className="cart_container">
            <img src={CartLogo} alt="logo_cart" onClick={() => handleShow()} />
            {cart > 0 ? (
              <span className="notification-bubble">{cart}</span>
            ) : null}
          </div>
          <div className={show ? "Showbasket" : "disable"}>
            <div className="title-cart">
              <h5>Cart</h5>
            </div>
            {cart > 0 ? (
              <div className="centered_basket">
                <div className="product_basket">
                  <div className="product_img">
                    <img src={ImgProduct1_thumbnail1} alt="thumbnails" />
                  </div>
                  <div className="product_description">
                    <p>Fall Limited Edition Sneakers</p>
                    <div className="price_product">
                      <p>$125.00 x {cart}</p>
                      <p>${cart * 125.0}</p>
                    </div>
                  </div>
                  <div className="trash-icon">
                    <img
                      src={TrashIcon}
                      alt="icon-trash"
                      onClick={() => {
                        setCart(0);
                        setShow(false);
                      }}
                    />
                  </div>
                </div>
                <div className="button_checkout">
                  <button>Checkout</button>
                </div>
              </div>
            ) : (
              <div className="centered_basket">
                <h5 style={{ opacity: 0.5 }}>Your cart is empty.</h5>
              </div>
            )}
          </div>
          <div className="profil_container">
            <img src={AvatarImage} alt="image_avatar" />
          </div>
        </div>
      </div>
      <div className="okok">
        <div className="main_page_container">
          <div className="main_page_left_side">
            <div className="group_photo">
              {lightbox ? (
                <div className="lightbox_container">
                  <img
                    src={CloseIcon}
                    alt="icon-close"
                    className="icon_close"
                    onClick={() => setLightbox(!lightbox)}
                  />

                  <img
                    src={NextIcon}
                    alt="icon-next"
                    className="icon_next"
                    onClick={() => {
                      if (
                        selectThumbnailLightbox !==
                        thumbnailImages.length - 1
                      ) {
                        MainImageThumbnail(selectThumbnailLightbox + 1);
                        console.log("oi");
                      } else {
                        MainImageThumbnail(0);
                      }
                    }}
                  />
                  <img
                    src={PreviousIcon}
                    alt="icon-previous"
                    className="icon_previous"
                    onClick={() => {
                      if (selectThumbnailLightbox > 0) {
                        MainImageThumbnail(selectThumbnailLightbox - 1);
                        console.log("oi");
                      } else {
                        MainImageThumbnail(thumbnailImages.length - 1);
                      }
                    }}
                  />

                  <img
                    src={mainPictureThumbnail}
                    alt="sneakers"
                    onClick={() => setLightbox(!lightbox)}
                    className="main_picture"
                  />
                  <div className="thumbnail_group_lightbox">
                    {thumbnailImages.map((image_url, index) => (
                      <img
                        key={index}
                        src={image_url}
                        alt={"Thumbnail" + index + 1}
                        index={index}
                        onClick={() => MainImageThumbnail(index)}
                        className={
                          selectThumbnailLightbox === index
                            ? "select_thumbnail_lightbox"
                            : null
                        }
                      />
                    ))}
                  </div>
                </div>
              ) : null}
              <div className="main_photo">
                <img
                  src={mainPicture}
                  alt="sneakers"
                  onClick={() => {
                    setLightbox(!lightbox);
                    MainImageThumbnail(selectThumbnailStyle);
                  }}
                />
                <img
                  src={NextIcon}
                  alt="icon-next"
                  className="icon_next_mobile"
                  onClick={() => {
                    if (selectThumbnailStyle !== thumbnailImages.length - 1) {
                      MainImage(selectThumbnailStyle + 1);
                    } else {
                      MainImage(0);
                    }
                  }}
                />
                <img
                  src={NextIcon}
                  alt="icon-previous"
                  className="icon_previous_mobile"
                  onClick={() => {
                    if (selectThumbnailStyle > 0) {
                      MainImage(selectThumbnailStyle - 1);
                    } else {
                      MainImage(thumbnailImages.length - 1);
                    }
                  }}
                />
              </div>
              <div className="select_main_photo">
                <div className="thumbnail_group">
                  {thumbnailImages.map((image_url, index) => (
                    <img
                      key={index}
                      src={image_url}
                      alt={"Thumbnail" + index + 1}
                      index={index}
                      onClick={() => MainImage(index)}
                      className={
                        selectThumbnailStyle === index
                          ? "select_thumbnail"
                          : null
                      }
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="main_page_rigth_side">
            <div className="info_sneakers_container">
              <div className="group_info">
                <h6>SNEAKER COMPANY</h6>
                <div className="title">
                  <h1>Fall Limited Edition Sneakers </h1>
                </div>
                <div className="resum_sneaker">
                  These low-profile sneakers are your perfect casual wear
                  companion. Featuring a durable rubber outer sole, they'Il
                  whithstand everything the weather can offer.
                </div>
                <div className="price_container">
                  <div className="group_price_reduction">
                    <div className="price">$125.00</div>
                    <div className="percentage_reduction">50%</div>
                  </div>
                  <div className="old_price">$250.00</div>
                </div>
              </div>
              <div className="group_button_add_cart">
                <div className="centered_div">
                  <div className="add-quantity-button">
                    <div
                      className="button_container"
                      onClick={() => decrementCounter()}
                    >
                      <img src={MoinsIcon} alt="icon-moins" />
                    </div>
                    <div className="input-container">
                      <h5>{quantity}</h5>
                    </div>
                    <div
                      className="button_container"
                      onClick={() => incrementCounter()}
                    >
                      <img src={PlusIcon} alt="icon-plus" />
                    </div>
                  </div>
                </div>
                <div className="add-to-cart-button">
                  <button
                    onClick={() => {
                      AddToCart();
                    }}
                  >
                    <img src={CartLogoWhite} alt="cart-logo" />
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
