// import React from 'react'
// import './App.css';
// import './main.css';
// import SubSubPart from './SubSubPart';

// function SubPart() { 
//     const style = {
//       color: 'grey',
//     };
//     return (
//         <div className="">
//         <div class="row mt-1">
//             <SubSubPart
//             img="https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iOS/ios14-iphone11-pro-settings-wallpaper.jpg"
//                 name="Apple 7"
//                 rupee="40,000"
//                 color="Blue"
//                 piece="3"
//             />
//             <SubSubPart
//             img="https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGhvbmUlMjBvbiUyMGRlc2t8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
//                 name="Apple 11"
//                 rupee="80,000"
//                 color="Green"
//                 piece="5"
//             />
//             <SubSubPart
//             img="https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iOS/ios14-iphone11-pro-settings-wallpaper-choose-preview.jpg"
//                 name="Apple 11 Pro"
//                 rupee="1,00,000"
//                 color="Red"
//                 piece="1"
//             />
            
//         </div>
//     </div>
//     )
// }

// export default SubPart




import React from 'react'
import './App.css';
import './main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SubSubPart from './SubSubPart';

function SubPart() {
    const style = {
              color: 'grey',
            };
    return (
        <>
        <div className="row mt-1">
            <SubSubPart/>
            <SubSubPart/>
            <SubSubPart/> 
        </div>
        
        </>
    )
}

export default SubPart

