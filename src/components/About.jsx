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
          <h1 className="fw-semibold">About The Project</h1>
          <p className="text-muted mt-3 lh-lg">
            Jeevika Project, an initiative supported by Oil India Limited (OIL)
            under its CSR program aimed at enhancing quality of life of rural
            communities in the Project areas of OIL through their economic
            upliftment, social inclusion, and sustainable development leading to
            empowerment of the rural communities The project embraces a value
            chain development approach in select high value
            agri/horticulture-crops and creating entrepreneurs in both farm and
            non-farm sectors. The interventions seek to address, high
            unemployment and low human development indicators by offering a mix
            of practical support, training, and institution building. Launched
            on <b>19th December 2022</b>, the project is being implemented in{" "}
            <b>14 villages across Guijan and Hapjan blocks in the Tinsukia</b>{" "}
            district of Assam.
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
          <h1 className="fw-semibold">Our Mission</h1>
          <p className="text-muted mt-3 lh-lg">
            <b>Oil India Limited (OIL)</b> is committed to engage with the local
            communities in its project areas to enhance economic opportunities
            as a part of its commitment to improve their quality of life
            through,
            <li>Enhancement of income of rural households.</li>
            <li>
              Promotion of inclusive, collective, and sustainable growth across
              farm and non-farm sectors.{" "}
            </li>
            <li>
              Empowering individuals and groups with the right tools, training,
              and resources to move toward economic stability and social
              empowerment.
            </li>{" "}
            <li>
              Transforming small and marginal farmers to micro-enterprises.
            </li>{" "}
            The initiative works to build self-reliant rural communities
            equipped with skills, resources, and market access to ensure
            long-term growth.
          </p>
        </div>
      </div>
      <div className="about-us d-flex flex-column flex-md-row gap-5 mt-5">
        <div className="about-us-text col-12 col-md-6">
          <h1 className="fw-semibold">Our Approach</h1>
          <p className="text-muted mt-3 lh-lg">
            The Project JEEVIKA adopts a cluster-based approach with the
            following strategies :{" "}
          </p>
          <ul className="approach-list text-muted mt-3 lh-lg">
            <li>
              Introduction and Promotion of high value crops on a commercial
              scale.
            </li>
            <li>
              Revitalization of traditional crops/industries and enhancing
              productivity.
            </li>
            <li>
              Development, creation and nurturing of grassroot level
              commodity-based organization.
            </li>
            <li>Value addition within the local community.</li>
            <li>Entrepreneurship development-priority for women.</li>
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
          <img
            className="responsive-image"
            src="/about-us-img-3.png"
            alt=""
            width="600"
            height="400"
          />
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
          {/* <h1 className="fw-semibold">Our Mission</h1> */}
          <p className="text-muted mt-3 lh-lg">
            <b>The project interventions are :</b>{" "}
            <li>
              <b>Crop Diversification :</b> Encouraging the use of multiple
              cropping systems and introducing high-value horticultural crops to
              make the best use of limited land and increase farm income.
            </li>
            <li>
              <b>Productivity enhancement :</b> Working across four key clusters
              – Tea, Citrus, Spices, and Bamboo – with tailored technical
              training and farm input support.{" "}
            </li>
            <li>
              <b>Bridging Knowledge Gaps :</b> Minimizing the extension gap
              between agricultural experts and local farmers.{" "}
            </li>
            <li>
              <b>Scientific Agricultural Practices :</b> Promoting modern and
              efficient methods to enhance farm productivity through right use
              of inputs, on farm trainings through demonstration plots
              established in farmer’s field.
            </li>
            <li>
              <b>Value addition, Market Linkages & Digital Connectivity :</b>{" "}
              Facilitating value addition, market access, and digital engagement
              for better outreach and visibility.{" "}
            </li>
            <li>
              <b>Entrepreneurship Support :</b> Providing training, mentoring,
              and business development services to aspiring entrepreneurs{" "}
            </li>
            <li>
              <b>Institution Building :</b> Strengthening local institutions
              such as Self-Help Groups (SHGs) and Farmer Producer Organizations
              (FPOs) to ensure long-term sustainability.
            </li>
            <li>
              <b>Need based Implementation Support :</b> Customized solutions,
              community involvement & perseverance.
            </li>
          </p>
        </div>
      </div>
      <div className="about-us d-flex flex-column flex-md-row gap-5 mt-5">
        <div className="about-us-text col-12 col-md-6">
          <h1 className="fw-semibold">Impact</h1>
          <p className="text-muted mt-3 lh-lg">
            With a focus on <b>empowerment and sustainability</b>, the project
            is actively transforming rural livelihoods while fostering a more
            resilient and self-reliant community ecosystem. Key highlights
            include the following, <br />
            <b>Key Highlights: Farm Based Activities : </b>
            {""}
            <li>
              <b>Khasi Mandarin:</b> average productivity increased by 51%: 3.9
              MT/ha in FY 23-24 to 5.8 MT/ha. Highest productivity recorded was
              11.7 MT/ha.
            </li>
            <li>
              <b>Tea:</b> unit price realization was 56% & 52% increase in net
              farm income among project participants. Facilitated direct market
              linkage with BLF through producer groups, reducing number of
              intermediaries involved. Promoting interplanting of Tea with black
              pepper.
            </li>
            <li>
              <b>King Chilli:</b> introduced on a Commercial Scale in FY 23-24,
              and farmers generated substantial revenue. Unit price realization
              ranged from ₹400/kg to ₹1,000/kg.
            </li>
            <li>Commodity specific village level collectives formed.</li>
            <li>
              Adoption level of the scientific package of practices after a year
              of implementation is between 60-65% to 100% depending upon the
              crops.
            </li>
            <li>
              Around 900 farmers have been trained on Good Agriculture Practices
              (GAP) .
            </li>
            <br />
            <b>Key Highlights:Non-Farm based Activities:</b>
            <li>
              <b>Bamboo Agarbatti Rolling Unit: </b> 100% Women participation,
              managed by 20 members SHG.
            </li>
            <li>
              Promotion of Vermi-compost Unit: 29 micro-enterprises promoted
              with a combined production capacity of 250 MT/year and market
              linkage established.
            </li>
            <li>
               <b>Spice Processing Unit -under construction:</b> capacity 150kg/hr
              (drawing front view can be given), proposed products- dehydrated &
              powdered ginger, turmeric and black pepper.
            </li>
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
    </div>
  );
}

export default About;
