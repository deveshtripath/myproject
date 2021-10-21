import './App.css';
import './main.css';

// https://myproduct-f4f4d.web.app

import SubPart from './SubPart';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const style = {
      textAlign: 'right',
      color:"#2ECC71",
    };
    
  return (
    <div className="container">
        <div className="row">
            <div className="col-4 ">
                <h4>My Products <span style={style}>9</span></h4>
            </div>
            <div className="col-4">
                <p id="val">Value  $3996</p>
            </div>
        </div>
        <SubPart/>
        <SubPart/>
        <SubPart/>


        <p style={style} className="mt-1" > <button className="extra-butt-color"><i className="fas fa-plus-circle fa-4x"></i></button></p>
        <span></span><i class="fas fa-solid fa-circle-plus fa-3x"></i>
       
        </div> 
  );
}

export default App;
