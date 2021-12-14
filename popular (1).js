import React from "react";
import img1 from "./tripadvisor.png";
import img2 from "./booking.png";
import img3 from "./expedia.png";
import img4 from "./skyscanner.jfif";
import img5 from "./makemytrip.jfif";
import img6 from "./goibibo.png";
import img7 from "./abhibus.png";
import img8 from "./redbus.png";
import img9 from "./paytm.png";
class Card extends React.Component{
    constructor(props){
    super(props);
    this.state={
        op:1
    }
    }
    opaque=()=>{
        this.setState({op:0.5});

    }
    notopaque=()=>{
        this.setState({op:1});
    }
    render(){
        var sty={opacity:this.state.op};
        return(
            <div >
            <a href={this.props.href1} target="_blank" onMouseOver={this.opaque} onMouseOut={this.notopaque}><img src={this.props.src1} width="250" height="150" id="card" style={sty} /></a>
            </div>
        );
    }
}
class Entire extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
    return(
    <div>
    <h1 style={{color:"white",position:"relative",left:"20%"}}>TOP TRAVELING WEBSITES</h1>
    <div style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
    <Card src1={img1} href1="https://www.tripadvisor.in/"/>&emsp;&emsp;
    <Card src1={img2} href1="https://www.booking.com/"/>&emsp;&emsp;
    <Card src1={img3} href1="https://www.expedia.co.in/"/>&emsp;&emsp;
    </div><br/><br/><br/>
    <h1 style={{color:"white",position:"relative",left:"20%"}}>TOP AIRLANE WEBSITES</h1>
    <div style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
    <Card src1={img4} href1="https://www.skyscanner.co.in/"/>&emsp;&emsp;
    <Card src1={img5} href1="https://www.makemytrip.com/"/>&emsp;&emsp;
    <Card src1={img6} href1="https://www.goibibo.com/flights/"/>&emsp;&emsp;
    </div><br/><br/><br/>
    <h1 style={{color:"white",position:"relative",left:"20%"}}>TOP ONROAD WEBSITES</h1>
    <div style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
    <Card src1={img7} href1="https://www.abhibus.com/"/>&emsp;&emsp;
    <Card src1={img8} href1="https://www.redbus.com/"/>&emsp;&emsp;
    <Card src1={img9} href1="https://paytm.com/bus-tickets"/>&emsp;&emsp;
    </div><br/><br/><br/>
    </div>
    );
    }
}
export default Entire;