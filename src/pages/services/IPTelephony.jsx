import React from 'react';
    import MainMenu from '../../components/MainMenu';
    import './ServiceArticle.css';
    import { Link, useNavigate } from 'react-router-dom';

    const IPTelephony = () => {
      const navigate = useNavigate();
      return (
        <div>
          <MainMenu />
          <div className="container service-article">
            <h1>IP Telephony Services</h1>
            <div className="article-content">
              <p>
                IP Telephony, or Internet Protocol Telephony, is a modern technology that uses the internet to transmit voice data, offering a flexible and cost-effective alternative to traditional phone systems. At Telecom Plus Montreal, we specialize in providing comprehensive IP telephony services designed to meet the diverse needs of modern organizations. Whether you're setting up a new office, upgrading your existing phone system, or integrating voice communication with other business applications, our expert team is here to ensure your IP telephony system operates at peak performance.
              </p>
              
              <h2>Our IP Telephony Solutions</h2>
              <p>
                We offer a wide range of IP telephony services, including:
              </p>
              <ul>
                <li><strong>VoIP System Installation:</strong> Professional installation of Voice over Internet Protocol (VoIP) phone systems.</li>
                <li><strong>IP Phone Configuration:</strong> Configuration of IP phones and other devices to ensure seamless integration with your network.</li>
                <li><strong>Network Integration:</strong> Seamless integration of IP telephony with your existing network infrastructure.</li>
                <li><strong>Unified Communications:</strong> Implementation of unified communication solutions that combine voice, video, and messaging.</li>
                <li><strong>Ongoing Support and Maintenance:</strong> Continuous monitoring and maintenance to ensure your IP telephony system operates reliably.</li>
                <li><strong>Customized Solutions:</strong> Tailored IP telephony solutions to meet your specific business needs and requirements.</li>
              </ul>
              
              <h2>Benefits of Our IP Telephony Services</h2>
              <p>
                Choosing Telecom Plus Montreal for your IP telephony needs offers numerous advantages:
              </p>
              <ul>
                <li><strong>Cost-Effectiveness:</strong> IP telephony leverages your existing network infrastructure, reducing the need for separate phone lines and lowering communication costs.</li>
                <li><strong>Scalability:</strong> Our solutions are designed to grow with your business, providing a flexible and scalable communication infrastructure.</li>
                <li><strong>Advanced Features:</strong> IP telephony supports advanced features such as call forwarding, voicemail to email, video conferencing, and unified messaging.</li>
                <li><strong>Improved Collaboration:</strong> With unified communication solutions, your team can collaborate more effectively.</li>
                <li><strong>Enhanced Mobility:</strong> IP telephony enables employees to access the company’s phone system from anywhere with an internet connection.</li>
                <li><strong>Professional Support:</strong> Our certified technicians provide expert support and maintenance for your IP telephony systems.</li>
              </ul>
              
              <h2>Why Choose Telecom Plus Montreal?</h2>
              <p>
                We are committed to providing exceptional service and quality workmanship. Our team of certified technicians has the expertise and experience to handle projects of any size and complexity. We work closely with our clients to understand their specific needs and provide tailored solutions that meet their unique requirements.
              </p>
              
              <h2>Ready to Upgrade to IP Telephony?</h2>
              <p>
                Contact Telecom Plus Montreal today to discuss your IP telephony needs and discover how we can help you build a robust and efficient communication infrastructure.
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

    export default IPTelephony;
