import React from "react";
import gallery1 from "../../assets/images/gallery1.jpg";
import gallery2 from "../../assets/images/gallery2.jpg";
import gallery3 from "../../assets/images/gallery3.jpg";
import gallery4 from "../../assets/images/gallery4.jpg";
function Gallery() {
  return (
    <div className="flex  justify-around flex-wrap md:flex-nowrap overflow-hidden gap-3">
      <img className="px-4 md:px-0" src={gallery1} alt="Gellery image" />
      <img className="px-4 md:px-0" src={gallery2} alt="Gellery image" />
      <img className="px-4 md:px-0" src={gallery3} alt="Gellery image" />
      <img className="px-4 md:px-0" src={gallery4} alt="Gellery image" />
    </div>
  );
}

export default Gallery;
