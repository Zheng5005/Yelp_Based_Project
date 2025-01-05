import { useRef, useState, useEffect } from "react";
import Modal from "./Modal";

function DeleteRestaurant({restaurant}){
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

  async function deleteRestaurant(id) {
    try {
        const deleteRestaurant = await fetch(`http://localhost:3000/api/v1/restaurants/${id}`, {
            method: "DELETE"
        })
        window.location.reload();
    } catch (error) {
        console.log(error)
    }
  }

  const bodyDelete = <>
    <h2>Are you sure?</h2>
    <button onClick={() => deleteRestaurant(restaurant.id)}>Yes</button>
    <button onClick={onClose}>No</button>
</>

    return(<>
        <div>
        <button onClick={handleToggleModalPopup}>-</button>
        <div ref={ref}>
            {showModalPopup && <Modal 
            id={restaurant.id}
            header={"Delete Restaurant"}
            onClose={onClose}
            body={bodyDelete}
            />}
        </div>
        </div>
    </>)
}

export default DeleteRestaurant