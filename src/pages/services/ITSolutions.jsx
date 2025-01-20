import React from 'react';
    import MainMenu from '../../components/MainMenu';
    import './ServiceArticle.css';
    import { Link, useNavigate } from 'react-router-dom';

    const ITSolutions = () => {
      const navigate = useNavigate();
      return (
        <div>
          <MainMenu />
          <div className="container service-article">
            <h1>IT Solutions</h1>
            <div className="article-content">
              <p>
                In today's dynamic business environment, having the right IT solutions is crucial for success. At Telecom Plus Montreal, we specialize in providing customized IT solutions designed to meet the unique needs of your organization. Whether you need to upgrade your existing systems, implement new technologies, or streamline your IT processes, our expert team is here to help you achieve your business goals.
              </p>
              
              <h2>Our IT Solutions Offerings</h2>
              <p>
                We offer a wide range of IT solutions, including:
              </p>
              <ul>
                <li><strong>Custom Software Development:</strong> Tailored software solutions designed to meet your specific business requirements.</li>
                <li><strong>Network Infrastructure Design:</strong> Expert design and implementation of robust and scalable network infrastructures.</li>
                <li><strong>Cloud Computing Solutions:</strong> Secure and scalable cloud solutions to optimize your business operations.</li>
                <li><strong>Data Management and Analytics:</strong> Solutions for managing and analyzing your data to gain valuable insights.</li>
                <li><strong>Cybersecurity Solutions:</strong> Comprehensive security measures to protect your data and systems from cyber threats.</li>
                <li><strong>System Integration:</strong> Seamless integration of various IT systems to improve efficiency and productivity.</li>
                <li><strong>Technology Consulting:</strong> Strategic guidance and planning to help you make informed technology decisions.</li>
              </ul>
              
              <h2>Benefits of Our IT Solutions</h2>
              <p>
                Choosing Telecom Plus Montreal for your IT solutions needs offers numerous advantages:
              </p>
              <ul>
                <li><strong>Tailored Solutions:</strong> We provide customized solutions that meet your specific business needs and requirements.</li>
                <li><strong>Improved Efficiency:</strong> Our solutions are designed to streamline your IT processes and improve overall efficiency.</li>
                <li><strong>Enhanced Productivity:</strong> With reliable and efficient IT systems, your employees can work more productively.</li>
                <li><strong>Scalability:</strong> Our solutions are designed to grow with your business, providing a flexible and scalable IT infrastructure.</li>
                <li><strong>Cost-Effectiveness:</strong> By optimizing your IT systems, we help you reduce operational costs and improve your bottom line.</li>
                <li><strong>Expert Support:</strong> Our certified technicians provide expert support and maintenance for your IT systems.</li>
              </ul>
              
              <h2>Why Choose Telecom Plus Montreal?</h2>
              <p>
                We are committed to providing exceptional service and quality workmanship. Our team of certified technicians has the expertise and experience to handle projects of any size and complexity. We work closely with our clients to understand their specific needs and provide tailored solutions that meet their unique requirements.
              </p>
              
              <h2>Ready to Transform Your IT?</h2>
              <p>
                Contact Telecom Plus Montreal today to discuss your IT solution needs and discover how we can help you leverage technology to achieve your business goals.
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

    export default ITSolutions;
