import React from 'react'
import './App.css';
import './main.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function SubSubPart({name,rupee,color,piece,img}) {
    const style = {
      color: 'grey',
      // fontSize: 200
    };
    return (
        <div class="col-12 col-md-4 col-lg-4">
                <div class="row">
                    <div class="col extra-mob-align">
                        <img src={img} alt="" width="150"/>
                    </div>
                    <div class="col mt-1 extra-space-div">
                        <div class="app">
                            <h6>{name} <button class="extra-icon"><i class="far fa-edit"></i></button>
                            </h6>
                            <p>{rupee}</p>
                            <p>{color}</p>
                            <p>{piece}</p>
                            <p class="row ml-0">
                                <i class="fas fa-toggle-off fa-2x"></i>
                                <button class="extra-icon-trash"><i style={style} class="far fa-trash-alt"></i></button>

                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
    )
}

export default SubSubPart
