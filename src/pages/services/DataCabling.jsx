import React from 'react';
    import MainMenu from '../../components/MainMenu';
    import './ServiceArticle.css';
    import { Link, useNavigate } from 'react-router-dom';

    const DataCabling = () => {
      const navigate = useNavigate();
      return (
        <div>
          <MainMenu />
          <div className="container service-article">
            <h1>Data Cabling Services</h1>
            <div className="article-content">
              <p>
                In today's digital age, reliable data cabling is essential for seamless communication and efficient operations. At Telecom Plus Montreal, we provide expert data cabling services tailored to meet the specific needs of your business. Our solutions ensure high-speed data transfer, robust connectivity, and a scalable infrastructure to support your growth.
              </p>
              
              <h2>Our Data Cabling Solutions</h2>
              <p>
                We offer a comprehensive range of data cabling services, including:
              </p>
              <ul>
                <li><strong>Cat5e Cabling:</strong> Cost-effective and reliable solutions for standard data transfer needs.</li>
                <li><strong>Cat6 Cabling:</strong> High-performance cabling for faster data speeds and improved bandwidth.</li>
                <li><strong>Cat6a Cabling:</strong> Enhanced Cat6 cabling for demanding network environments, supporting 10 Gigabit Ethernet.</li>
                <li><strong>Cat7 Cabling:</strong> Advanced cabling solutions for the highest network performance and future-proofing your infrastructure.</li>
                <li><strong>Structured Cabling:</strong> Organized and efficient cabling systems that provide a solid foundation for your network.</li>
                <li><strong>Cable Testing and Certification:</strong> Rigorous testing to ensure all cabling meets industry standards and provides optimal performance.</li>
              </ul>
              
              <h2>Benefits of Our Data Cabling Services</h2>
              <p>
                Choosing Telecom Plus Montreal for your data cabling needs offers numerous advantages:
              </p>
              <ul>
                <li><strong>Reliable Connectivity:</strong> Our expert installations ensure a stable and dependable network, minimizing downtime.</li>
                <li><strong>High-Speed Data Transfer:</strong> With advanced cabling options, we provide the speed and bandwidth your business needs to operate efficiently.</li>
                <li><strong>Scalability:</strong> Our solutions are designed to grow with your business, providing a flexible and scalable network infrastructure.</li>
                <li><strong>Improved Performance:</strong> High-quality cabling reduces signal loss and interference, ensuring optimal network performance.</li>
                <li><strong>Cost-Effective Solutions:</strong> We provide cost-effective solutions that meet your specific needs and budget.</li>
                <li><strong>Professional Installation:</strong> Our certified technicians ensure all installations are done correctly and efficiently.</li>
              </ul>
              
              <h2>Why Choose Telecom Plus Montreal?</h2>
              <p>
                We are committed to providing exceptional service and quality workmanship. Our team of certified technicians has the expertise and experience to handle projects of any size and complexity. We work closely with our clients to understand their specific needs and provide tailored solutions that meet their unique requirements.
              </p>
              
              <h2>Ready to Enhance Your Data Network?</h2>
              <p>
                Contact Telecom Plus Montreal today to discuss your data cabling needs and discover how we can help you build a robust and efficient network infrastructure.
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

    export default DataCabling;
