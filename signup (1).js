import React from "react";
class Signup extends React.Component{
    constructor(props){
        super(props);
        this.ref1=React.createRef();
        this.check=this.check.bind(this);
    }
    check(e){
        if((this.ref1.current.value.length)!=10){
            alert("PHONE NUMBER INVALID!");
            e.preventDefault();
        }
     }
    render(){
        var styl1={color:"white",position:"absolute",top:"20%",left:"29%"};
        var styl2={fontSize:"large",fontWeight:300};
        var styl3={width:"43%",height:"30px", backgroundColor: "rgba(240, 255, 255, 0.712)",color: "#3d4a4d"};
        var styl4={borderRadius:"25px",backgroundColor:"#21B9B3",width:"20%",height:"30px"};
        var styl5={width:"96%",height:"30px", backgroundColor: "rgba(240, 255, 255, 0.712)",color: "#3d4a4d"};
        
        return(
            <div>
            <div style={styl1}>
            <form onSubmit={this.check} style={{backgroundColor:"#21B9B3",padding:"100px",paddingTop:"10px",paddingBottom:"20px",MozPaddingEnd:"10px"}}>
                <h2 style={{color:"black",position:"relative",left:"40%"}}>SIGN UP</h2><br/>
    <input type="text" id="fname" name = "fname" placeholder="FIRST NAME" style={styl3} required/>&emsp;&emsp;
    <input type="text" id="lname" name = "lname" placeholder="LAST NAME" style={styl3} required/>
    <br/><br/><br/>
    <input type="text" id="email" name = "email" placeholder="EMAIL ID" style={styl5} required/>
    <br/><br/><br/>
    <input type="text" id="phone" name = "phone" ref={this.ref1} placeholder="PHONE NUMBER" style={styl5}required/>
    <br/><br/><br/>
    <input type="password" id="place" name = "place" placeholder="PASSWORD" style={styl5} required/>
    <br/><br/>
    <br/>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
    <input type="reset" style={styl4}/>&emsp;&emsp;
    <input type="submit" style={styl4}/>
            </form>
            </div>
            </div>
        );
    }
}
export default Signup;