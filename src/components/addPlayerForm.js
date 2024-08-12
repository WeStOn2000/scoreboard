import React,{ useRef} from "react";

const AddPlayerForm = ({addPlayer}) => {
    const playerInput  = useRef();

    const handleSubmit=(event) => {
        event.preventDefault();
        addPlayer(playerInput.current.value);
        event.currentTarget.reset();
        
    }
    return(
     <form onSubmit= {(event) => handleSubmit(event)}>
       <input
        ref={playerInput}
        type="text"
      placeholder="enter a player's name "
       />
       <input
       type="submit"
       value="add player"
        />
         </form>
    );
}

export default AddPlayerForm;