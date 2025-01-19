import React from 'react';
    import { Link } from 'react-router-dom';
    import MainMenu from '../components/MainMenu';
    import { 
      FaNetworkWired, 
      FaTools, 
      FaWifi, 
      FaProjectDiagram, 
      FaShieldAlt, 
      FaPlug,
      FaServer,
      FaHeadset,
      FaVideo,
      FaBroadcastTower,
      FaCogs,
      FaCloud,
      FaPhone,
      FaMicrophone,
      FaTv,
      FaWifi as FaWifiIcon,
      FaCamera,
      FaLock
    } from 'react-icons/fa';

    const Services = () => {
      const services = [
        {
          name: "Network Cabling",
          path: "/services/network-cabling",
          icon: <FaNetworkWired className="service-icon" />
        },
        {
          name: "Data Cabling",
          path: "/services/data-cabling",
          icon: <FaNetworkWired className="service-icon" />
        },
        {
          name: "Cat5e Cabling",
          path: "/services/cat5e-cabling",
          icon: <FaNetworkWired className="service-icon" />
        },
        {
          name: "Cat6 Cabling",
          path: "/services/cat6-cabling",
          icon: <FaNetworkWired className="service-icon" />
        },
        {
          name: "Cat6a Cabling",
          path: "/services/cat6a-cabling",
          icon: <FaNetworkWired className="service-icon" />
        },
        {
          name: "Cat7 Cabling",
          path: "/services/cat7-cabling",
          icon: <FaNetworkWired className="service-icon" />
        },
        {
          name: "Fiber Optic Cabling",
          path: "/services/fiber-optic-cabling",
          icon: <FaProjectDiagram className="service-icon" />
        },
        {
          name: "Fiber Optic Installation",
          path: "/services/fiber-optic-installation",
          icon: <FaProjectDiagram className="service-icon" />
        },
        {
          name: "Fiber Optic Termination",
          path: "/services/fiber-optic-termination",
          icon: <FaProjectDiagram className="service-icon" />
        },
        {
          name: "Fusion Splicing",
          path: "/services/fusion-splicing",
          icon: <FaProjectDiagram className="service-icon" />
        },
        {
          name: "OTDR Testing",
          path: "/services/otdr-testing",
          icon: <FaTools className="service-icon" />
        },
        {
          name: "Voice Cabling",
          path: "/services/voice-cabling",
          icon: <FaHeadset className="service-icon" />
        },
        {
          name: "VoIP Cabling",
          path: "/services/voip-cabling",
          icon: <FaHeadset className="service-icon" />
        },
        {
          name: "Phone Cabling",
          path: "/services/phone-cabling",
          icon: <FaPhone className="service-icon" />
        },
        {
          name: "Structured Cabling",
          path: "/services/structured-cabling",
          icon: <FaCogs className="service-icon" />
        },
        {
          name: "Patch Panel Installation",
          path: "/services/patch-panel-installation",
          icon: <FaCogs className="service-icon" />
        },
        {
          name: "Cable Management",
          path: "/services/cable-management",
          icon: <FaPlug className="service-icon" />
        },
        {
          name: "Low Voltage Cabling",
          path: "/services/low-voltage-cabling",
          icon: <FaPlug className="service-icon" />
        },
        {
          name: "Cable Removal",
          path: "/services/cable-removal",
          icon: <FaPlug className="service-icon" />
        },
        {
          name: "Network Cable Testing",
          path: "/services/network-cable-testing",
          icon: <FaTools className="service-icon" />
        },
        {
          name: "Server Room Data Cabling",
          path: "/services/server-room-data-cabling",
          icon: <FaServer className="service-icon" />
        },
        {
          name: "IT Services",
          path: "/services/it-services",
          icon: <FaCogs className="service-icon" />
        },
        {
          name: "IT Support",
          path: "/services/it-support",
          icon: <FaTools className="service-icon" />
        },
        {
          name: "IT Consulting",
          path: "/services/it-consulting",
          icon: <FaCogs className="service-icon" />
        },
        {
          name: "Managed IT Services",
          path: "/services/managed-it-services",
          icon: <FaCogs className="service-icon" />
        },
        {
          name: "IT Solutions",
          path: "/services/it-solutions",
          icon: <FaCogs className="service-icon" />
        },
        {
          name: "Cybersecurity",
          path: "/services/cybersecurity",
          icon: <FaShieldAlt className="service-icon" />
        },
        {
          name: "Microsoft Office 365 Migration",
          path: "/services/microsoft-office-365-migration",
          icon: <FaCloud className="service-icon" />
        },
        {
          name: "Cloud Services",
          path: "/services/cloud-services",
          icon: <FaCloud className="service-icon" />
        },
        {
          name: "Telecommunications Services",
          path: "/services/telecommunications-services",
          icon: <FaBroadcastTower className="service-icon" />
        },
        {
          name: "Phone Systems",
          path: "/services/phone-systems",
          icon: <FaPhone className="service-icon" />
        },
        {
          name: "Business Phone Service",
          path: "/services/business-phone-service",
          icon: <FaPhone className="service-icon" />
        },
        {
          name: "Unified Communication Solutions",
          path: "/services/unified-communication-solutions",
          icon: <FaHeadset className="service-icon" />
        },
         {
          name: "IP Telephony",
          path: "/services/ip-telephony",
          icon: <FaPhone className="service-icon" />
        },
        {
          name: "Audio/Video Cabling",
          path: "/services/audio-video-cabling",
          icon: <FaVideo className="service-icon" />
        },
        {
          name: "Audio/Video Installations",
          path: "/services/audio-video-installations",
          icon: <FaVideo className="service-icon" />
        },
        {
          name: "HDMI Cabling",
          path: "/services/hdmi-cabling",
          icon: <FaVideo className="service-icon" />
        },
        {
          name: "RG6 Cabling",
          path: "/services/rg6-cabling",
          icon: <FaVideo className="service-icon" />
        },
        {
          name: "Digital Signage Systems",
          path: "/services/digital-signage-systems",
          icon: <FaTv className="service-icon" />
        },
        {
          name: "Speaker System Installation",
          path: "/services/speaker-system-installation",
          icon: <FaMicrophone className="service-icon" />
        },
        {
          name: "Intercom System Installation",
          path: "/services/intercom-system-installation",
          icon: <FaHeadset className="service-icon" />
        },
        {
          name: "Wireless Networking",
          path: "/services/wireless-networking",
          icon: <FaWifiIcon className="service-icon" />
        },
        {
          name: "Commercial Wi-Fi Networks",
          path: "/services/commercial-wi-fi-networks",
          icon: <FaWifiIcon className="service-icon" />
        },
         {
          name: "Wi-Fi Surveys",
          path: "/services/wi-fi-surveys",
          icon: <FaWifiIcon className="service-icon" />
        },
        {
          name: "Security",
          path: "/services/security",
          icon: <FaShieldAlt className="service-icon" />
        },
        {
          name: "Security Camera Installation",
          path: "/services/security-camera-installation",
          icon: <FaCamera className="service-icon" />
        },
        {
          name: "CCTV Installation",
          path: "/services/cctv-installation",
          icon: <FaCamera className="service-icon" />
        },
        {
          name: "Access Control Systems",
          path: "/services/access-control-systems",
          icon: <FaLock className="service-icon" />
        },
        {
          name: "Security System Installation",
          path: "/services/security-system-installation",
          icon: <FaShieldAlt className="service-icon" />
        }
      ];

      return (
        <div>
          <MainMenu />
          <div className="container">
            <h1>Our Services</h1>
            <div className="services-grid">
              {services.map((service, index) => (
                <div className="service-card" key={index}>
                  <div className="service-icon-container">
                    {service.icon}
                  </div>
                  <h3>{service.name}</h3>
                  <Link to={service.path} className="btn-primary">Learn More</Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    };

    export default Services;
