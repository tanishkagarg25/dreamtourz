<h2 style={{color:"white",textAlign:"center"}}>DREAM TOURZ</h2>
 //style={{marginTop:'20'}}
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
              <div>
              <Link className="link1" style={{color:"#21B9B3",fontWeight:"bold",textDecoration:"None"}} to="/home">Home</Link>&emsp;&emsp;
              <Link style={{color:"#21B9B3",fontWeight:"bold",textDecoration:"None"}}  to="/contact">Contact</Link>&emsp;&emsp;
              <Link style={{color:"#21B9B3",fontWeight:"bold",textDecoration:"None"}}  to="/teaminfo">Aboutus</Link>&emsp;&emsp;
              <Link style={{color:"#21B9B3",fontWeight:"bold",textDecoration:"None"}}  to="/entire">Popular</Link>&emsp;&emsp;
              <div class="dropdown">
  <button className="dropbtn">Categories</button>
  <div className="dropdown-content">
  <Link style={{color:"#21B9B3",fontWeight:"bold",textDecoration:"None"}}  to="/beaches">Beaches</Link>&emsp;&emsp;
  <Link style={{color:"#21B9B3",fontWeight:"bold",textDecoration:"None"}}  to="/historical">Historical</Link>&emsp;&emsp;
  <Link style={{color:"#21B9B3",fontWeight:"bold",textDecoration:"None"}}  to="/hillstation">Hillstation</Link>&emsp;&emsp;
  </div>
  </div>
              <Link style={{color:"#21B9B3",fontWeight:"bold",marginLeft:"60%",textDecoration:"None"}}  to="/">Login</Link>&emsp;&emsp;
              <Link style={{color:"#21B9B3",fontWeight:"bold",textDecoration:"None"}}  to="/register">Signup</Link>&emsp;&emsp;
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