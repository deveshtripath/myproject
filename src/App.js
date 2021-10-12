import './App.css';
import './main.css';
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
                <p id="val">Value $3996</p>
            </div>
        </div>
        <SubPart/>
        <SubPart/>
        <SubPart/>
        <p style={style}> <button class="extra-butt-color"><i class="fas fa-plus-circle fa-4x"></i></button></p>
        <span></span><i class="fas fa-solid fa-circle-plus fa-3x"></i>
       
        </div>
  );
}

export default App;
