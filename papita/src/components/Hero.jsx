import React, { useState } from "react";
import AddPost from "./AddPost";
import RecordView from "../pages/RecordView";
// import axios from "axios";

const Hero = () => {
  const [submit, setSubmit] = useState(false);
  const handleSubmit = async () => {
    setSubmit(true);
  };
  return (
    <div className="text-white">
      <div className="mx-auto w-fit pt-28 underline">RECORD SECTION</div>
      <div
        id="audio"
        className="mx-auto w-fit flex flex-col items-center p-2 m-4"
      >
        <div className="m-2">
          <span>Audio</span>
        </div>
        <RecordView submit={submit} audio={true} />
      </div>
      <div
        id="video"
        className="mx-auto w-fit flex flex-col items-center p-2 m-4"
      >
        <div className="m-2">
          <span>Video</span>
        </div>
        <RecordView submit={submit} video={true} />
      </div>
      <div
        id="screen"
        className="mx-auto w-fit flex flex-col items-center p-2 m-4"
      >
        <div className="m-2">
          <span>Screen</span>
        </div>
        <RecordView submit={submit} screen={true} />
      </div>
      <div
        id="addPost"
        className="mx-auto w-fit flex flex-col items-center p-2 m-4"
      >
        <AddPost submit={submit} />
      </div>
      <div id="submit" className="flex justify-center p-2 m-4">
        <button
          onClick={handleSubmit}
          className=" rounded p-2 bg-green-400 text-white hover:bg-green-500"
        >
          Submit All
        </button>
      </div>
    </div>
  );
};

export default Hero;
