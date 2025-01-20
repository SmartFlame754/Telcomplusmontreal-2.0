import React from 'react';
    import MainMenu from '../../components/MainMenu';
    import './ServiceArticle.css';

    const Security = () => {
      return (
        <div>
          <MainMenu />
          <div className="container service-article">
            <h1>Security Services</h1>
            <div className="article-content">
              <p>
                In today's world, security is paramount for businesses of all sizes. At Telecom Plus Montreal, we specialize in providing comprehensive security solutions designed to protect your premises, assets, and personnel. Whether you need advanced security camera systems, robust access control, or reliable security system installations, our expert team is here to ensure your business is safe and secure.
              </p>
              
              <h2>Our Security Solutions</h2>
              <p>
                We offer a wide range of security services, including:
              </p>
              <ul>
                <li><strong>Security Camera Installation:</strong> Professional installation of high-definition security cameras for comprehensive surveillance.</li>
                <li><strong>CCTV Installation:</strong> Closed-circuit television systems for monitoring and recording activities on your premises.</li>
                <li><strong>Access Control Systems:</strong> Advanced access control solutions to manage and restrict entry to your facilities.</li>
                <li><strong>Security System Installation:</strong> Complete installation of security systems, including alarms, sensors, and monitoring equipment.</li>
                <li><strong>System Integration:</strong> Seamless integration of security systems with your existing infrastructure.</li>
                <li><strong>Ongoing Support and Maintenance:</strong> Continuous monitoring and maintenance to ensure your security systems operate reliably.</li>
              </ul>
              
              <h2>Benefits of Our Security Services</h2>
              <p>
                Choosing Telecom Plus Montreal for your security needs offers numerous advantages:
              </p>
              <ul>
                <li><strong>Enhanced Protection:</strong> Our expert installations provide a robust security system to protect your business from threats.</li>
                <li><strong>Improved Monitoring:</strong> With high-quality security cameras and CCTV systems, you can monitor your premises effectively.</li>
                <li><strong>Controlled Access:</strong> Our access control systems help you manage and restrict entry to your facilities.</li>
                <li><strong>Reduced Risk:</strong> By implementing comprehensive security measures, you can minimize the risk of theft, vandalism, and other security incidents.</li>
                <li><strong>Peace of Mind:</strong> With reliable security systems in place, you can have peace of mind knowing your business is protected.</li>
                <li><strong>Professional Support:</strong> Our certified technicians provide expert support and maintenance for your security systems.</li>
              </ul>
              
              <h2>Why Choose Telecom Plus Montreal?</h2>
              <p>
                We are committed to providing exceptional service and quality workmanship. Our team of certified technicians has the expertise and experience to handle projects of any size and complexity. We work closely with our clients to understand their specific needs and provide tailored solutions that meet their unique requirements.
              </p>
              
              <h2>Ready to Enhance Your Security?</h2>
              <p>
                Contact Telecom Plus Montreal today to discuss your security needs and discover how we can help you build a robust and efficient security infrastructure.
              </p>
              
              <div className="cta-section">
                <button className="btn-primary" onClick={() => navigate('/contact')}>
                  Get a Free Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    };

    export default Security;
