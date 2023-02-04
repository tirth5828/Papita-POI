// import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useReactMediaRecorder } from "react-media-recorder";
import axios from "axios";
// import { File } from "web3.storage";
const RecordView = ({ idd, submit, setSubmit }) => {
  const [send, setSend] = useState(false);
  const [files, setFiles] = useState([]);
  const [isRecording, setIsRecording] = useState(false);
  const {
    status,
    startRecording,
    pauseRecording,
    resumeRecording,
    stopRecording,
    mediaBlobUrl,
  } = useReactMediaRecorder({
    audio: idd === 3,
    video: idd === 1,
    screen: idd === 2,
  });
  const onStop = async () => {
    stopRecording();
    setIsRecording(false);
  };
  function blobToBase64(blob) {
    return new Promise((resolve, _) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.readAsDataURL(blob);
    });
  }

  useEffect(() => {
    async function setter() {
      console.log("URI", mediaBlobUrl);
      const res = await fetch(mediaBlobUrl);
      const blob = await res.blob();
      const daa = await blobToBase64(blob);
      setFiles((old) => {
        return [...old, daa];
      });
    }
    if (mediaBlobUrl && files.indexOf(mediaBlobUrl) === -1) {
      setter();
    }
  }, [mediaBlobUrl]);
  useEffect(() => {
    async function setter() {
      // console.log(data);
      console.log("uploading to blockchain");
      const response = await axios.post("http://localhost:5000/deploy", {
        urls: files,
      });
      console.log(response);
    }
    if (submit === true) setter();
  }, [submit]);
  return (
    <div className="bg-black rounded-md bg-opacity-20 w-fit mx-auto p-4 text-white overflow-x-hidden">
      <p className="">
        Status: <span className={"uppercase"}>{status}</span>
      </p>

      <button
        disabled={isRecording}
        className={
          `p-2 rounded m-4 ` + (isRecording ? "bg-purple-900" : "bg-purple-500")
        }
        onClick={() => {
          setIsRecording(true);
          startRecording();
        }}
      >
        Start
      </button>
      <button
        // disabled={isRecording}
        className={
          `p-2 rounded m-4 ` + (isRecording ? "bg-purple-900" : "bg-purple-500")
        }
        onClick={resumeRecording}
      >
        Resume
      </button>
      <button
        disabled={!isRecording}
        className={
          `p-2 rounded m-4 ` +
          (!isRecording ? "bg-purple-900" : "bg-purple-500")
        }
        onClick={pauseRecording}
      >
        Pause
      </button>
      <button
        disabled={!isRecording}
        className={
          `p-2 rounded m-4 ` +
          (!isRecording ? "bg-purple-900" : "bg-purple-500")
        }
        onClick={() => onStop()}
      >
        Stop
      </button>
      <button
        disabled={isRecording}
        className={
          `p-2 rounded m-4 ` + (isRecording ? "bg-purple-900" : "bg-purple-500")
        }
        onClick={() => {
          onStop();
          setSubmit(true);
        }}
      >
        Submit
      </button>
      {files?.map((ele) => {
        if (idd === 3) return <audio src={ele} controls></audio>;

        return <video src={ele} controls></video>;
      })}
      {/* <button
        // disabled={!isRecording}
        className={
          `p-2 rounded m-4 ` +
          (!isRecording ? "bg-purple-900" : "bg-purple-500")
        }
        onClick={() => downloadRecording}
      >
        Download Recording
      </button> */}
      {/* {videos.map((url) => {
        return (
          <div> */}
      {/* <div className="flex flex-wrap gap-4">
        {files.map((blobUrl) => {
          return audio?(
            <audio
              className="max-w-[500px] rounded"
              src={blobUrl}
              // downloadRecordingPath="Files"
              downloadRecordingType="mp3"
              controls
            />
          ) : (
            <video
              className="max-w-[500px] rounded"
              src={blobUrl}
              downloadRecordingPath="Files"
              downloadRecordingType="mp4"
              controls
            />
          );
        })}
      </div> */}
    </div>
  );
};
export default RecordView;
