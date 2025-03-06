import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/clusters.css';
import { Link } from 'react-router-dom';

const clusters = [
  {
    name: 'Tea',
    img: 'https://www.webappfactory.co/jeevika/assets/images/service/tea2.webp',
    icon: 'https://www.webappfactory.co/jeevika/assets/images/icon/tea_leaf.svg',
    hoverImg: '/tea-leaf.png',
    description: 'Scientific practices adopted in tea cultivation from soil testing to Post harvest handling covering 100 ha of 250 small tea growers.',
  },
  {
    name: 'Citrus',
    img: '/citrus-img.webp',
    icon: 'https://www.webappfactory.co/jeevika/assets/images/icon/citrus.svg',
    hoverImg: '/citrus.png',
    description: 'Under Citrus we are having Assam lemon covering 10 ha and Khasi mandarin Covering 25 ha of land and Scientific package of practices are being adopted.',
  },
  {
    name: 'Spice',
    img: 'https://static.toiimg.com/photo/107018765.cms',
    icon: 'https://www.webappfactory.co/jeevika/assets/images/icon/spices.svg',
    hoverImg: '/spices.png',
    description: 'High valued spice crop like Black pepper, Ginger, Turmeric, Naga king Chilli are being cultivated using Scientific practices to improve quality and quantity.',
  },
  {
    name: 'Bamboo',
    img: 'https://www.webappfactory.co/jeevika/assets/images/gallery/glry_img11.webp',
    icon: 'https://www.webappfactory.co/jeevika/assets/images/icon/bamboo.svg',
    hoverImg: '/bamboo.png',
    description: 'Introduced Bambusa tulda and Bambusa Balcooa in 30 ha of land as its absorbed 35% more green house gases and can store harmful Co2 in its root system.',
  },
];

const Clusters = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className='container mt-5'>
      <div className="text-center">
        <h1 className="position-relative d-inline-block display-1">
          <img src="/tea-leaf.png" alt="Tea Leaf" className="position-absolute float-image" style={{ width: '62px', height: '52px', top: '-10px', left: '-40px' }} />
          <span className='clusters-heading'>Clusters</span>
          <img src="/spices-img.png" alt="Spices" className="position-absolute float-image" style={{ width: '82px', height: '82px', top: '-40px', right: '-40px' }} />
          <img src="/citrus.png" alt="Citrus" className="position-absolute float-image" style={{ width: '82px', height: '82px', top: '60px', left: '-40px' }} />
          <img src="/bamboo.png" alt="Bamboo" className="position-absolute float-image" style={{ width: '82px', height: '82px', top: '60px', right: '-30px' }} />
        </h1>
      </div>
      <br /><br />
      <div className="clusters-grid mt-8">
        {clusters.map((cluster, index) => (
          <Link to={`/cluster/${cluster.name.toLowerCase()}`} key={index} className="cluster-card" style={{ '--hover-img': `url(${cluster.hoverImg})` }} data-aos="fade-up">
            <img src={cluster.img} alt={cluster.name} className="cluster-image" />
            <div className="cluster-content">
              <div className="d-flex justify-content-center align-items-center mb-1">
                <h2 className="cluster-name mb-0">{cluster.name}</h2>
                <img src={cluster.icon} alt={cluster.name} className="cluster-image ms-2" />
              </div>
              <p className="cluster-description">{cluster.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Clusters;
