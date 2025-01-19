import React from 'react';
    import MainMenu from '../../components/MainMenu';

    const ITServices = () => {
      return (
        <div>
          <MainMenu />
          <div className="container">
            <h1>IT Services</h1>
            <div className="service-details">
              <p>Comprehensive IT services to support your business needs.</p>
              {/* Add more content here */}
            </div>
          </div>
        </div>
      );
    };

    export default ITServices;
