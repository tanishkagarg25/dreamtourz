import React  from "react";
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
}from "react-router-dom";
import Aboutus from "./teaminfo";
import Contactus from "./contactus";
import Home1 from "./home1";
import Entire from "./popular";
import Form  from "./form";
import "./index.css";
import Signup from "./signup";
import Beaches from "./beaches";
import RegisterPage from "./signup2";
import LoginPage from "./login2";
import Historical from "./historical";
import Hillstation from "./hillstation";
class App extends React.Component{
  render(){
    return(
      <div>
      <div className="index" />
      <Router>
        <div>
              <div className="links" >
              <h2 className="neon" style={{color:"#21B9B3"}}>DREAM TOURZ</h2>
              <div style={{display:"flex",flexDirection:"row"}}>
              <Link className="link1" style={{color:"#21B9B3",fontWeight:"bold",padding:"8px",textDecoration:"None"}} to="/home">Home</Link>
              <Link className="link1" style={{color:"#21B9B3",fontWeight:"bold",textDecoration:"None",padding:"8px"}}  to="/contact">Contact</Link>
              <Link className="link1" style={{color:"#21B9B3",fontWeight:"bold",textDecoration:"None",padding:"8px"}}  to="/teaminfo">Aboutus</Link>
              <Link className="link1" style={{color:"#21B9B3",fontWeight:"bold",textDecoration:"None",padding:"8px"}}  to="/entire">Popular</Link>
              <div class="dropdown"  style={{padding:"8px"}}>
  <button className="dropbtn">Categories</button>
  <div className="dropdown-content">
  <Link style={{color:"#21B9B3",fontWeight:"bold",textDecoration:"None"}}  to="/beaches">Beaches</Link>
  <Link style={{color:"#21B9B3",fontWeight:"bold",textDecoration:"None"}}  to="/historical">Historical</Link>
  <Link style={{color:"#21B9B3",fontWeight:"bold",textDecoration:"None"}}  to="/hillstation">Hillstation</Link>
  </div>
  </div>
              <Link className="link1" style={{color:"#21B9B3",fontWeight:"bold",marginLeft:"62%",textDecoration:"None",padding:"9px"}}  to="/">Login</Link>
              <Link className="link1" style={{color:"#21B9B3",fontWeight:"bold",textDecoration:"None",padding:"9px"}}  to="/register">Signup</Link>
              </div>
              <hr/>
              </div>
          <Switch>
            <Route exact path="/home"><Home1/></Route>
            <Route exact path="/contact"><Contactus/></Route>
            <Route exact path="/teaminfo"><Aboutus/></Route>
            <Route exact path="/entire"><Entire/></Route>
            <Route exact path="/"><LoginPage/></Route>
             <Route exact path="/register"><RegisterPage/></Route>
             <Route exact path="/beaches"><Beaches/></Route>
             <Route exact path="/historical"><Historical/></Route>
             <Route exact path="/hillstation"><Hillstation/></Route>
          </Switch>
        </div>
      </Router>
      </div>
    )
  }
}
export default App;