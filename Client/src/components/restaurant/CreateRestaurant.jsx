{/* Let's see if I can re-use this component to save some time for the update function */}

function CreateRestaurant({id, header, body, onClose}){
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
                        <p>This has to be a form</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    </>)
}

export default CreateRestaurant