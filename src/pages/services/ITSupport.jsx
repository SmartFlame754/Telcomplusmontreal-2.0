import React from 'react';
    import MainMenu from '../../components/MainMenu';
    import './ServiceArticle.css';
    import { Link, useNavigate } from 'react-router-dom';

    const ITSupport = () => {
      const navigate = useNavigate();
      return (
        <div>
          <MainMenu />
          <div className="container service-article">
            <h1>IT Support Services</h1>
            <div className="article-content">
              <p>
                In today's fast-paced business environment, reliable IT support is essential for maintaining productivity and ensuring smooth operations. At Telecom Plus Montreal, we specialize in providing comprehensive IT support services designed to meet the diverse needs of modern organizations. Whether you need help with troubleshooting, system maintenance, or ongoing technical assistance, our expert team is here to provide prompt and effective solutions.
              </p>
              
              <h2>Our IT Support Services</h2>
              <p>
                We offer a wide range of IT support services, including:
              </p>
              <ul>
                <li><strong>Help Desk Support:</strong> Responsive and reliable help desk support to address your day-to-day IT issues.</li>
                <li><strong>On-Site Support:</strong> On-site technical support for hands-on assistance and troubleshooting.</li>
                <li><strong>Remote Support:</strong> Remote support services for quick and efficient resolution of IT problems.</li>
                <li><strong>System Maintenance:</strong> Regular maintenance and updates to ensure your systems are always running at peak performance.</li>
                <li><strong>Network Troubleshooting:</strong> Expert troubleshooting for network issues, ensuring reliable connectivity.</li>
                <li><strong>Hardware and Software Support:</strong> Support for a wide range of hardware and software, ensuring compatibility and optimal performance.</li>
                <li><strong>Emergency Support:</strong> 24/7 emergency support for critical IT issues that require immediate attention.</li>
              </ul>
              
              <h2>Benefits of Our IT Support Services</h2>
              <p>
                Choosing Telecom Plus Montreal for your IT support needs offers numerous advantages:
              </p>
              <ul>
                <li><strong>Reduced Downtime:</strong> Our prompt and efficient support minimizes downtime, keeping your business running smoothly.</li>
                <li><strong>Improved Productivity:</strong> With reliable IT support, your employees can work more productively without disruptions.</li>
                <li><strong>Cost-Effectiveness:</strong> By resolving IT issues quickly and efficiently, we help you reduce operational costs.</li>
                <li><strong>Expert Assistance:</strong> Our certified technicians have the expertise and experience to handle a wide range of IT issues.</li>
                <li><strong>Peace of Mind:</strong> With our reliable support services, you can have peace of mind knowing your IT systems are in good hands.</li>
                <li><strong>Customized Solutions:</strong> We provide tailored support solutions that meet your specific business needs and requirements.</li>
              </ul>
              
              <h2>Why Choose Telecom Plus Montreal?</h2>
              <p>
                We are committed to providing exceptional service and quality workmanship. Our team of certified technicians has the expertise and experience to handle projects of any size and complexity. We work closely with our clients to understand their specific needs and provide tailored solutions that meet their unique requirements.
              </p>
              
              <h2>Ready to Enhance Your IT Support?</h2>
              <p>
                Contact Telecom Plus Montreal today to discuss your IT support needs and discover how we can help you maintain a reliable and efficient IT infrastructure.
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

    export default ITSupport;
