import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import {useState} from 'react';

function App() {
  const [file, setFile] = useState();
  const deploy = async (e) => {
    const files = Array.from(e.target.files);
    // setSize(files.length);
    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setFile((old) => {
            return [...old, reader.result];
          });          
        }
      };
      reader.readAsDataURL(file);
    });
    // console.log(form);
    // const res = await axios.post("http://localhost:5000/deploy");
    // Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijg2MjgyMmViNjY3YzE0ZTAwNDljMjU1MTM2ZmQ4NTE1ZGEwNWQwYjk2OWNjYzg2NiIsImFjY291bnRfaWQiOiI4OTc0MWQ3Zi05OGNiLTRlNGQtOWMwNS1hNzA4M2I0ZDIzOGIiLCJhY2Nlc3Nfa2V5IjoiODYyODIyZWI2NjdjMTRlMDA0OWMyNTUxMzZmZDg1MTVkYTA1ZDBiOTY5Y2NjODY2IiwiZW1haWwiOiJicmlqZXNoYWdhbEBnbWFpbC5jb20iLCJpYXQiOjE2NzU1MTMwNDEsImV4cCI6MTk5MTA4OTA0MX0.SRO_RWge1W_4nqrSjJD4td1JYAXvimOIw05H59UVaaQ",
    // console.log(res);
    // const res = await DataApi.uploadDirectory(e.target.files[0], Date.now(), {
    //   headers: {
    //     "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijg2MjgyMmViNjY3YzE0ZTAwNDljMjU1MTM2ZmQ4NTE1ZGEwNWQwYjk2OWNjYzg2NiIsImFjY291bnRfaWQiOiI4OTc0MWQ3Zi05OGNiLTRlNGQtOWMwNS1hNzA4M2I0ZDIzOGIiLCJhY2Nlc3Nfa2V5IjoiODYyODIyZWI2NjdjMTRlMDA0OWMyNTUxMzZmZDg1MTVkYTA1ZDBiOTY5Y2NjODY2IiwiZW1haWwiOiJicmlqZXNoYWdhbEBnbWFpbC5jb20iLCJpYXQiOjE2NzU1MTMwNDEsImV4cCI6MTk5MTA4OTA0MX0.SRO_RWge1W_4nqrSjJD4td1JYAXvimOIw05H59UVaaQ"
    //   }
    // })
    // console.log(res);
  };
  return (
    <div className="App">
      <input onChange={(e) => deploy(e)} type="file" />
    </div>
  );
}

export default App;
