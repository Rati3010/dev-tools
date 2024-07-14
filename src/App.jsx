import { useState } from "react";
import "./App.css";
import NetworkRequest from "./components/NetworkRequest";
import axios from "axios";
import RequestList from "./components/RequestList";
import { useDispatch } from "react-redux";
import { addRequest } from "./redux/actions/requestActions";

function App() {
  const [requests, setRequests] = useState([]);
  const dispatch = useDispatch();
  const handleFetchRequests = (url) => {
    if (!url) return;

    let formattedUrl = url;
    if (
      !formattedUrl.startsWith("http://") &&
      !formattedUrl.startsWith("https://")
    ) {
      formattedUrl = `https://${formattedUrl}`;
    }

    const startTime = new Date().getTime();

    axios
      .get(
        `https://inunity-server-1.onrender.com/proxy?url=${encodeURIComponent(
          formattedUrl
        )}`
      )
      .then((response) => {
        const endTime = new Date().getTime();
        const duration = endTime - startTime;
        dispatch(
          addRequest({
            url: url,
            method: response.config.method,
            status: response.status,
            statusText: response.statusText,
            duration: duration,
            headers: response.config.headers,
            data: response.data,
          })
        );
        setRequests((prevRequests) => [
          ...prevRequests,
          {
            url: url,
            method: response.config.method,
            status: response.status,
            statusText: response.statusText,
            duration: duration,
            headers: response.config.headers,
            data: response.data,
          },
        ]);
        console.log(requests);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="App">
      <NetworkRequest onSubmit={handleFetchRequests} />
    </div>
  );
}

export default App;
