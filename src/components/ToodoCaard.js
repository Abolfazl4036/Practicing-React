import { useState } from "react";
import Posturall from "./Posturall";
import BackGround from "./BackGround";
import Log from "./Log";

function ToodoCaard(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  function moreDetailesHandler() {
    setIsModalOpen(true);
  }
  function failedHandler() {
    setIsModalOpen(false);
  }
  return (
    <div className="card">
      <h2>{props.title}</h2>
   
      <div className="actions">
        <button className="btn" onClick={moreDetailesHandler}>
          More Details
        </button>
       
      </div>
      <Log />
      {isModalOpen && (
        <Posturall onFailed={failedHandler} onDone={failedHandler} />
      )}
      {isModalOpen && <BackGround onCloose={failedHandler}   />}
    </div>
  );
}
export default ToodoCaard;
