import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/productDetails.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductDetails = () => {
  const location = useLocation();
  const { product } = location.state || {};
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isOrderPopupVisible, setIsOrderPopupVisible] = useState(false);

  const handleOrderClick = () => {
    setIsOrderPopupVisible(true);
  };

  const closeOrderPopup = () => {
    setIsOrderPopupVisible(false);
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedImage(null);
  };

  return (
    <div>
      <div className="product-details d-flex flex-md-row align-items-center justify-content-center vh-100 z-10">
        <div
          className="product-details-section d-flex flex-column flex-md-row align-items-center justify-content-between"
          style={{
            background: product.bgColor,
            borderRadius: "20px",
            width: "100%",
            height: "100%",
            maxWidth: "800px",
            gap: "2rem",
          }}
        >
          <div className="product-description text-center mx-md-2">
            <h1>{product.name}</h1>
            <p className="text-muted">{product.scientificName}</p>
            <p className="letter-spacing-1">{product.description}</p>
          </div>
          <div className="product-images text-center mx-md-2">
            <img
              src={product.productImg}
              style={{ borderRadius: "20px", width: "300px", height: "300px" }}
              alt={product.name}
            />
            <button className="order-btn mt-5" onClick={handleOrderClick}>
              Order now
            </button>
          </div>
          <div className="product-specs text-center text-md-right">
            <h3>Specifications</h3>
            <ul className="list-unstyled">
              <li>Minimum Order Quantity: 10 Kg</li>
              <li>Delivery Time: 10 days</li>
              <li>Product Type : Fresh</li>
              <li>Processing: Raw</li>
              {/* <li>Physical Form: Granules</li> */}
              <li>Grade: First Class</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="product-images-heading">
        <h1 className="text-center">Product Images</h1>
      </div>
      <div className="product-images-bottom d-flex flex-column flex-md-row align-items-center justify-content-center">
        {(product.productImages || []).slice(0, 5).map((image, index) => (
          <img
            key={index}
            src={image}
            style={{
              borderRadius: "20px",
              width: "300px",
              height: "300px",
              cursor: "pointer",
              margin: "0 5px",
            }}
            alt={`Product image ${index + 1}`}
            onClick={() => handleImageClick(image)}
          />
        ))}
      </div>
      {/* {isPopupOpen && (
        <div className="image-popup">
          <div className="popup-content">
            <button className="close-btn" onClick={closePopup}>
              &times;
            </button>
            <img src={selectedImage} alt="Selected product" />
          </div>
        </div>
      )} */}
      {isOrderPopupVisible && (
        <div className="order-popup">
          <div className="order-popup-content">
            <button className="close-order-btn" onClick={closeOrderPopup}>
              &times;
            </button>
            <div className="order-popup-details d-flex flex-md-row flex-column align-items-center justify-content-center">
              <div>
                <h2>Contact for orders</h2>
                <p>
                  Email :{" "}
                  <a
                    href="mailto:lochan.dutta@schoolnetindia.com"
                    className="text-decoration-none"
                  >
                    <span className="span-contact">
                      {" "}
                      lochan.dutta@schoolnetindia.com{" "}
                    </span>
                  </a>{" "}
                  <br /> Phone :
                  <a href="tel:+918133991098" className="text-decoration-none">
                    <span className="span-contact">+91 8133991098 </span>
                  </a>
                </p>
              </div>
              <div>
                <img
                  src="/delivery-boy.png"
                  alt="delivery-boy"
                  width="200px"
                  height="200px"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
