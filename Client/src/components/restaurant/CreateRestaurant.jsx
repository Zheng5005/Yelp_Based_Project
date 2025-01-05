import { useRef, useState, useEffect } from "react";
import Modal from "./Modal";

function CreateRestaurant(){
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
        <button onClick={handleToggleModalPopup}>+</button>
        <div ref={ref}>
            {showModalPopup && <Modal 
            id={"custom-id"}
            onClose={onClose}
            />}
        </div>
        </div>
    </>)
}

export default CreateRestaurant