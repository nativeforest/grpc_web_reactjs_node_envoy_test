import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { sayHello_grpc } from "./services/reqres/grpc/client";
const {
  HelloRequest,
  RepeatHelloRequest,
  HelloReply,
} = require("./services/reqres/grpc/helloworld_pb");
const {
  GreeterClient,
} = require("./services/reqres/grpc/helloworld_grpc_web_pb.js");
const BASE_URL_GRPC = "http://" + window.location.hostname + ":8080"
// import {
//   HelloRequest,
//   RepeatHelloRequest,
//   HelloReply,
// } from "./services/reqres/grpc/helloworld_pb"
// import {
//   GreeterClient,
// } 
function App() {
  const [response,setResponse] = useState('')
  console.log(
    `HI` 
      
  );
  const client = new GreeterClient(
    BASE_URL_GRPC,
    null,
    null
  );
  const enableDevTools = window.__GRPCWEB_DEVTOOLS__ || (() => {});
  enableDevTools([
    client,
  ]);
  useEffect(() => {
    const request = new HelloRequest();
    request.setName("mundo");
    client.sayHello(request, {}, (err, response) => {
      if (err) {
        console.log(
          `Unexpected error for sayHello: code = ${err.code}` +
            `, message = "${err.message}"`
        );
      } else {
        console.log(response.getMessage());
        setResponse(()=>response.getMessage())
      }
    });
  }, []);

  const onRequestService = () => {
    alert("hello");
    sayHello_grpc();
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>test grpc reactjs <h2>[ {response}] </h2></p>

        <button onClick={(e) => onRequestService()}>HI GRPC</button>
      </header>
    </div>
  );
}

export default App;
