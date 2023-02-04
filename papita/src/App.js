import { useState } from "react";
import { Navbar, Center } from "./components";
import RecordView from "./pages/RecordView";

const action = ["addPost", "video", "screen", "audio"];

function App() {
  const [ind, setInd] = useState(0);
  const [submit, setSubmit] = useState(false);
  return (
    <div className="relative">
      <Navbar />
      {/* <Hero /> */}
      <Center setInd={setInd} setSubmit={setSubmit} />
      {/* <div className="relative">
        <div className="absolute top-1/3 flex items-center justify-center wrap w-4/5">
        </div>
      </div> */}
      {/* <div className="bg-orange-900 h-96 w-96"></div> */}
      <div className="mt-80">
        <div className="text-white ml-12 uppercase">{action[ind]}</div>
        <RecordView idd={ind} submit={submit} />
      </div>
    </div>
  );
}

export default App;
