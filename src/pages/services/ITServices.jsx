import React from 'react';
    import MainMenu from '../../components/MainMenu';
    import './ServiceArticle.css';
    import { Link, useNavigate } from 'react-router-dom';

    const ITServices = () => {
      const navigate = useNavigate();
      return (
        <div>
          <MainMenu />
          <div className="container service-article">
            <h1>IT Services</h1>
            <div className="article-content">
              <p>
                In today's technology-driven world, reliable IT services are essential for businesses of all sizes. At Telecom Plus Montreal, we offer a comprehensive suite of IT services designed to keep your technology infrastructure running smoothly and efficiently. Whether you need ongoing support, strategic consulting, or advanced solutions, our expert team is here to help you leverage technology to achieve your business goals.
              </p>
              
              <h2>Our IT Service Offerings</h2>
              <p>
                We provide a wide range of IT services, including:
              </p>
              <ul>
                <li><strong>IT Support:</strong> Responsive and reliable technical support to address your day-to-day IT issues.</li>
                <li><strong>IT Consulting:</strong> Strategic guidance and planning to help you make informed technology decisions.</li>
                <li><strong>Managed IT Services:</strong> Proactive monitoring and maintenance of your IT infrastructure to prevent issues before they arise.</li>
                <li><strong>IT Solutions:</strong> Customized solutions tailored to meet your specific business needs and requirements.</li>
                <li><strong>Cybersecurity:</strong> Robust security measures to protect your data and systems from cyber threats.</li>
                <li><strong>Microsoft Office 365 Migration:</strong> Seamless migration to Microsoft Office 365 for enhanced productivity and collaboration.</li>
                <li><strong>Cloud Services:</strong> Scalable and secure cloud solutions to optimize your business operations.</li>
              </ul>
              
              <h2>Benefits of Our IT Services</h2>
              <p>
                Choosing Telecom Plus Montreal for your IT service needs offers numerous advantages:
              </p>
              <ul>
                <li><strong>Reliable Support:</strong> Our responsive support team is available to address your IT issues promptly and efficiently.</li>
                <li><strong>Strategic Guidance:</strong> Our expert consultants provide strategic guidance to help you make informed technology decisions.</li>
                <li><strong>Proactive Maintenance:</strong> Our managed IT services help prevent issues before they arise, minimizing downtime.</li>
                <li><strong>Customized Solutions:</strong> We provide tailored solutions that meet your specific business needs and requirements.</li>
                <li><strong>Enhanced Security:</strong> Our cybersecurity measures protect your data and systems from cyber threats.</li>
                <li><strong>Improved Productivity:</strong> With reliable and efficient IT systems, your employees can work more productively.</li>
              </ul>
              
              <h2>Why Choose Telecom Plus Montreal?</h2>
              <p>
                We are committed to providing exceptional service and quality workmanship. Our team of certified technicians has the expertise and experience to handle projects of any size and complexity. We work closely with our clients to understand their specific needs and provide tailored solutions that meet their unique requirements.
              </p>
              
              <h2>Ready to Optimize Your IT Management?</h2>
              <p>
                Contact Telecom Plus Montreal today to discuss your IT service needs and discover how we can help you leverage technology to achieve your business goals.
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

    export default ITServices;
