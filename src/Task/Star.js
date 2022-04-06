import React from 'react';


function Star({ starData }) {
  let starVal = Math.round(starData);
  // let htmlString = "";
  // for (var i = 0; i < starVal; i++) {
  //   htmlString += `<i className="fa fa-star"></i>`;
  // }

  // console.log(htmlString);

  return (
    <div className="starParent">
      <p>{starData}</p>
      {
        // htmlString
      }
    </div>
  )
}

export default Star