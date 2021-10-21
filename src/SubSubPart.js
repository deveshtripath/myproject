import React from 'react'
import './App.css';
import './main.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function SubSubPart({name,rupee,color,piece,img}) {
    const style = {
      color: 'gray',
    };
    const style1 = {
        color: '#666565',
      };
      const style3 = {
        position: "absolute",
    left: "7.93%",
    right: "50.68",
    top: "67.25%",
    bottom: "69.82%",
    background: "#464646",
      };
      
    return (
        <div className="col-12 col-md-4 col-lg-4">
                <div className="row">
                    <div className="col extra-mob-align">
                        <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-purple-select-2021?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1617130317000" alt="" width="150"/>
                    </div>
                    <div className="col mt-1 extra-space-div">
                        <div className="app" style={style1}>
                            <h6>Apple iphone 12 <button className="extra-icon"><i className="far fa-edit"></i></button>
                            </h6>
                            <p>$999</p>
                            <p>Red</p>
                            <p>1</p>
                            <p className="row ml-0">
                                <i className="fas fa-toggle-off fa-2x"></i>
                                <button style={style3}  className="extra-icon-trash"><i style={style} className="far fa-trash-alt ml-4"></i></button>
                            </p>

                        </div>
                    </div> 
                </div>
        </div>
    )
}

export default SubSubPart
