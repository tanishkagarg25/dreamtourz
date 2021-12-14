import React from "react";
import img1 from "./WhatsApp Image 2021-04-28 at 5.50.42 PM.jpeg";
import img2 from "./neha.jfif";
import img3 from "./WhatsApp Image 2021-11-10 at 5.06.45 PM.jpeg";
import img4 from "./aboutus.jfif";
class Aboutus extends React.Component{
    render(){
        var styl1={position:"absolute",color:"white",fontWeight: 200,left:470,top:200,fontSize: "large"};
        var styl2={color:"#21B9B3"};
        var styl3={color:"white",fontSize: "large"};
        var styl4={borderRadius: "50%"};
        var styl5={display:"flex",flexDirection:"row"}
        return(
            <div>
                <div>
    <i style={styl1}>"TRAVEL BECAUSE MONEY RETURNS BUT TIME DOES NOT!!"</i>
    <img src={img4} width="100%" height="280px"/>
</div>
<hr/>
<h2 style={styl2}>Who are we??</h2>
<p style={styl3}>“Travel is the main thing you purchase that makes you more extravagant”. We, at ‘Dreamtourz’, swear by this and<br/> put stock in satisfying travel dreams that make you perpetually rich constantly.

    We have been moving excellent encounters <br/> for a considerable length of time through our cutting-edge planned occasion bundles and other fundamental travel administrations.<br/> We rouse our clients to carry on with a rich life, brimming with extraordinary travel encounters.<br/>We are here to explore about travelling.This travelling website gives you tremendous information about places.<br/>
We give information about the places of the user's choice and interest in India.
</p>
<h2 style={styl2}>TEAM INFO:</h2>
<div style={styl5}>
<div>
<img src={img1} width="100" height="100" style={styl4}/>
<p style={styl3}>
Thrupthi N<br/>
Bangalore,India<br/>
</p>
</div>&emsp;&emsp;&emsp;
<div>
<img src={img2} width="100" height="100" style={styl4}/> 
<p style={styl3}>
Vankadara Neha<br/>
Bangalore,India<br/>
</p>
</div>&emsp;&emsp;&emsp;
<div>
<img src={img3} width="100" height="100" style={styl4}/> 
<p style={styl3}>
Tanishka Garg<br/>
Bangalore,India<br/>
</p>
</div>
</div>
            </div>
        );
    }
}
export default Aboutus;