import React from "react";
import img1 from "./manali1.jpg";
import img2 from "./manali2.jpg";
import img3 from "./manali3.jpg";
import img4 from "./shimla1.jpg";
import img5 from "./shimla2.jpg";
import img6 from "./shimla3.jpg";
import img7 from "./ooty1.jpg";
import img8 from "./ooty2.jpg";
import img9 from "./ooty3.jpg";
import img10 from "./back1.jpg"
        
class Blog extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        var sty1={color:"#21B9B3"};
        var sty2={position:"absolute",left:"25%",top:"20%",color:"white"}
        return(
            <div>
            <img src={img10} style={{resizeMode : 'contain',opacity:"0.5",position:"fixed"}} width="100%" height="100%"/>
            <article style={sty2}>
            <section>
            <h1 style={sty1}>MANALI</h1>
            <figure>
                <p><i>One of the most popular hill stations in Himachal, Manali offers the most magnificent views of the Pir Panjal
                and the Dhauladhar ranges covered with snow for most parts of the year.
                Manali has many trekking options around it, making it a great base for exploring this side of Himalayas. 
                River Beas provides great rafting options in the nearby town of Kullu. Adjoining Parvati river, lies the Parvati
                Valley with  Kasol, Manikaran, Tosh and small villages attracting travellers for longer stays. Atal Tunnel now 
                allows travellers to reach Sissu within a few hours making Spiti way more accessible.</i></p>
            <details>
                <summary><img src={img1} width="500" height="300"/></summary>
            <p><i>Solang valley is a beautiful scenic spot in Manali that is located at an altitude of 2560 meters. 
                The entire area is surrounded by the gorgeous green mountains and lush greenery of the coniferous trees that makes Manali quite famous.
                 It is one of the few places in Manali where you can witness snow-capped mountains in June.</i></p>
            </details>
                <details>
            <summary><img src={img2} width="500" height="300"/></summary>
                <p><i>Vashisht hot water springs is one of the unique places in Manali that offers hot water to all the pilgrims that visit the Vashisht ashram hot water via natural water springs. The reason behind this phenomenon is the presence of sulphur in the spring. Many people prefer to bathe in the boiling water, and you will be surprised to find several Turkish style bathhouses present out there.</i></p>&emsp;
                </details>
            <details>
            <summary><img src={img3} width="500" height="300"/></summary>
                <p><i>Rohtang pass is not only widely famous among the Indian tourists but among traveller from different points of the world as well. The pass is located in the Pir Panjal range and is situated at the height of around 4000 meters. It is not an ordinary pass. Rohtang pass is blessed to be located amid the confluence of Beas and Chenab river and surrounded by the grandeur of the Pir Panjal range.</i></p>
            </details>
           

            
            <a href="https://himachaltourism.gov.in/destination/manali/" target="_blank">CLICK HERE</a>
            </figure>
            </section>
            <section>
                <h1 style={sty1}>SHIMLA</h1>
                <figure>
                <p><i>Shimla is the capital of the northern Indian state of Himachal Pradesh, in the Himalayan foothills. Once the summer
            capital of British India, it remains the terminus of the narrow-gauge Kalka-Shimla Railway, completed in 1903.  It’s also
            known for the handicraft shops that line The Mall, a pedestrian avenue, as well as the Lakkar Bazaar, a market specializing
            in wooden toys and crafts.</i></p>
            
            <details>
                <summary><img src={img4} width="500" height="300"/></summary>
                <p><i>One of the best places to visit in Shimla is the Summer hill – a picturesque town is located 5 km from the famous ridge of Shimla. This hill is carpeted with rich greenery that offers breathtaking views from the top. Summer hill is also a part of the 7 hills that make this escape one of the best visiting places in Shimla and its beauty is sure to leave you overwhelmed.</i></p>
                </details>
            <details>
                <summary><img src={img5} width="500" height="300"/></summary>
                <p><i>Annandale has to be on the list of places to visit in Shimla. This place was home to a number of adventure sports during the British rule including racing. However, now, this place is just perfect for all the golf lovers out there as the racecourse has been converted to a mini-golf course, which also serves as a helipad and offers incredibly beautiful sceneries of its meadows.</i></p>
                </details>
            <details>
            <summary><img src={img6} width="500" height="300"/></summary>
            <p><i>Believed to be the highest peak in Shimla, this hill is 8000 feet high and is a major tourist attraction in Shimla. This temple is a heaven for all the nature lovers and pilgrims who come to visit the historic 108 feet tall Hanuman statue at the Jakhu temple. It is almost a short trek for adventure seekers which makes it one of the best places to visit in Shimla in February.</i></p>
            </details>
            <a href="https://www.tripadvisor.in/Tourism-g304552-Shimla_Shimla_District_Himachal_Pradesh-Vacations.html" target="_blank">CLICK HERE</a>
            </figure>
            </section>
            <section>
            <h1 style={sty1}>OOTY</h1>
            <figure>
                <p><i>Ooty, once the summer capital of Madras Presidency under the British, is safely regarded as “India’s Switzerland”.
            After independence, Ooty was developed into a major tourist destination and understandably so, given its
            qualification for the same, owing to nature’s abundant blessings in terms of climate, scenic splendour, local sights
            and sounds, its wealth of birds and beasts and of course its homegrown beverages of tea and coffee.</i></p>
                    
            <details>
                <summary><img src={img7} width="500" height="300"/></summary>
                
                <p><i>Built in 1847, sprawling across 55 acres—Botanical Garden is a beautifully landscaped garden counted among the best places to visit in Ooty. The garden area is split into various sections, namely Lower Garden, New Garden, Italian Garden, Conservatory, Fountain Terrace, and Nurseries. Varieties of both indigenous and exotic plants, shrubs, ferns, herbal, orchids, and bonsai species are showcased here. This is one of the best places to visit in Ooty for all nature lovers and for a family outing.
                   </i> </p>
                </details>
                <details>
                <summary><img src={img8} width="500" height="300"/></summary>
                <p> <i>With more than 3600 varieties of rose, the Rose Garden is one of the most gorgeous places you must cover during sightseeing in Ooty. Awarded as the ‘Garden of Excellence’ by the World Federation of Rose Societies (WFRS), this is one of the largest rose gardens in India, spread across 10 acres of land. Explore this place to cherish the exotic species and to buy plants and saplings for your own garden.</i></p>
                </details>
            <details>
            <summary><img src={img9} width="500" height="300"/></summary>
            <p><i>Pykara is a sparkling lake nestled amid lush green Nilgiri valleys. There is also a roaring waterfall that goes by the same name. If you live near Ooty, then a day-long trip can be done by car, local buses or private cabs. People can trek up to the waterfall, enjoy boating, and witness the picturesque valleys.</i></p>
            </details>
            
            
            
            <a href="https://www.tripadvisor.in/Attractions-g297679-Activities-Ooty_Udhagamandalam_The_Nilgiris_District_Tamil_Nadu.html" target="_blank">CLICK HERE</a>
            </figure>
            </section>
            </article>
            </div>
        );
    }
}
class Hillstation extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
        <div>
        <Blog/>
        </div>
        );
    }
}
export default Hillstation;