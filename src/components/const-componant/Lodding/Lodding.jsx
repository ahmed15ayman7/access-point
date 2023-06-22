import React ,{useState} from "react";

import "./LoddingStyle.css";
import logo from '../../../assets/images/logo.png'
import loddingLogo from '../../../assets/images/bgLogo.png'
import { Spinner } from "react-bootstrap";
export const Lodding = ()=> { 

let divErr=<div className="mt-5 pt-5 text-start" style={{color:"#ffffff"}} >
        <h1 className="mb-5 mt-5">No internet</h1>
        <h3>Try:</h3>
        <ul><li>Checking the network cables, modem, and router</li><li>Reconnecting to Wi-Fi</li></ul>
</div>
  const [first, setfirst] = useState('');
  setTimeout(() => {
    setfirst(divErr)
  }, 10000);

  return(first===''?<>
  <div className="conss-per">
    <img src={logo} alt='' className="img-fluid conss"/>
    <img src={loddingLogo} alt='' className="img-fluid sub-conss"/>
    <Spinner animation="grow" className="w-100 mt-4" />
  </div>
  </>:<>
    {first}
  </>
)};
