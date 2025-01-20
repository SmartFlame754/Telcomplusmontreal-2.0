import React from 'react';
    import MainMenu from '../../components/MainMenu';
    import './ServiceArticle.css';
    import { Link, useNavigate } from 'react-router-dom';

    const ManagedITServices = () => {
      const navigate = useNavigate();
      return (
        <div>
          <MainMenu />
          <div className="container service-article">
            <h1>Managed IT Services</h1>
            <div className="article-content">
              <p>
                In today's complex technological landscape, managing your IT infrastructure can be challenging and time-consuming. At Telecom Plus Montreal, we offer comprehensive managed IT services designed to take the burden off your shoulders, allowing you to focus on your core business. Our proactive approach ensures your systems are always running smoothly, securely, and efficiently.
              </p>
              
              <h2>Our Managed IT Services</h2>
              <p>
                We provide a wide range of managed IT services, including:
              </p>
              <ul>
                <li><strong>24/7 Monitoring:</strong> Continuous monitoring of your IT infrastructure to detect and resolve issues before they impact your business.</li>
                <li><strong>Proactive Maintenance:</strong> Regular maintenance and updates to ensure your systems are always running at peak performance.</li>
                <li><strong>Cybersecurity Solutions:</strong> Robust security measures to protect your data and systems from cyber threats.</li>
                <li><strong>Data Backup and Recovery:</strong> Reliable data backup and recovery solutions to ensure business continuity.</li>
                <li><strong>Network Management:</strong> Comprehensive management of your network infrastructure, including routers, switches, and firewalls.</li>
                <li><strong>Help Desk Support:</strong> Responsive and reliable help desk support to address your day-to-day IT issues.</li>
                <li><strong>Cloud Management:</strong> Management of your cloud infrastructure, ensuring optimal performance and security.</li>
              </ul>
              
              <h2>Benefits of Our Managed IT Services</h2>
              <p>
                Choosing Telecom Plus Montreal for your managed IT services offers numerous advantages:
              </p>
              <ul>
                <li><strong>Reduced Downtime:</strong> Proactive monitoring and maintenance minimize downtime, keeping your business running smoothly.</li>
                <li><strong>Cost Savings:</strong> By preventing issues before they arise, we help you reduce operational costs and avoid costly repairs.</li>
                <li><strong>Enhanced Security:</strong> Our cybersecurity measures protect your data and systems from cyber threats.</li>
                <li><strong>Improved Productivity:</strong> With reliable and efficient IT systems, your employees can work more productively.</li>
                <li><strong>Scalability:</strong> Our solutions are designed to grow with your business, providing a flexible and scalable IT infrastructure.</li>
                <li><strong>Expert Support:</strong> Our certified technicians provide expert support and maintenance for your IT systems.</li>
              </ul>
              
              <h2>Why Choose Telecom Plus Montreal?</h2>
              <p>
                We are committed to providing exceptional service and quality workmanship. Our team of certified technicians has the expertise and experience to handle projects of any size and complexity. We work closely with our clients to understand their specific needs and provide tailored solutions that meet their unique requirements.
              </p>
              
              <h2>Ready to Optimize Your IT Management?</h2>
              <p>
                Contact Telecom Plus Montreal today to discuss your managed IT service needs and discover how we can help you leverage technology to achieve your business goals.
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

    export default ManagedITServices;
