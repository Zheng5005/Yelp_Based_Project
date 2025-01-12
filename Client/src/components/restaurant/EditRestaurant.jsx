import { useRef, useState, useEffect } from "react";
import Modal from "./Modal";

function EditRestaurant({restaurant}){
  const [showModalPopup, setShowModalPopup] = useState(false)  
  const ref = useRef()

  function useOnClickOutsideModal(ref, handler){
    useEffect(() => {
      function listener(e) {
        if (!ref.current || ref.current.contains(e.target)) {
          return;
        }
  
        handler(e);
      }
  
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
  
      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    }, [ref, handler]);
  }
  
  useOnClickOutsideModal(ref, () => setShowModalPopup(false))

  function handleToggleModalPopup() {
    setShowModalPopup(!showModalPopup);
  }

  function onClose(){
    setShowModalPopup(false);
  }

    return(<>
        <div>
        <button onClick={handleToggleModalPopup} style={{
            "background-color": "yellow",
            color: "black",
            padding: "10px 15px",
            border: "none",
            "border-radius": "5px",
            cursor: "pointer",
            "font-size": "14px",
          }}>Update</button>
        <div ref={ref}>
            {showModalPopup && <Modal 
            id={restaurant.id}
            header={"Update a Restaurant"}
            onClose={onClose}
            nameUp={restaurant.name}
            locationUp={restaurant.location}
            priceRangeUp={restaurant.price_range}
            />}
        </div>
        </div>
    </>)
}

export default EditRestaurant