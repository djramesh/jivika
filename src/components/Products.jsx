import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/products.css";

const products = [
  {
    id: 1,
    name: "Ginger",
    img: "https://www.webappfactory.co/jeevika/assets/images/products/prd_ginger.webp",
    productImages: [
      "/ginger-product-img-1.JPG",
      "/ginger-product-img-2.JPG",
      "/ginger-product-img-3.JPG",
    ],
    productImg: "/ginger-product.png",
    scientificName: "Zingiber officinale",
    bgColor: "radial-gradient(circle, rgb(255, 238, 0) 10%, transparent 70%)",
    description:
      "Consumption of ginger helps in digestion, boost metabolism, weight loss, Relief of Nausea, Dental health, Stomach ulcer.",
  },
  {
    id: 2,
    name: "Turmeric",
    img: "https://www.webappfactory.co/jeevika/assets/images/products/prd_turmeric.webp",
    productImages: [
      "/turmeric-product-img-1.JPG",
      "/turmeric-product-img-2.JPG",
      "/turmeric-product-img-3.JPG",
    ],
    productImg: "/turmeric-product.png",
    scientificName: "Curcuma longa",
    bgColor: "radial-gradient(circle, rgb(187, 255, 0) 10%, transparent 70%)",
    description:
      "Turmeric contains antioxidants helps in rejuvenate memory cells, improve heart health and curbs cancer causing  cells.",
  },
  {
    id: 3,
    name: "Black Pepper",
    img: "	https://www.webappfactory.co/jeevika/assets/images/products/prd_blackpaper.webp",
    productImages: [
      "/black-pepper-product-img-1.JPG",
      "/black-pepper-product-img-2.JPG",
      "/black-pepper-product-img-3.JPG",
    ],
    productImg: "/black-pepper-cluster.png",
    scientificName: "Piper nigrum",
    bgColor: "radial-gradient(circle, rgb(255,193,140) 10%, transparent 70%)",
    description:
      "“King of Spices” rich in antioxidents. Black pepper continues to be a staple in kitchens worldwide, adding spice.",
  },
  {
    id: 4,
    name: "Khasi Mandarin",
    img: "https://www.webappfactory.co/jeevika/assets/images/products/prd_khasi_mandarin.webp",
    productImages: [
      "https://www.webappfactory.co/jeevika/assets/images/products/prd_khasi_mandarin.webp",
      "https://www.webappfactory.co/jeevika/assets/images/products/prd_khasi_mandarin.webp",
      "https://www.webappfactory.co/jeevika/assets/images/products/prd_khasi_mandarin.webp",
    ],
    productImg: "/khasi-mandarin.png",
    scientificName: "Citrus reticulata",
    bgColor: "radial-gradient(circle, rgb(255, 134, 47) 10%, transparent 70%)",
    description:
      "Rich in Vitamin C, Hign in antioxidents, improve immune system, Boost gut health and may reduce  kidney stone.",
  },

  {
    id: 5,
    name: "Bhut Jolokiya (King Chilli)",
    img: "https://www.webappfactory.co/jeevika/assets/images/products/prd_nagachilli.webp",
    productImages: [
      "https://www.webappfactory.co/jeevika/assets/images/products/prd_nagachilli.webp",
      "https://www.webappfactory.co/jeevika/assets/images/products/prd_nagachilli.webp",
      "https://www.webappfactory.co/jeevika/assets/images/products/prd_nagachilli.webp",
    ],
    productImg: "/king-chilli.png",
    scientificName: "Capsicum chinense",
    bgColor:
      "radial-gradient(circle, rgba(255, 32, 32, 0.71) 10%, transparent 70%)",
    description:
      "Hold a place among the hottest chilli in the world. It helps in boost metabolism, pain relief and have antioxidant.",
  },

  {
    id: 6,
    name: "Assam lemon",
    img: "https://www.webappfactory.co/jeevika/assets/images/products/prd_assam_lemon.webp",
    productImages: [
      "https://www.webappfactory.co/jeevika/assets/images/products/prd_assam_lemon.webp",
      "https://www.webappfactory.co/jeevika/assets/images/products/prd_assam_lemon.webp",
      "https://www.webappfactory.co/jeevika/assets/images/products/prd_assam_lemon.webp",
    ],
    productImg: "/assam-lemon.png",
    scientificName: "Citrus limon",
    bgColor:
      "radial-gradient(circle, rgba(39, 255, 50, 0.84) 10%, transparent 70%)",
    description:
      "“State fruit of Assam” known for its unique flavour and aroma. Rich in Vitamin C, antioxidents and improves immunity.",
  },

  {
    id: 7,
    name: "Tea",
    img: "https://www.webappfactory.co/jeevika/assets/images/service/tea2.webp",
    productImages: [
      "https://www.webappfactory.co/jeevika/assets/images/service/tea2.webp",
      "https://www.webappfactory.co/jeevika/assets/images/service/tea2.webp",
      "https://www.webappfactory.co/jeevika/assets/images/service/tea2.webp",
    ],
    productImg: "/tea.png",
    scientificName: "Camellia sinensis",
    bgColor: "radial-gradient(circle, rgb(111, 255, 118) 10%, transparent 70%)",
    description:
      "Contains caffeine that boost brain cells, aids in weight loss, maintain blood sugar, have potential to fight against cancer.",
  },

  {
    id: 8,
    name: "Agarbatti Rolling sticks",
    img: "https://www.webappfactory.co/jeevika/assets/images/products/prd_agarbati.webp",
    productImages: [
      "https://www.webappfactory.co/jeevika/assets/images/products/prd_agarbati.webp",
      "https://www.webappfactory.co/jeevika/assets/images/products/prd_agarbati.webp",
      "https://www.webappfactory.co/jeevika/assets/images/products/prd_agarbati.webp",
    ],
    productImg: "/agarbatti.png",
    scientificName: "Value Addition",
    bgColor:
      "radial-gradient(circle, rgba(255, 155, 73, 0.65) 10%, transparent 70%)",
    description:
      "Non scented agarbati made by  women from the villages of Daisa and Bor rupai.",
  },

  {
    id: 9,
    name: "Vermicompost",
    img: "https://www.webappfactory.co/jeevika/assets/images/products/prd_vermicompost.webp",
    productImages: [
      "https://www.webappfactory.co/jeevika/assets/images/products/prd_vermicompost.webp",
      "https://www.webappfactory.co/jeevika/assets/images/products/prd_vermicompost.webp",
      "https://www.webappfactory.co/jeevika/assets/images/products/prd_vermicompost.webp",
    ],
    productImg: "/vermicompost.png",
    scientificName: "Value Addition",
    bgColor:
      "radial-gradient(circle, rgba(133, 60, 0, 0.52) 10%, transparent 70%)",
    description:
      "Enrich compost with the use of earthworms and recycle agriculture waste, enhances soil properties.",
  },

  {
    id: 10,
    name: "Bamboo",
    img: "https://www.webappfactory.co/jeevika/assets/images/gallery/glry_img11.webp",
    productImages: [
      "https://www.webappfactory.co/jeevika/assets/images/gallery/glry_img11.webp",
      "https://www.webappfactory.co/jeevika/assets/images/gallery/glry_img11.webp",
      "https://www.webappfactory.co/jeevika/assets/images/gallery/glry_img11.webp",
    ],
    productImg: "/bamboo-product.png",
    icon: "https://www.webappfactory.co/jeevika/assets/images/icon/bamboo.svg",
    scientificName: "Bambusoideae",
    bgColor:
      "radial-gradient(circle, rgba(30, 180, 0, 0.52) 10%, transparent 70%)",
    description:
      "It absorbs greenhouse gases and releases oxygen. 1 ha of bamboo can absorb 17 tonnes of carbon per year.",
  },
];

const Products = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div id="products mt-3">
      <div className="products-section">
        <div className="product-bg">
          <img
            src="https://www.webappfactory.co/jeevika/assets/images/products/product_bnr_img.webp"
            alt="products"
          />
        </div>
        <div className="product-overlay"></div>
        <div className="product-content">
          <h1 className="product-title">Products</h1>
        </div>
      </div>
      <br />
      <br />
      <div className="product-grid mt-8">
        {products.map((product) => (
          <div key={product.id} className="product-card" data-aos="fade-up">
            <img
              src={product.img}
              alt={product.name}
              className="product-image"
            />
            <div className="product-content">
              <div className="d-flex justify-content-center align-items-center mb-1">
                <h2 className="product-name mb-0">{product.name}</h2>
              </div>
              <p className="text-muted">{product.scientificName}</p>
              <p className="product-description">{product.description}</p>
              <div className="">
                <Link to={`/product-details/${product.id}`} state={{ product }}>
                  <button className="order-btn">Order now</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Products;
