import React from 'react';
import axios from "axios";
import { withRouter } from 'react-router';
import img4 from './login.jfif';
function LoginPage(props) {
    const emailRef = React.createRef();
    const passwordRef = React.createRef();

    const loginUser = () => {
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        axios.post("http://localhost:8000/user/login", {
            email,
            password,
        })
            .then((response) => {
                alert(response.data.message);
                if(response.data.message=="User logged in successfully !")
                {
                props.history.push("/home");
                }
            }).catch((err) => {
                if (
                    err &&
                    err.response &&
                    err.response.data &&
                    err.response.data.message


                ) {  }
            });
    };
    var styl1={color:"white",position:"absolute",top:"26%",left:"29%",opacity:"0.6",backgroundColor:"white",padding:"100px",paddingTop:"5px",paddingBottom:"20px",MozPaddingEnd:"10px"};
    var styl2={fontSize:"large",fontWeight:300};
    var styl3={width:"43%",height:"30px", backgroundColor: "rgba(240, 255, 255, 0.712)",color: "#3d4a4d"};
    var styl4={borderRadius:"25px",backgroundColor:"#21B9B3",width:"20%",height:"30px"};
    var styl5={width:"96%",height:"30px", backgroundColor: "rgba(240, 255, 255, 0.712)",color: "#3d4a4d"};
    return (
       
        <div>
        <img src={img4} style={{resizeMode : 'contain',opacity:"0.5"}} width="100%" height="100%"/>
        <div style={styl1}>
            <h2 style={{color:"black",position:"relative",left:"40%"}}>LOGIN</h2><br/>
        <input type="text" id="fname" name = "fname"  placeholder="FIRST NAME" style={styl3}/>&emsp;&emsp;
    <input type="text" id="lname" name = "lname" placeholder="LAST NAME" style={styl3}/>
    <br/><br/><br/>
    <input type="text" id="email" name = "email" placeholder="EMAIL ID" style={styl5} htmlFor="email" ref={emailRef}/>
    <br/><br/><br/>
<input type="text" id="phone" name = "phone"  placeholder="PHONE NUMBER" style={styl5}/>
<br/><br/><br/>
<input type="text" id="place" name = "place" placeholder="CURRENT PLACE" style={styl5} />
<br/><br/><br/>
<input type="password" id="place" name = "place" placeholder="PASSWORD"  ref={passwordRef} style={styl5} htmlFor="email" ref={passwordRef}/>
<br/><br/>
<br/>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
<input type="reset" style={styl4}/>&emsp;&emsp;
<button className="subbtn" onClick={loginUser} style={styl4}>login</button>
        </div>
        </div>
    )
}

export default withRouter(LoginPage);