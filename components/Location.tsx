import React from 'react';

const Location = () => {
  return (
    <iframe
    width="100%"
    height="500px"
    id="gmap_canvas"
    src="https://maps.google.com/maps?q=636+5th+Ave%2C+New+York&t=&z=13&ie=UTF8&iwloc=&output=embed"
    frameBorder="0"
    scrolling="no"
    style={{ border: 0 }}
  ></iframe>
  );
};

export default Location;
