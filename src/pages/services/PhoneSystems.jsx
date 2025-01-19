import React from 'react';
    import MainMenu from '../../components/MainMenu';

    const PhoneSystems = () => {
      return (
        <div>
          <MainMenu />
          <div className="container">
            <h1>Phone Systems</h1>
            <div className="service-details">
              <p>Advanced phone systems tailored to your business needs.</p>
              {/* Add more content here */}
            </div>
          </div>
        </div>
      );
    };

    export default PhoneSystems;
