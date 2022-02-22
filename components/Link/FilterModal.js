import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import FilterModalOverLay from "./FilterModalOverLay";

const FilterModal = (props)=> {
    const [isBrowser, setIsBrowser] = useState(false);

    useEffect(() => {
      setIsBrowser(true);
    }, []);

    if (isBrowser) {
        return ReactDOM.createPortal(
            <div className=""></div>, 
            document.getElementById("modal-root")
        );
      } else {
        return null;
      }    
  
}

export default FilterModal;