import React from "react";
import screen from "../images/screen.png"

const Center = () => {
  const org = [];
  return (
    <div className="fixed z-[20] top-[18%] right-0 pr-1 ">
      {/* <div className="container flex justify-center mt-40 mx-auto">
        <div className="h-fit w-fit p-8 bg-pink-500">Report Incident</div>
      </div> */}
	  <div className="container pt-24 pb-8 flex flex-wrap flex-col text-white ">
			<a href="#video" className="flex justify-center items-center rounded-full container m-[2px] h-16 w-16 hover:bg-pink-600 hover:font-semibold bg-pink-500">
				<img src="https://cdn.iconscout.com/icon/free/png-512/video-recorder-3100255-2577687.png" className="h-10 w-10 "/>
			</a>
			<a href="#screen" className="flex justify-center items-center rounded-full container m-[2px] h-16 w-16 hover:bg-pink-600 hover:font-semibold p-2 bg-pink-500">
				<img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/screen-recording-2305309-1951246.png?f=avif&w=256" className="h-10 w-10" />
			</a>
			<a href="#audio" className="flex justify-center items-center rounded-full container m-[2px] h-16 w-16 hover:bg-pink-600 hover:font-semibold p-2 bg-pink-500">
				<img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/cassette-72-414907.png?f=avif&w=256" alt="" className="h-10 w-10"/>
			</a>
			<a href="#addPost" className="flex justify-center items-center rounded-full container m-[2px] h-16 w-16 hover:bg-pink-600 hover:font-semibold p-2 bg-pink-500">
				<img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/upload-image-1889102-1597203.png?f=avif&w=256" className="h-10 w-10" alt="" />
			</a>
			<a href="#submit" className="text-center rounded-full container h-auto w-16 hover:bg-orange-400 hover:font-semibold p-2 bg-pink-500">
				Submit
			</a>
	  </div>
    </div>
  );
};

export default Center;
