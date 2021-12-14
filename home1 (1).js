import React from "react";
import img1 from './front2.jfif';
import img2 from "./title1.jpg";
import img3 from "./title2.jfif";
import img4 from "./title3.jfif";
import img5 from "./WhatsApp Image 2021-09-23 at 12.06.52 AM.jpeg";
import img6 from "./home.gif";
class Heading extends React.Component{
    render(){
        return(
            <div>
                <img src={img5} style={{borderRadius:"10px",position:"absolute",top:"0.5%",left:'40%'}} width= "216px"
height= "97px"/>
            </div>
        );
    }
}
class Main extends React.Component{
    render(){
        var sty1={position:"relative",left:"0",top:"0",color:"white",opacity:"0.7"};
        return(
                <div>
                <img src={img6} style={sty1} width="100%" height="400"/>
                <i style={{color:"white",fontSize:"20px",position:'absolute',top:"30%",left:"20%"}}>“Travel makes one modest, you see what a tiny place you occupy in the world.” ~ Gustave Flaubert</i>
                </div>
        )
    }
}
class Img extends React.Component{
    constructor(props){
        super(props);
        this.state={
            op1:1, op2:1, op3:1
        }
        }
        opaque1=()=>{
            this.setState({op1:0.5});

        }
        notopaque1=()=>{
            this.setState({op1:1});
        }
        opaque2=()=>{
            this.setState({op2:0.5});

        }
        notopaque2=()=>{
            this.setState({op2:1});
        }
        opaque3=()=>{
            this.setState({op3:0.5});

        }
        notopaque3=()=>{
            this.setState({op3:1});
        }
    render(){
        var sty1={position:"absolute",top:"68%",left:"10%",opacity:this.state.op1};
        var sty2={position:"absolute",top:"68%",left:"150%",opacity:this.state.op2};
        var sty3={position:"absolute",top:"68%",left:"290%",opacity:this.state.op3};
        var sty4={position:"absolute",top:"310%",left:"10%",color:"black",textAlign:"center",width:"134%",height:"25",fontSize:"large",backgroundColor:"white"};
        var sty5={position:"absolute",top:"310%",left:"150%",color:"black",textAlign:"center",width:"134%",height:"25",fontSize:"large",backgroundColor:"white"};
        var sty6={position:"absolute",top:"310%",left:"290%",color:"black",textAlign:"center",width:"134%",height:"25",fontSize:"large",backgroundColor:"white"};
        return(
            <div id="img1">
            <a href="https://traveltriangle.com/blog/places-to-visit-in-cherrapunji/" style={sty1} target="_blank"  onMouseOver={this.opaque1} onMouseOut={this.notopaque1}><img src={img2} width="300" height="200"/></a>&emsp;&emsp;
            <div style={sty4}>Cherrapunji</div>
            <a href="https://traveltriangle.com/blog/things-to-do-in-kanyakumari/" style={sty2} target="_blank" onMouseOver={this.opaque2} onMouseOut={this.notopaque2}><img src={img3} width="300" height="200"/></a>&emsp;&emsp;
            <div style={sty5}>Kanyakumari</div>
            <a href="https://www.tourism.rajasthan.gov.in/udaipur.html" style={sty3} target="_blank" onMouseOver={this.opaque3} onMouseOut={this.notopaque3}><img src={img4} width="300" height="200"/></a>&emsp;&emsp;
            <div style={sty6}>udaipur</div>
            </div>
        )
    }
}
class Front extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        var sty1={position:"absolute",top:"72%",left:"14%",color:"white"};
        return(
            
            <article style={sty1}>
            <section>
            <h1>DREAM YOUR NEXT TRIP</h1>
            <Img/>
            </section>
            </article>

        );
    }
}
class Home1 extends React.Component{
    constructor(props){
    super(props);
}
    render(){
        return(
            <div>
            <Main/>
            <Front/>
            </div>
        );
    }
}
export default Home1;