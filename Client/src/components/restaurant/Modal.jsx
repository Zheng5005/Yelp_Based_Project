import { useState } from "react"

{/* Let's see if I can re-use this component to save some time for the update function */}

function Modal({id, header, body, onClose, nameUp, locationUp, priceRangeUp}){
    const [name, setName] = useState(nameUp ? nameUp : "")
    const [location, setLocation] = useState(locationUp ? locationUp : "")
    const [price_range, setPriceRange] = useState(priceRangeUp ? priceRangeUp : 1)

    async function createResturant(e){
        e.preventDefault()
        try {
            const body = {name, location, price_range};
            const res = await fetch('http://localhost:3000/api/v1/restaurants', {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            })
            window.location.reload();
        } catch (error) {
            console.log(error)
        }
    }

    return(<>
        <div id={id || "Modal"}>
            <div className="modal-content">
                <div className="header">
                    <span onClick={onClose} className="close-modal-icon">&times;</span>
                    <h2>{header ? header : "Create a new Restaurant"}</h2>
                </div>
                <div className="body">
                    {body ? (
                        body
                    ) : (
                        <div>
                            <form onSubmit={createResturant}>
                                <h5>Name:</h5>
                                <input type="text" value={name} onChange={e => setName(e.target.value)}/>

                                <h5>Location:</h5>
                                <input type="text" value={location} onChange={e => setLocation(e.target.value)}/>

                                <h5>Price Range:</h5>
                                <input type="number" min="1" max="5" value={price_range} onChange={e => setPriceRange(parseInt(e.target.value, 10))}/>

                                <button>Create</button>
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </div>
    </>)
}

export default Modal