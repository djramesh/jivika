import React from "react";
// import '../styles/gallery.css'

function Gallery() {
  const galleryImages = [
    {
      src: "https://www.webappfactory.co/jeevika/assets/images/gallery/glry_img1.webp",
      alt: "Gallery Image 1",
    },
    {
      src: "https://www.webappfactory.co/jeevika/assets/images/gallery/glry_img2.webp",
      alt: "Gallery Image 2",
    },
    {
      src: "https://www.webappfactory.co/jeevika/assets/images/gallery/glry_img3.webp",
      alt: "Gallery Image 3",
    },
    {
      src: "https://www.webappfactory.co/jeevika/assets/images/gallery/glry_img4.webp",
      alt: "Gallery Image 4",
    },
    {
      src: "https://www.webappfactory.co/jeevika/assets/images/gallery/glry_img5.webp",
      alt: "Gallery Image 5",
    },
    {
      src: "https://www.webappfactory.co/jeevika/assets/images/gallery/glry_img6.webp",
      alt: "Gallery Image 6",
    },
    {
      src: "https://www.webappfactory.co/jeevika/assets/images/gallery/glry_img7.webp",
      alt: "Gallery Image 7",
    },
    {
      src: "https://www.webappfactory.co/jeevika/assets/images/gallery/glry_img8.webp",
      alt: "Gallery Image 8",
    },
    {
      src: "https://www.webappfactory.co/jeevika/assets/images/gallery/glry_img9.webp",
      alt: "Gallery Image 9",
    },
    {
      src: "https://www.webappfactory.co/jeevika/assets/images/gallery/glry_img10.webp",
      alt: "Gallery Image 10",
    },
    {
      src: "https://www.webappfactory.co/jeevika/assets/images/gallery/glry_img11.webp",
      alt: "Gallery Image 11",
    },
    {
      src: "https://www.webappfactory.co/jeevika/assets/images/gallery/glry_img12.webp",
      alt: "Gallery Image 12",
    },
    {
      src: "https://www.webappfactory.co/jeevika/assets/images/gallery/glry_img13.webp",
      alt: "Gallery Image 13",
    },
    {
      src: "https://www.webappfactory.co/jeevika/assets/images/gallery/glry_img14.webp",
      alt: "Gallery Image 14",
    },
    {
      src: "https://www.webappfactory.co/jeevika/assets/images/gallery/glry_img15.webp",
      alt: "Gallery Image 15",
    },
    {
      src: "https://www.webappfactory.co/jeevika/assets/images/gallery/glry_img16.webp",
      alt: "Gallery Image 16",
    },
    {
      src: "https://www.webappfactory.co/jeevika/assets/images/gallery/glry_img17.webp",
      alt: "Gallery Image 17",
    },
    {
      src: "https://www.webappfactory.co/jeevika/assets/images/gallery/glry_img18.webp",
      alt: "Gallery Image 18",
    },
    {
      src: "https://www.webappfactory.co/jeevika/assets/images/gallery/glry_img19.webp",
      alt: "Gallery Image 19",
    },
    {
      src: "https://www.webappfactory.co/jeevika/assets/images/gallery/glry_img20.webp",
      alt: "Gallery Image 20",
    },
  ];

  return (
    <div className="container-fluid">
      <div className="products-section">
        <div className="product-bg">
          <img src="/gallery-bnr.png" alt="products" />
        </div>
        <div className="product-overlay"></div>
        <div className="product-content">
          <h1 className="product-title">Gallery</h1>
        </div>
      </div>
      <div className="gallery-images container-fluid mt-5">
        <div className="text-center">
          <h1 className="display-6 font-weight-bold">
            We've Done Many Other Projects Let's See Gallery <br /> Insights
          </h1>
        </div>

        <div className="row mt-5">
          <div className="col-md-12">
            {Array(Math.ceil(galleryImages.length / 4))
              .fill()
              .map((_, rowIndex) => (
                <div className="row mt-4" key={rowIndex}>
                  {galleryImages
                    .slice(rowIndex * 4, (rowIndex + 1) * 4)
                    .map((image, index) => (
                      <div
                        className={`col-6 col-md-3 ${index < 2 ? "mb-4" : ""}`}
                        key={index}
                      >
                        <img
                          src={image.src}
                          alt={image.alt}
                          width="100%"
                          height="auto"
                        />
                      </div>
                    ))}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
