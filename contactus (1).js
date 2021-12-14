import React  from "react";
import phone from "./phone.jfif";
import mail from "./mail.png";
import address from "./address.png";
import img4 from "./contactus.jpg"
class Contactus extends React.Component{
    render(){
    var styl1={position:"absolute",left:"33%", top: "24%",padding:"5"};
    var styl2={color:"white",fontSize: "large",fontWeight: 300,display:"flex",flexDirection:"row"};
    var styl3={backgroundColor:"white",opacity:"0.3", height:"50%",width: "500px",borderRadius: "25px",padding:"5",paddingBottom:"25px",paddingTop:"25px"};
    var styl4={position: "relative",left:"25%",width: 250,height:35,borderRadius:"25px"};
    var styl5={position: "relative",left:"25%",borderRadius:"10px",height:80,width: 250,fontWeight:"bold"};
    var styl6={position: "relative",left:"25%",fontWeight:"bold"};
    var styl7={position:"absolute",left:"32%",top:"59%"};
    return(
    <div>
    <img src={img4} style={{resizeMode : 'contain',opacity:"0.5"}} width="100%" height="100%"/>
    <div style={styl1}>
           
           <div  style={styl2}><div> <img src={phone} style={{borderRadius:"50%"}} width="50" height="50"/></div>&emsp;&emsp;<div>PHONE NUMBER</div>&emsp;:&emsp;&emsp;<div style={{display:"flex",flexDirection:"column"}}><div>+91 99012 61160</div><div>+91 83749 07366</div><div>+91 99001 68704</div></div></div><br/>
           <div  style={styl2}><div><img src={mail} style={{borderRadius:"50%"}} width="50" height="50"/></div> &emsp;&emsp;<div>EMAIL ID</div>&nbsp;&nbsp;&emsp;&emsp;&emsp;&emsp;:&emsp;&emsp;<div style={{display:"flex",flexDirection:"column"}}><div className="gmail"><a href="http://www.gmail.com">thrupthi2804@gmail.com</a></div></div></div><br/>
            <div  style={styl2}><img src={address} style={{borderRadius:"50%"}} width="50" height="50"/>&emsp;&emsp;<p style={styl2}>ADDRESS&emsp;&emsp;&emsp;&emsp;&nbsp;:&emsp;&emsp;Banashankari,bangalore</p></div><br/>
        </div><br/>
        <div style={styl7}>
            <div style={styl3}>
                <form>
                <p style={styl6}>Name:</p>
                <input type="text" style={styl4} required/>
                <p style={styl6}>Email ID:</p>
                <input type="text" style={styl4} required/>
                <p style={styl6}>Any queries?? Message here:</p>
                <textarea style={styl5} placeholder="Type something here..." required></textarea><br/><br/>
                <input style={{position:"relative",left:"51%",width:"15%",height:"30px",borderRadius:"10px"}}  type="submit" value="submit"/>
                <input style={{position:"relative",left:"20%",width:"15%",height:"30px",borderRadius:"10px"}} type="reset" value="reset"/>
                </form>
            </div>
        </div>
    </div>
    );
}
}
export default Contactus;