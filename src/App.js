
import React, { Component } from 'react'
import "./App.css";
import Image1 from "../src/asserts/1.png";
import Image2 from "../src/asserts/2.png";
import Image3 from "../src/asserts/3.png";
import Logo from "../src/asserts/logo.png";
export default class App extends Component {
  render() {
    return (
      <div className=" all">
        <div style={{padding:"1em 0"}} ><img className="logo" src={Logo} alt=""></img></div>
        <div className="img">
          <div style={{textAlign:"center"}}><img className="images" src={Image1} alt=""></img></div>
          <div >
            <b>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</b>
            <ul>
              <li><p>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</p></li>
              <li><p>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</p></li>
            </ul>
            <img className="images-2" src={Image2} alt=""></img>
            <div>Government of India has awarded the "National Energy Conservation Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</div>
            </div>
        </div>
        <div className="para"><p>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION OF POWER FOR THE NATION.</p></div>
        <div style={{textAlign: "center"}}><img className="images-1" src={Image3} alt=""></img></div>
        <div style={{margin:"auto",width:"90%"}}>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </div>
      <hr style={{backgroundColor:"red",margin:"1em 0.8em"}}></hr>
      <div style={{textAlign:"center"}}>
        <b>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</b>
        <div style={{margin:"1em auto",width:"90%"}}>CHEMICALS & PROCESS POWER WATER & WASTE WATER OILS & GAS PHARMA SUGARS & DISTILLERIES PAPER & PULP MARINE & DEFENCE METAL & MINING FOOD & BEVERAGE PETROCHEMICAL & REFINERIES SOLAR BUILDING HVAC FIRE FIGHTING AGRICULTURE & RESIDENTIAL</div>
        </div>
        <div className="footer">
          <div className="ft"><i className="fa fa-phone-alt icons"></i> Toll free 1800 200 1234</div>
          <div className="ft" onClick={()=> window.open("https://www.facebook.com/cripumps", "_blank")}><i className="fab fa-facebook icons"></i> www.facebook.com/cripumps</div>
          <div className="ft" onClick={()=> window.open("https://in.crigroups.com", "_blank")} ><i className="fa fa-globe icons"></i> www.crigroups.com</div>
        </div>
      </div>
    )
  }
}
