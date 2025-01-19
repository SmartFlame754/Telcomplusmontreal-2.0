import React from 'react';
    import MainMenu from '../../components/MainMenu';

    const ITSolutions = () => {
      return (
        <div>
          <MainMenu />
          <div className="container">
            <h1>IT Solutions</h1>
            <div className="service-details">
              <p>Custom IT solutions designed to meet your specific requirements.</p>
              {/* Add more content here */}
            </div>
          </div>
        </div>
      );
    };

    export default ITSolutions;
