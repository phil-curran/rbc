import React from 'react';
import '../App.css';

class MapComponent extends React.Component {
  render() {
    return (
      <div>
        <iframe id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2686.8331323333673!2d-122.3014276847538!3d47.66823797918875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490147d89cbde09%3A0xb05b7c95104313ec!2sRavenna+Brewing+Co!5e0!3m2!1sen!2sus!4v1560665367945!5m2!1sen!2sus"></iframe>
      </div>
    );
  }
}

export default MapComponent;