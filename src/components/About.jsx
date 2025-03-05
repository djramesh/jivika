import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/about.css";
import "../styles/products.css";

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="container-fluid">
      <div className="products-section">
        <div className="product-bg">
          <img src="/abt_bnr_img.jpg" alt="products" />
        </div>
        <div className="product-overlay"></div>
        <div className="product-content">
          <h1 className="product-title">About us</h1>
        </div>
      </div>
      <div className="about-us d-flex flex-column flex-md-row gap-5 mt-5">
        <div className="about-us-text col-12 col-md-6">
          <h1 className="fw-semibold">Oil Jeevika Project</h1>
          <p className="text-muted mt-3 lh-lg">
            The Jevika project represents a significant initiative aims to
            address economic upliftment, social inclusion, collective growth and
            dynamic mindset with the necessary resources and support to move
            towards economic stability and sustainable livelihoods thereby
            doubling income level during the project period through a
            combination of farm and non-farm-based interventions. Launched in
            the year 19th December, 2022, it focuses on crop diversification,
            optimum use of scared resources, increase in farm output, value
            addition, market linkage, development of appropriate grassroots
            level institutions and enabling the use of digital and online
            platforms to improve connectivity by fostering partnerships and
            convergence among different stakeholders to maximize its impact
            under the project area. The project also encourages entrepreneurship
            as a means of creating livelihood opportunities. It provides support
            to aspiring entrepreneurs by offering training, mentoring, access to
            resources and business development prospects. The project aims to
            provide extensive support to a total of 861 participants across 14
            villages in Guijan and Hapjan blocks of Tinsukia district. It
            focuses on four main clusters: Tea, Citrus, Spice, and Bamboo. Each
            cluster receives customized technical assistance aimed at improving
            skills and proficiency. Additionally, essential farm inputs are
            supplied to ensure a smooth cultivation process, ultimately
            enhancing socio-economic empowerment within the communities
            involved.
          </p>
        </div>
        <div
          className="about-us-image col-12 col-md-6 mt-3"
          style={{
            background:
              "radial-gradient(circle, rgba(93, 255, 61, 0.52) 10%, transparent 60%)",
          }}
          data-aos="fade-left"
        >
          <img className="responsive-image" src="/about_us_img.png" alt="" />
        </div>
      </div>
      <div className="about-us d-flex flex-column flex-md-row gap-5 mt-5">
        <div
          className="about-us-image col-12 col-md-6"
          style={{
            background:
              "radial-gradient(circle, rgb(232, 255, 28) 10%, transparent 70%)",
            borderRadius: "20px",
          }}
          data-aos="fade-right"
        >
          <img
            className="responsive-image img-fluid"
            src="/about-us-img-2.png"
            alt=""
            width="600"
            height="600"
          />
        </div>
        <div className="about-us-text col-12 col-md-6">
          <h1 className="fw-semibold">Project Backdrop</h1>
          <p className="text-muted mt-3 lh-lg">
            The project identifies the critical challenges faced by upper Assam,
            particularly in the Hapjan and Guijan blocks of Tinsukia District,
            where high unemployment rates and low human development indicators
            are prevalent. To combat these issues, Jeevika project emphasizes
            providing access to sustainable livelihood opportunities,
            recognizing their essential role in human development as an
            implementing partner of Oil India Limited (OIL). The esteemed PSU is
            deeply committed to this cause, actively engaging in initiatives
            designed to enhance economic prospects and foster sustainable
            livelihoods in the region. By allocating its corporate social
            responsibility (CSR) resources strategically, OIL aims to drive
            substantial economic development and make a meaningful impact.
          </p>
        </div>
      </div>
      <div className="about-us d-flex flex-column flex-md-row gap-5 mt-5">
        <div className="about-us-text col-12 col-md-6">
          <h1 className="fw-semibold">Our Approach</h1>
          <ul className="approach-list text-muted mt-3 lh-lg">
            <li>Enhance productivity of crop by adoption of scientific agricultural practices in the crop fields.</li>
            <li>Minimize the extension gap between Agricultural experts and Farmers.</li>
            <li>Adoption of different cropping systems and cropping patterns to use the scarce land resource efficiently and maximize farm output.</li>
            <li>Institution building - Development of grass root level of institutions like SHG's/FPO's.</li>
            <li>Addition of high valued horticultural crops leading to crop diversification thereby increasing farm income.</li>
          </ul>
        </div>
        <div
          className="about-us-image col-12 col-md-6"
          style={{
            background:
              "radial-gradient(circle, rgba(93, 255, 61, 0.52) 10%, transparent 60%)",
          }}
          data-aos="fade-up"
        >
          <img className="responsive-image" src="/about-us-img-3.png" alt="" width="600" height="400"/>
        </div>
      </div>
    </div>
  );
}

export default About;
