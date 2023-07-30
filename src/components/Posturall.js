function Posturall(props) {
    function failedHandler(){
          props.onFailed();  
    }
    function doneHandler(){
          props.onDone();  
    }
  return (
    <div className="modal">
      <h3>sleeping</h3>
            <p>I sleep at 11 at night and wake up at 10 tomorrow morning</p>
      <button className="btn btn--alt" onClick={failedHandler} >failed</button>
      <button className="btn" onClick={doneHandler} >done</button>
    </div>
  );
}
export default Posturall;
