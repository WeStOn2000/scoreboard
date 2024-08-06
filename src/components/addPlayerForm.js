import React from "react";

const addPlayerForm = () => {
    return(
     <form>
       <input
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

export default addPlayerForm;