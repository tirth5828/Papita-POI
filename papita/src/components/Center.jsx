import React, { useState } from "react";
import screen from "../images/screen.png";
import RecordView from "../pages/RecordView";

const Center = ({setInd, setSubmit}) => {
  
  
  // const action = ["addPost", "video", "screen", "audio"];
  const handleClk = (e) => {
    setInd(e);
  };
  return (
    <div>
      <div className="fixed z-[20] top-0 right-0 pr-1 w-full">
        {/* <div className="container flex justify-center mt-40 mx-auto">
        <div className="h-fit w-fit p-8 bg-pink-500">Report Incident</div>
      </div> */}
        <div className="container pt-20 flex w-full justify-evenly text-white ">
          <div
            id="video"
            onClick={() => handleClk(1)}
            className="flex justify-center items-center rounded-full container m-[2px] h-16 w-16 hover:bg-pink-600 hover:font-semibold bg-pink-500"
          >
            <img
              src="https://cdn.iconscout.com/icon/free/png-512/video-recorder-3100255-2577687.png"
              className="h-10 w-10 "
            />
          </div>
          <div
            id="screen"
            onClick={function () {
              handleClk(2);
            }}
            className="flex justify-center items-center rounded-full container m-[2px] h-16 w-16 hover:bg-pink-600 hover:font-semibold p-2 bg-pink-500"
          >
            <img
              src="https://cdn.iconscout.com/icon/premium/png-512-thumb/screen-recording-2305309-1951246.png?f=avif&w=256"
              className="h-10 w-10"
            />
          </div>
          <div
            id="audio"
            onClick={function () {
              handleClk(3);
            }}
            className="flex justify-center items-center rounded-full container m-[2px] h-16 w-16 hover:bg-pink-600 hover:font-semibold p-2 bg-pink-500"
          >
            <img
              src="https://cdn.iconscout.com/icon/premium/png-512-thumb/cassette-72-414907.png?f=avif&w=256"
              alt=""
              className="h-10 w-10"
            />
          </div>
          <div
            id="addPost"
            onClick={function () {
              handleClk(0);
            }}
            className="flex justify-center items-center rounded-full container m-[2px] h-16 w-16 hover:bg-pink-600 hover:font-semibold p-2 bg-pink-500"
          >
            <img
              src="https://cdn.iconscout.com/icon/premium/png-512-thumb/upload-image-1889102-1597203.png?f=avif&w=256"
              className="h-10 w-10"
              alt=""
            />
          </div>
          {/* <div id="submit" className="text-center text-sm rounded-full container h-auto w-16 hover:bg-orange-600 hover:font-semibold p-2 bg-pink-500">
				Submit
			</div> */}
        </div>
      </div>
      
    </div>
  );
};

export default Center;
