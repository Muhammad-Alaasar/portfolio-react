import "./Services.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import ServicesData from "../../assets/services_data";
import arrowIcon from "../../assets/arrow_icon.svg";

const Services = () => {
  return (
    <div className="services">
      <div className="services-title">
        <h2>My Services</h2>
        <img src={theme_pattern} alt="Services" />
      </div>
      <div className="services-container">
        {ServicesData.map((service, index) => {
          return (
            <div key={index} className="services-format">
              <h3>{service.s_no}</h3>
              <h2>{service.s_name}</h2>
              <p>{service.s_desc}</p>
              <div className="service-readmore">
                <p>Read More</p>
                <img src={arrowIcon} alt="Read More" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
