import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/clusterDetails.css";

function ClusterDetails() {
  const { clusterId } = useParams();
  useEffect(() => {
    const sectionIds = {
      tea: "tea-cluster",
      citrus: "citrus-cluster",
      spice: "spices-cluster",
      bamboo: "bamboo-cluster",
      kingchilli: "kingchilli-cluster",
    };

    const sectionId = sectionIds[clusterId];
    if (sectionIds) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behaviour: "smooth" });
      }
    }
  }, [clusterId]);

  return (
    <div className="container-fluid">
      <div className="products-section">
        <div className="product-bg">
          <img src="/cluster_hero_img.webp" alt="products" />
        </div>
        <div className="product-overlay"></div>
        <div className="product-content">
          <h1 className="product-title">Clusters</h1>
        </div>
      </div>
      {/* <div className="about-us d-flex flex-md-row gap-5 mt-5">
          <p className="text-muted mt-3">
            The project adopts an integrated cluster-based approach to foster
            self-employment and sustainable income generation, with a strong
            emphasis on creating linkages across the agricultural value chain.
            It strategically targets key objectives such as introducing
            high-value crops, promoting bamboo cultivation, value addition and
            transitioning towards demand-driven production systems.
          </p>
      </div> */}
      <div className="about-us d-flex flex-md-row gap-5 mt-5" id="tea-cluster">
        <div className="about-us-text col-12 col-md-6">
          <h1 className="fw-semibold">
            Tea
            <img
              src="/tea-leaf.png"
              alt="Tea Leaf"
              className="ms-2"
              width="50px"
              height="50px"
            />
          </h1>
          <p className="text-muted mt-3 lh-lg">
            <b>Empowering Small Tea Growers through Sustainable Practices:</b>{" "}
            <br />
            Our Tea Cluster initiative supports small tea growers across{" "}
            <b> 8 villages (100 hectares) covering about 250+growers </b>,
            enhancing skills, soil health, quality of leaves and market access
            through practical, on-ground interventions. In two years, the
            achievement has been: <br />
            <li>
              <b>Productivity Gains:</b> 17% increase in green leaves yield.
            </li>
            <li>
              <b>Income Growth:</b> Average income/ha increased by 54%.{" "}
            </li>
            <li>
              <b>Improved Quality:</b> Fine Leaf Count (FLC) improved from 0% to
              28%, enhancing market value.{" "}
            </li>
            <li>
              <b>Efficient Transport:</b> Nylon bag usage and dedicated vehicles
              ensure quality during transit.{" "}
            </li>
            <li>
              <b>Direct Market Linkages:</b> Growers connected to BLFs, reducing
              intermediaries and boosting profits.{" "}
            </li>
            <li>
              <b>On-ground Support:</b> Regular field monitoring, FLC tracking,
              and adoption of Good Agri Practices.{" "}
            </li>
            <li>
              Farmers have been supported with high-quality essential inputs.{" "}
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
          <img className="responsive-image" src="/tea.png" alt="" />
        </div>
      </div>
      <div
        className="about-us d-flex flex-cloumn flex-md-row gap-5 mt-5"
        id="citrus-cluster"
      >
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
            src="/khasi-mandarin.png"
            alt="Khasi Mandarins"
            width="500"
            height="500"
          />
        </div>
        <div className="about-us-text col-12 col-md-6">
          <h1 className="fw-semibold">
            Citrus
            <img
              src="/citrus.png"
              alt="Citrus Leaf"
              className="ms-2"
              width="50px"
              height="50px"
            />
          </h1>
          <p className="text-muted mt-3 lh-lg">
            <li>
              <b>Khasi Mandarin </b>
            </li>
            This initiative focuses on revitalizing traditional Khasi
            Mandarinorchards by addressing poor management and reducing
            climate-related risks—helping farmers adopt better practices and
            improve their livelihoods.
            <li>
              Yield & productivity improved by over 50% through better orchard
              care and timely interventions.{" "}
            </li>
            <li>
              Improved pruning and pest control led to healthier fruits with
              higher market demand.{" "}
            </li>
            <li>
              Equipped farmers with quality assessment tools for understanding
              the grading standards.
            </li>
            <li>
              A demo orchard in PuroniMotapung showcases sustainable farming
              techniques.
            </li>
            <li>
              Market exposure expanded through participation in exhibitions and
              direct buyer linkages.{" "}
            </li>
            <li>
              Farmers have been supported with high-quality essential inputs.{" "}
            </li>
          </p>
        </div>
      </div>
      <div className="about-us d-flex flex-column flex-md-row gap-5 mt-5">
        <div className="about-us-text col-12 col-md-6">
          <p className="text-muted mt-3 lh-lg">
            <li>
              <b>Assam Lemon :</b>
            </li>
            This elongated variety of lime, native to Assam and part of the
            Rutaceae family, is often called the “Queen of Citrus” for its
            distinctive aroma, taste, and health benefits. It’s also one of the
            highest-yielding crops in our project area.
            <li>
              The crop is promoted on a commercial scale among small and
              marginal farmers.{" "}
            </li>
            <li>
              Farmers guided on Good Agricultural Practices (GAP) from the
              beginning.
            </li>
            <li>
              Ensuring adoption of GAP through intensive extension activities.
            </li>
            <li>
              Regular field visits ensuring adoption of recommended package of
              practices which includes scientific use of inputs.{" "}
            </li>
            <li>
              A demonstration plot in Borgaon showcases sustainable lemon
              cultivation techniques.
            </li>
            <li>
              Farmers have been supported with high-quality planting materials
              and essential inputs.{" "}
            </li>
          </p>
        </div>
        <div
          className="about-us-image col-12 col-md-6"
          style={{
            background:
              "radial-gradient(circle, rgba(28, 255, 47, 0.68) 10%, transparent 70%)",
            borderRadius: "20px",
          }}
          data-aos="fade-up"
        >
          <img
            className="responsive-image img-fluid"
            src="/assam-lemon.png"
            alt=""
            width="700"
            height="700"
          />
        </div>
      </div>
      <div
        className="about-us d-flex flex-cloumn flex-md-row gap-5 mt-5"
        id="spices-cluster"
      >
        <div
          className="about-us-image col-12 col-md-6"
          style={{
            background:
              "radial-gradient(circle, rgba(116, 255, 61, 0.52) 10%, transparent 60%)",
          }}
          data-aos="fade-right"
        >
          <img
            className="responsive-image"
            src="/black-pepper-cluster-1.png"
            alt=""
            width="700"
            height="700"
          />
        </div>
        <div className="about-us-text col-12 col-md-6">
          <h1 className="fw-semibold">
            Spices
            <img
              src="/spices-img.png"
              alt="Spices Leaf"
              className="ms-2"
              width="50px"
              height="50px"
            />
          </h1>
          <p className="text-muted mt-3 lh-lg">
            Assam’s unique climate and soil make it ideal for cultivating a
            variety of high-value spices like ginger, turmeric, king chili (Bhut
            Jolokia), bay leaves, and black pepper. Most of these are grown with
            minimal chemical input, making them naturally organic. The state is
            one of India’s top producers of ginger and turmeric, known for their
            strong aroma and medicinal value. Specialty spices like King Chilli
            and high-curcumin turmeric varieties add to Assam’s rich spice
            portfolio. With the right support in processing, storage, and market
            access, Assam’s spices hold immense potential for both domestic and
            global markets. Under the project, beneficiaries are grouped under
            Producer Groups (PGs) and would be linked with Spice Processing
            Plant being established. Interventions include the following:
            <br />
            <li>
              <b>Black Pepper:</b>
            </li>
            Black Gold Known for its strong flavour, black pepper holds a
            special place in both kitchens. There is growing global demand.
            Under the Jeevika project, we’re helping farmers tap into its full
            potential through hands-on support and training. One of the key
            objectives of promoting black pepper is for interplanting in Tea
            small holdings, broad base income basket.
            <li>
              Farmers have been supported with high-quality planting materials
              and essential inputs.{" "}
            </li>
            <li>
              On-site demonstrations and expert guidance to improve crop care
              and disease management.{" "}
            </li>
            <li>
              Focus on boosting productivity and ensuring sustainable pepper
              cultivation.{" "}
            </li>
            <li>
              Healthy vine growth observed, with flowering in progress in
              several gardens.{" "}
            </li>
            <li>
              Promoting interplanting in Tea holdings using shade trees as
              standards.{" "}
            </li>
          </p>
        </div>
      </div>
      <div className="about-us d-flex flex-column flex-md-row gap-5 mt-5">
        <div className="about-us-text col-12 col-md-6">
          <p className="text-muted mt-3 lh-lg">
            <li>
              <b>Ginger & Turmeric:</b>
            </li>{" "}
            High-Value Crops for Sustainable Livelihoods Ginger and turmeric are
            promoted under the project on a commercial scale in small and
            marginal holdings, as a part of crop diversification and developing
            Spice Value Chains to boost farmer’s income. <br />
            <li>
              <b>Ginger:</b> Farmers are supported with high yielding quality
              rhizomes, seed treatment, proper spacing, post-harvest and market
              linkage.
            </li>
            <br />
          </p>
        </div>
        <div
          className="about-us-image col-12 col-md-6"
          style={{
            background:
              "radial-gradient(circle, rgba(255, 240, 28, 0.68) 10%, transparent 70%)",
            borderRadius: "20px",
          }}
          data-aos="fade-up"
        >
          <img
            className="responsive-image img-fluid"
            src="/ginger-product-1.png"
            alt=""
            width="500"
            height="500"
          />
        </div>
      </div>
      <div className="about-us d-flex flex-md-row align-items-center justify-content-center gap-5 mt-5">
        <div
          className="about-us-image col-12 col-md-6"
          style={{
            background:
              "radial-gradient(circle, rgba(171, 255, 61, 0.74) 10%, transparent 60%)",
          }}
          data-aos="fade-right"
        >
          <img
            className="responsive-image"
            src="/turmeric-product.png"
            alt=""
            width="500"
            height="500"
          />
        </div>
        <div className="about-us-text col-12 col-md-6">
          <p className="text-muted mt-3 lh-lg">
            <b>Turmeric:</b> Cultivation is encouraged on suitable land with
            training on scientific practices, aiming to improve both crop
            productivity and soil health. Farmers are encouraged to undertake
            value -addition practices.
          </p>
        </div>
      </div>
      <div className="about-us d-flex flex-column flex-md-row gap-5 mt-5">
        <div className="about-us-text col-12 col-md-6">
          <p className="text-muted mt-3 lh-lg">
            <li>
              <b>King Chilli:</b>
            </li>
            Premium Returns Native to the Northeast, King Chilli—also known as
            BhootJholokia—is one of the hottest chillies in the world, prized
            for its intense heat and smoky flavour. It’s widely used in local
            cuisine and value-added products like sauces and pickles, with
            growing interest due to its health benefits and commercial value.
            The Jeevika Project has introduced King Chilli as a high-value crop
            to boost farmer incomes. Cultivation has been promoted on a
            commercial scale, showing excellent market response and community
            interest.
            <li>
              <b>Average Price Range:</b> ₹400–₹1,000 per kg depending on
              quality.
            </li>
            <li>
              <b>Adopted as a Cash Crop:</b> Encouraged for income
              diversification among small and marginal farmers.
            </li>
            <li>
              <b>liising Participation:</b> Strong interest from the community,
              including active involvement from women farmers.
            </li>
            <li>
              In the demonstration plot, productivity of 4.4 MT/ha was achieved.
            </li>
            This initiative is helping farmers tap into the growing demand for
            premium chillies while promoting sustainable agricultural practices.
          </p>
        </div>
        <div
          className="about-us-image col-12 col-md-6"
          style={{
            background:
              "radial-gradient(circle, rgba(47, 255, 28, 0.51) 10%, transparent 60%)",
            borderRadius: "20px",
          }}
          data-aos="fade-up"
        >
          <img
            className="responsive-image img-fluid"
            src="/king-chilli-1.png"
            alt=""
            width="700"
            height="700"
          />
        </div>
      </div>
      <div
        className="about-us d-flex flex-md-row align-items-center justify-content-center gap-5 mt-5"
        id="bamboo-cluster"
      >
        <div
          className="about-us-image col-12 col-md-6"
          style={{
            background:
              "radial-gradient(circle, rgba(93, 255, 61, 0.74) 10%, transparent 60%)",
          }}
          data-aos="fade-right"
        >
          <img
            className="responsive-image"
            src="/bamboo.jpeg"
            alt=""
            width="500"
            height="500"
          />
        </div>
        <div className="about-us-text col-12 col-md-6">
          <h1 className="fw-semibold">
            Bamboo
            <img
              src="/bamboo.png"
              alt="Citrus Leaf"
              className="ms-2"
              width="50px"
              height="50px"
            />
          </h1>
          <p className="text-muted mt-3 lh-lg">
            <b>Bamboo: </b>
            Green Gold Bamboo is one of the fastest-growing crops and offers
            both ecological and economic benefits. The Oil Jeevika project
            promotes bamboo cultivation as a sustainable livelihood option for
            small-scale farmers across the intervention area. By encouraging the
            plantation of Bambusa tulda and Bambusa balcooa, which are known for
            their high carbon storage capacity, the project supports climate
            resilience. On average, one hectare of bamboo can absorb around
            17-20 tons of carbon annually, making it a natural carbon sink. It
            also supports development of microenterprises through value
            addition.
            <li>
              Dual Benefit: Supports income generation and contributes to
              environmental conservation.{" "}
            </li>
            <li>
              High-Value Varieties: Focus on species with strong potential for
              carbon storage and commercial use.{" "}
            </li>
            The initiative is helping communities unlock the versatile potential
            of bamboo—from raw material to value-added products.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ClusterDetails;
