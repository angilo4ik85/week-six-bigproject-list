import './App.css';
import GiftForHer from "./GiftsForHer";
import GiftForHim from "./GiftForHim";
import GiftForKids from "./GiftForKids";
import GiftList from './GiftList';

function App() {
  return (<div>
      <div className='heading'>
        <h1>GIFT and WISHES</h1>
      </div>

      <div className='container'>
        <GiftForHer/>
        <GiftForHim/>
        <GiftForKids/>
      </div>

      <div className="accordion"> 
        <div className="tab">
          <input type="checkbox" id="tab1" name="tab-group"/>
          <label htmlFor="tab1" className="tab-title">Open all Gifts </label> 
          <section className="tab-content"> 
            <div>
              <GiftList/>
            </div>
          </section> 
        </div> 
      </div>
    </div>
  );
}

export default App;
