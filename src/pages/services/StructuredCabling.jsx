import React from 'react';
    import MainMenu from '../../components/MainMenu';
    import './ServiceArticle.css';
    import { Link, useNavigate } from 'react-router-dom';

    const StructuredCabling = () => {
      const navigate = useNavigate();
      return (
        <div>
          <MainMenu />
          <div className="container service-article">
            <h1>Structured Cabling Services</h1>
            <div className="article-content">
              <p>
                A well-designed structured cabling system is the foundation of a reliable and efficient network. At Telecom Plus Montreal, we specialize in providing comprehensive structured cabling services that ensure your network is organized, scalable, and easy to manage. Whether you're setting up a new office, expanding your current network, or upgrading your existing infrastructure, our expert team is here to design and install a structured cabling system that meets your specific needs.
              </p>
              
              <h2>Our Structured Cabling Solutions</h2>
              <p>
                We offer a wide range of structured cabling services, including:
              </p>
              <ul>
                <li><strong>Design and Planning:</strong> We work with you to design a structured cabling system that meets your current and future needs.</li>
                <li><strong>Installation:</strong> Professional installation of all cabling components, including horizontal cabling, backbone cabling, and telecommunications rooms.</li>
                <li><strong>Termination and Testing:</strong> Precise termination and rigorous testing to ensure all connections are reliable and perform optimally.</li>
                <li><strong>Cable Management:</strong> Comprehensive cable management solutions to keep your network organized and easy to maintain.</li>
                <li><strong>Documentation:</strong> Detailed documentation of your structured cabling system for easy reference and future upgrades.</li>
                <li><strong>Upgrades and Maintenance:</strong> Ongoing support and maintenance to ensure your structured cabling system continues to perform at its best.</li>
              </ul>
              
              <h2>Benefits of Structured Cabling</h2>
              <p>
                Choosing Telecom Plus Montreal for your structured cabling needs offers numerous advantages:
              </p>
              <ul>
                <li><strong>Improved Organization:</strong> A structured cabling system keeps your network organized, making it easier to troubleshoot and maintain.</li>
                <li><strong>Scalability:</strong> Our solutions are designed to grow with your business, providing a flexible and scalable network infrastructure.</li>
                <li><strong>Enhanced Reliability:</strong> With a well-designed structured cabling system, you can minimize downtime and maximize productivity.</li>
                <li><strong>Cost-Effectiveness:</strong> By ensuring a reliable and efficient network, we help you reduce operational costs.</li>
                <li><strong>Future-Proofing:</strong> Our structured cabling solutions are designed to support future technologies and bandwidth requirements.</li>
                <li><strong>Simplified Management:</strong> A well-documented structured cabling system makes it easier to manage and upgrade your network.</li>
              </ul>
              
              <h2>Why Choose Telecom Plus Montreal?</h2>
              <p>
                We are committed to providing exceptional service and quality workmanship. Our team of certified technicians has the expertise and experience to handle projects of any size and complexity. We work closely with our clients to understand their specific needs and provide tailored solutions that meet their unique requirements.
              </p>
              
              <h2>Ready to Optimize Your Network?</h2>
              <p>
                Contact Telecom Plus Montreal today to discuss your structured cabling needs and discover how we can help you build a robust and efficient network infrastructure.
              </p>
              
              <div className="cta-section">
                <button className="btn-primary" onClick={() => navigate('/contact')}>
                  Get a Free Quote
                </button>
              </div>
              <div className="service-locations">
                <h2>Serving These Locations</h2>
                <ul>
                  <li><span>&#9675;</span> Montreal</li>
                  <li><span>&#9675;</span> Laval</li>
                  <li><span>&#9675;</span> West Island</li>
                  <li><span>&#9675;</span> South Shore</li>
                  <li><span>&#9675;</span> LaSalle</li>
                  <li><span>&#9675;</span> DDO | Dollard-Des Ormeaux</li>
                  <li><span>&#9675;</span> Blainville</li>
                  <li><span>&#9675;</span> Longueuil</li>
                  <li><span>&#9675;</span> Boucherville</li>
                  <li><span>&#9675;</span> Saint-Eustache | St-Eustache</li>
                  <li><span>&#9675;</span> Saint-Jerome | St-Jerome</li>
                  <li><span>&#9675;</span> Deux-Montagnes</li>
                  <li><span>&#9675;</span> Saint-Therese | St-Therese</li>
                  <li><span>&#9675;</span> NDG | Notre-Dame-de-Grace</li>
                  <li><span>&#9675;</span> Westmount</li>
                  <li><span>&#9675;</span> Monkland Village</li>
                  <li><span>&#9675;</span> Hampstead</li>
                  <li><span>&#9675;</span> Dorval</li>
                  <li><span>&#9675;</span> Griffintown</li>
                  <li><span>&#9675;</span> Saint-Henri | St-Henri</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
    };

    export default StructuredCabling;
