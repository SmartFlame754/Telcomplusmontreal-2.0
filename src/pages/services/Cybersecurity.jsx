import React from 'react';
    import MainMenu from '../../components/MainMenu';
    import './ServiceArticle.css';
    import { Link, useNavigate } from 'react-router-dom';

    const Cybersecurity = () => {
      const navigate = useNavigate();
      return (
        <div>
          <MainMenu />
          <div className="container service-article">
            <h1>Cybersecurity Services</h1>
            <div className="article-content">
              <p>
                In today's digital landscape, cybersecurity is a critical concern for businesses of all sizes. At Telecom Plus Montreal, we specialize in providing comprehensive cybersecurity services designed to protect your data, systems, and reputation from cyber threats. Whether you need to assess your current security posture, implement new security measures, or respond to a security incident, our expert team is here to help you stay secure and resilient.
              </p>
              
              <h2>Our Cybersecurity Solutions</h2>
              <p>
                We offer a wide range of cybersecurity services, including:
              </p>
              <ul>
                <li><strong>Risk Assessments:</strong> Thorough assessments of your current security posture to identify vulnerabilities and potential threats.</li>
                <li><strong>Security Audits:</strong> Comprehensive security audits to ensure your systems and processes meet industry standards.</li>
                <li><strong>Firewall Management:</strong> Implementation and management of firewalls to protect your network from unauthorized access.</li>
                <li><strong>Intrusion Detection and Prevention:</strong> Advanced intrusion detection and prevention systems to identify and block malicious activity.</li>
                <li><strong>Data Encryption:</strong> Implementation of data encryption solutions to protect sensitive information.</li>
                <li><strong>Security Awareness Training:</strong> Training programs to educate your employees about cybersecurity best practices.</li>
                <li><strong>Incident Response:</strong> Expert incident response services to help you recover quickly from security breaches.</li>
              </ul>
              
              <h2>Benefits of Our Cybersecurity Services</h2>
              <p>
                Choosing Telecom Plus Montreal for your cybersecurity needs offers numerous advantages:
              </p>
              <ul>
                <li><strong>Enhanced Protection:</strong> Our robust security measures protect your data and systems from cyber threats.</li>
                <li><strong>Reduced Risk:</strong> By identifying and addressing vulnerabilities, we help you minimize the risk of security breaches.</li>
                <li><strong>Compliance:</strong> Our solutions help you meet industry standards and regulatory requirements for data security.</li>
                <li><strong>Business Continuity:</strong> With reliable security measures in place, you can ensure business continuity even during security incidents.</li>
                <li><strong>Peace of Mind:</strong> With our comprehensive security services, you can have peace of mind knowing your business is protected.</li>
                <li><strong>Expert Support:</strong> Our certified security experts provide ongoing support and maintenance for your security systems.</li>
              </ul>
              
              <h2>Why Choose Telecom Plus Montreal?</h2>
              <p>
                We are committed to providing exceptional service and quality workmanship. Our team of certified technicians has the expertise and experience to handle projects of any size and complexity. We work closely with our clients to understand their specific needs and provide tailored solutions that meet their unique requirements.
              </p>
              
              <h2>Ready to Enhance Your Cybersecurity?</h2>
              <p>
                Contact Telecom Plus Montreal today to discuss your cybersecurity needs and discover how we can help you protect your business from cyber threats.
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

    export default Cybersecurity;
