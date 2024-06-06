import './main.css';

function Main() {
  return (
    <div className="main">

      <div className="calculator">
        <div className="form">
          <div className="display">
            <input type="text" />
          </div>
          <div>
            <input type="button" value="C" />
            <input type="button" value="Pi" />
            <input type="button" value="Del" />
            <input type="button" value="/" />
          </div>
          <div>
            <input type="button" value={7} />
            <input type="button" value={8} />
            <input type="button" value={9} />
            <input type="button" value="x" />
          </div>
          <div>
            <input type="button" value={4} />
            <input type="button" value={5} />
            <input type="button" value={6} />
            <input type="button" value="-" />
          </div>
          <div>
            <input type="button" value={1} />
            <input type="button" value={2} />
            <input type="button" value={3} />
            <input type="button" value="+" />
          </div>
          <div className='bottom-div'>
            <input type="button" value={0} />
            <input type="button" value={'.'} />
            <input type="button" value="=" />
          </div>
        </div>
      </div >

    </div>
  );
}

export default Main;
