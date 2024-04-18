import React from "react";
import ReactDOM from "react-dom/client";
import Person from "./Person";
import Information from "./Information";

function Welcome() {
  return (
    // <>
    //   <div id="id" className="class">
    //     <div>
    //       <h2>Welcome to the React World</h2>
    //       <ol>
    //         <li>
    //           <a href="#">Football</a>
    //         </li>
    //         <li>
    //           <a href="#">Swimming</a>
    //         </li>
    //         <li>
    //           <a href="#">Golf </a>
    //         </li>
    //       </ol>
    //     </div>
    //     <h1>Football</h1>
    //     <input type="text" name="gameName" id="gameName" placeholder="Enter your Favourite game" />
    //   </div>
    // </>

    <div>
        <Person />
        <Information />
    </div>

  );
}

// function Welcome() {
//     return React.createElement('h1',{},'Hello Moto');
// }

// function Welcome() {
//     return React.createElement(
//         'div',{},React.createElement('H2',{},'DAVID BECKHAM')
//     );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Welcome />);

/*
    when you want to add extra node but without adding 
    elements then <React.Fragment> should be used or we can use <> also

*/
