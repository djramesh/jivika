import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/products.css";

const products = [
  {
    id: 1,
    name: "Ginger",
    img: "/ginger_img.JPG",
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
    name: "Mandarin",
    img: "https://horticult.wordpress.com/wp-content/uploads/2016/07/me1bb99t_cc3a0nh_que1baa5t.jpg?w=1200",
    productImages: [
      "/khasi_mandarine.jpeg",
      "/khasi_mandarine_1.jpeg",
      "/khasi_mandarine_3.jpeg",
    ],
    productImg: "/khasi-mandarin.png",
    scientificName: "Citrus reticulata",
    bgColor: "radial-gradient(circle, rgb(255, 134, 47) 10%, transparent 70%)",
    description:
      "Rich in Vitamin C, Hign in antioxidents, improve immune system, Boost gut health and may reduce  kidney stone.",
  },

  {
    id: 5,
    name: "Bhoot Jolokiya (King Chilli)",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Bhut-Jolokia-pc.jpg/1200px-Bhut-Jolokia-pc.jpg",
    productImages: [
      "https://cdn.shopify.com/s/files/1/0581/8230/3937/files/Bhut_Jolokia_-_Scoville_Scale_and_Heat_Levels.webp?v=1706513996",
      "https://5.imimg.com/data5/KP/WB/MY-74392315/assam-bhut-jolokia.jpg",
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
    img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRv9tPamPXOLXCmZ0tGdSlV2azU9GYbZz2weqmZxNjJL650ojbX8CVMRrjyQMKy_3EAKZU2_Z1fbZiXpy96Ctd18w",
    productImages: [
      "https://5.imimg.com/data5/ANDROID/Default/2021/5/YF/EB/BI/95501584/screenshot-20210518-115406-google-jpg-500x500.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuEFOR8WH5Oed_PDqpdbRuZ1W2p_1rp_oiiA&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGbEi3Df3Hcwlpd6KbH3qV25-W7ZfUsnE2Fg&s",
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
    img: "/tea_2.jpeg",
    productImages: [
      "/tea_image.JPG",
      "/tea_1.jpeg",
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
      "/vermin-compost.jpeg",
      "https://cdn.shopify.com/s/files/1/0047/9730/0847/files/compost-with-redworm_480x480.jpg?v=1624826892",
      "https://www.gandhisgardentokitchen.com/product-images/pVJwwlzjOQ.jpg/1481995000000253073/600x600",
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
    img: "/bamboo-1.jpeg",
    productImages: [
      "/bamboo-2.jpeg",
      "/bamboo-1.jpeg",
      "/bamboo-3.jpeg",
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
    <div id="products">
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
              <i className="text-muted">{product.scientificName}</i>
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
