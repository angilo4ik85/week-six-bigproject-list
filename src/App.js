import './App.css';
import GiftList from './GiftList';
import Carousel from './Carousel';

function App() {
  return (<div>
      <div className='heading'>
        <h1>GIFT and WISHES</h1>
      </div>

      <div className='container'>
        <Carousel start="0" end="11" who="HER"/>
        <Carousel start="5" end="6" who="HIM"/>
        <Carousel start="10" end="1" who="KIDS"/>
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
