import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/clusterDetails.css"

function ClusterDetails() {
  const { clusterId } = useParams();
  useEffect(() => {
    const sectionIds = {
      tea: "tea-cluster",
      citrus: "citrus-cluster",
      spice: "spices-cluster",
      bamboo: "bamboo-cluster",
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
      <div
        className="about-us d-flex flex-md-row gap-5 mt-5"
        id="tea-cluster"
      >
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
            The initiatives under Tea Cluster has made significant strides in
            improving the livelihoods of 250 small tea growers by enhancing
            their skills, knowledge, and market linkage. The Cluster encompasses
            100 hectares of matured tea gardens, integrating 8 villages. Soil
            testing has been conducted in the project area for understanding the
            nutrient levels, pH balance, and overall health of the soil. Based
            on detailed soil test reports, necessary farm inputs for farmers in
            our project area were calculated and distributed accordingly. Under
            the project, initiatives were taken to encourage farmers to adopt
            Good Agricultural Practices (GAP), including integrated nutrient
            management (INM), proper cultural operations like pruning and
            skiffing, through on-site demonstrations and guidance. A
            demonstration plot has been established to showcase best practices
            in the Digholtorong village. Additionally, efforts are underway for
            adoption of standard post-harvest practices and facilitate efficient
            farm-to-factory transportation, connecting growers directly with
            nearby BLF facilities for optimal market access and financial
            benefits.
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
            <b>Khasi Mandarins :</b> The project encompasses, 25 hectares of
            mature Khasi Mandarin orchards, involving 50 dedicated farmers. The
            goal is to boost crop yield, quality and income. Through
            comprehensive training and provision of essential inputs, the
            project aims to empower growers with effective management skills
            while ensuring soil fertility and plant health. Produce from the
            project area were sent to grade analysis at CPCRS, Tinsukia for for
            quality assessment. A demonstration plot at Puroni Motapung serves
            as a beacon of best practices in sustainable cultivation, inspiring
            the community towards proper cultural operations and orchard
            management. Market linkages are strengthened via exhibitions at
            various locations offering growers broader sales opportunities and
            gain maximum financial benefit.
          </p>
        </div>
      </div>
      <div className="about-us d-flex flex-column flex-md-row gap-5 mt-5">
        <div className="about-us-text col-12 col-md-6">
          <p className="text-muted mt-3 lh-lg">
            <b>Assam Lemon :</b> Assam Lemon, known for its unique aroma, is a
            prominent citrus fruit which also records highest productivity from
            our project area. It is widely appreciated for its distinct taste
            and numerous health benefits, making it a valuable crop for both
            local consumption and export markets. The project has covered 10 Ha
            of cultivable land and extending support to 38 growers till date.
            Through on-site demonstrations and input application monitoring,
            growers were encouraged to adopt Good Agricultural Practices (GAP)
            since the inception days. A demonstration plot has been established
            at Borgaon to showcase best practices and serve as a model for
            sustainable lemon cultivation.
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
            width="500"
            height="500"
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
              "radial-gradient(circle, rgba(255, 74, 61, 0.52) 10%, transparent 60%)",
          }}
          data-aos="fade-right"
        >
          <img
            className="responsive-image"
            src="/black-pepper-cluster.png"
            alt=""
            width="500"
            height="500"
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
            <b>Black Pepper :</b> Black pepper, is one of the most widely used
            spices globally, prized for its pungent flavor and culinary
            versatility often referred to as “king of spice” due to its
            historical significance and economic importance. Black pepper
            continues to be a staple in kitchens worldwide, adding depth and
            spice to a wide array of dishes, from savory to sweet. Jeevika
            project has covered 70 beneficiaries, providing them with good
            quality planting materials, comprehensive training, and input
            supplies. Project aims to empower and encourage the participants by
            equipping them with the necessary resources and on site
            demonstrative training to enhance their productivity and
            sustainability.
          </p>
        </div>
      </div>
      <div className="about-us d-flex flex-column flex-md-row gap-5 mt-5">
        <div className="about-us-text col-12 col-md-6">
          <p className="text-muted mt-3 lh-lg">
            <b>Ginger :</b> The high commercial value of ginger makes its
            cultivation a profitable venture, significantly enhancing the
            livelihoods of small farmers. Project has extended support to 229
            farmers covering 50 Ha. Under the project, farmers are encouraged to
            take up ginger cultivation as a source of livelihood and income
            enhancement prospect. Growers were guided thoroughly from the
            selection of good quality planting materials, seed treatment,
            spacing etc till post harvest handling for better yield and income.
            Turmeric: Similarly, The project has encouraged farmers to grow
            Turmeric due to its high market demand in National market. A total
            of 118 farmers covering 25 ha having suitable land for turmeric
            cultivation were selected and trained to adopt all the scientific
            practices, not only to get higher yield but also to improve soil
            health.
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
            src="/ginger-product.png"
            alt=""
            width="400"
            height="400"
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
            <b>Turmeric :</b> Similarly, The project has encouraged farmers to
            grow Turmeric due to its high market demand in National market. A
            total of 118 farmers covering 25 ha having suitable land for
            turmeric cultivation were selected and trained to adopt all the
            scientific practices, not only to get higher yield but also to
            improve soil health.
          </p>
        </div>
      </div>
      <div className="about-us d-flex flex-column flex-md-row gap-5 mt-5">
        <div className="about-us-text col-12 col-md-6">
          <p className="text-muted mt-3 lh-lg">
            <b>Naga Chilli :</b> Naga Chilli is one of the hottest chilli in the
            world, originating from the North Eastern States. Beyond its intense
            pungency, Naga chilli is also appreciated for its unique flavor,
            which adds depth to dishes. It is used in various culinary
            applications, including sauces, pickles, and traditional recipes.
            Additionally, Naga chili has been studied for its potential health
            benefits, such as its antioxidant properties and potential to boost
            metabolism. Considering the potential and commercial value of Naga
            chili, the Oil Jeevika Project has extended support to 25 farmers,
            covering 5 hectares of land for fresh plantations and scaling up for
            commercial purposes. This initiative aims to enhance the income of
            the growers by leveraging the high market demand and premium pricing
            of Naga chili. By providing the necessary resources, training, and
            support, the project seeks to empower these farmers, improve their
            livelihoods, and contribute to the sustainable development of the
            local agricultural economy.
          </p>
        </div>
        <div
          className="about-us-image col-12 col-md-6"
          style={{
            background:
              "radial-gradient(circle, rgba(255, 28, 28, 0.51) 10%, transparent 60%)",
            borderRadius: "20px",
          }}
          data-aos="fade-up"
        >
          <img
            className="responsive-image img-fluid"
            src="/king-chilli.png"
            alt=""
            width="400"
            height="400"
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
              "radial-gradient(circle, rgba(171, 255, 61, 0.74) 10%, transparent 60%)",
          }}
          data-aos="fade-right"
        >
          <img
            className="responsive-image"
            src="/bamboo-product.png"
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
            <b>Bamboo :</b> It is one of the fastest growing crops. The project
            proposes bamboo cultivation as a livelihood opportunity for 70
            small-scale growers under the project intervention area covering
            30Ha. Bamboo stands out as a species that not only aids in value
            addition but also act as an efficient carbon sinks on an average one
            Ha of bamboo stands absorbs approx 17 tons of carbon per year. By
            promoting bamboo cultivation, Oil Jeevika project aims to provide
            livelihoods prospects while contributing positively to environmental
            conservation efforts. Growers were encouraged to grow both the
            variety of bamboo - Bambusa tulda and Bambusa Balcooa, which have
            high potential to store atmospheric carbon. Additionally, the
            versatility of bamboo offers scope for various value-added products,
            further enhancing its economic viability for local communities.
            Hence, project has established a bamboo Agarbatti unit at Daisa
            Village, completely led by an enthusiastic female self help group
            from the community itself.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ClusterDetails;
