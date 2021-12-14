import React from "react";
import img1 from "./agra1.jpg";
import img2 from "./fathepur.jpg";
import img3 from "./agra fort.jpg";
import img4 from "./hawa mahal.jpg";
import img5 from "./amber fort.jpg";
import img6 from "./jal mahal.jpg";
import img7 from "./hampi1.jpg";
import img8 from "./hampi2.jpg";
import img9 from "./hampi3.jpg";
import img10 from "./hampi4.jpg";
import img11 from "./back1.jpg"
        
class Blog extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        var sty1={color:"#21B9B3"};
        var sty2={position:"absolute",left:"25%",top:"20%",color:"white"}
        return(
            <div>
            <img src={img11} style={{resizeMode : 'contain',opacity:"0.5",position:"fixed"}} width="100%" height="100%"/>
            <article style={sty2}>
            <section>
            <h1 style={sty1}>AGRA</h1>
            <figure>
                <p><i>Agra, one of India’s most popular tourist destinations, holds an important place in history as it is home to many architectural wonders from the Mughal era. 
                    Each site has a story of its own that both tour guides and locals love to talk about. 
                    From the Taj Mahal to the Kinari Bazar, there are many famous places in Agra that everyone should consider having on their travel itineraries.</i></p>
            <details>
                <summary><img src={img1} width="500" height="300"/></summary>
            <p><i>People may not have heard of Agra, but nearly everyone knows of the Taj Mahal. 
                This ivory-white marble mausoleum is the perfect example of the intricacy and brilliance of Persian and Mughal architecture. 
                It was constructed by Emperor Shah Jahan in memory of his beloved wife, Mumtaz Mahal. 
                Today, the Taj Mahal is a Unesco World Heritage site, and it continues to hold the same magical appeal it always has, attracting approximately 8m tourists a year. 
                Viewing of the Taj Mahal is usually permitted from sunrise to sunset, except Fridays. 
                Night viewing of the Taj Mahal is only allowed on five nights of the month: the night of the full moon and the two nights before and after.</i></p>
            </details>
                <details>
            <summary><img src={img2} width="500" height="300"/></summary>
                <p><i>Fatehpur Sikri, which served as emperor Akbar’s capital for 13 years, was the first planned city of the Mughal era. 
                    After his meeting with a Sufi saint, who resided in a cavern in Sikri, Akbar was blessed with a son.
                     As a sign of reverence to this saint, the emperor moved his capital from Agra to Fatehpur Sikri. 
                     The mosques and palaces inside this ancient city are considered architectural masterpieces.</i></p>&emsp;
                </details>
            <details>
            <summary><img src={img3} width="500" height="300"/></summary>
                <p><i>As you enter and start to cross courtyard after courtyard, you might realize that Agra has one of the finest Mughal forts in India. 
                    This red sandstone and marble architecture exudes power and grandiosity. Emperor Akber began the construction of Agra Fort as a military structure in 1565, 
                    and it was later transformed into a palace by his grandson Emperor Shah Jahan. Some of the most iconic structures in Mughal history are still a part of this fort,
                     such as Shish Mahal (Mirror Palace), Diwan-e-aam (Hall of General Audience) and Diwan-e-khaas (Hall of Private Audiences). 
                     The Amar Singh gate, which was built to confuse attackers with its dogleg design, is now the sole point of entry to the fort.</i></p>
            </details>
           

            
                <a  href="https://www.holidify.com/places/agra/sightseeing-and-things-to-do.html" target="_blank">click here</a>
            </figure>
            </section>
            <section>
                <h1 style={sty1}>JAIPUR</h1>
                <figure>
                <p><i>Rajasthan is a land of many historical forts and palaces, with each of them hiding numerous tales of the Royal Marwar in their architecture and grandeur. One such renowned heritage site is the Hawa Mahal or the ‘Palace of Winds’ in the ‘Pink City’ of India – Jaipur.</i></p>
            
            <details>
                <summary><img src={img4} width="500" height="300"/></summary>
                <p><i>The Hawa Mahal in Jaipur is considered as one of the most iconic attractions of the city. 
                    The five-storey building looks like a honeycomb of a beehive and it is always windy inside, owing to the numerous windows and jharokhas. 
                    This amazing ventilation that the palace enjoys is the reason why it was named as the Hawa Mahal, which literally translates into the “Palace of the Winds”.
                    The main purpose behind the construction of this palace was to allow the ladies of the royal family and the court to observe the busy streets of the Johari Bazaar from the many jharokhas of the palace, without being seen themselves.</i></p>
                </details>
            <details>
                <summary><img src={img5} width="500" height="300"/></summary>
                <p><i>One of the top tourist attractions of Jaipur, the huge Amer Palace Fort sits atop a small hill, and is located at a distance about 11 km from the main city. 
                    The magnificent Amer Fort is an extensive palace complex that has been built with pale yellow and pink sandstone, and with white marble.
                    There are a lot of attractions for one to see at the Amer Fort, including the diwan-e-aam, such mandir, and the Sheesh Mahal. 
                    Amer Fort is also home to some underground tunnels that connect Amer to Jaigarh Fort.
                    The essence of Amer Fort is encapsulated by the beautiful light and sound show within the fort, where visitors get to see an astounding spectacle about the history of the fort.</i></p>
                </details>
            <details>
            <summary><img src={img6} width="500" height="300"/></summary>
            <p><i>One of the most wonderful sights in Jaipur is the beautiful Jal Mahal or Lake Palace. 
                The light, sand coloured stone walls and the deep blue of the water make for a wonderful contrast. 
                The palace appears to float in the centre of Man Sagar Lake, where its magnificent exteriors can be enjoyed by tourists.</i></p>
            </details>
                <a href="https://www.tourism.rajasthan.gov.in/jaipur.html" target="_blank">click here</a>
            </figure>
            </section>
            <section>
            <h1 style={sty1}>HAMPI</h1>
            <figure>
                <p><i>In its glory days during the early 16th century, Hampi was the wealthiest kingdom in all of India. 
                    The stories of its prosperity reached far and wide, and travellers from all over the world flocked to the city. 
                    The monuments of Hampi were later demolished by the medieval Sultans of Delhi, but even when in ruins, they are still breathtaking.</i></p>
                    
            <details>
                <summary><img src={img7} width="500" height="300"/></summary>
                
                <p><i>Vijaya Vitthala Temple is a massive complex that dates back as far as the 15th-century, and stands as a testimony of the Vijayanagara architecture. 
                    Dedicated to Lord Vitthala, an embodiment of Lord Vishnu, the temple is said to be the largest historic structure in the area. 
                    It houses several shrines, pavilions and halls, and the stunning stone chariot in the courtyard, which is perhaps the most striking structure of the complex and used to be able to move.
                    This temple is an invaluable historical and architectural heritage with artistic and intricate carvings that represent various gods. 
                   </i> </p>
                </details>
                <details>
                <summary><img src={img8} width="500" height="300"/></summary>
                <p> <i>Not to mention the huge musical pillars in the temple halls, also called the SAREGAMA pillars, which when tapped gently emanate light musical chimes.</i></p>
                </details>
            <details>
            <summary><img src={img9} width="500" height="300"/></summary>
            <p><i>In the southern part of Hampi lies Hemakuta Hill, which is dotted with several Hindu temples, built during 9th to 14th-century. 
                Most of the temples in the complex are dedicated to Lord Shiva – some are intact, while many have fallen into ruins, but are definitely worth a visit. 
                The architecture of these temples is unique – these are three-tiered structures, complete with pyramid-shaped roof made of granite, and the walls are adorned with floral motifs. 
                The most prominent temple in the complex is the Mula Virupaksha temple.</i></p>
            </details>
            <details>
            <summary><img src={img10} width="500" height="300"/></summary>
            <p><i>Built in the 16th-century, the Achyutaraya temple was the last temple built in Hampi, and epitomizes the Vijayanagara style of architecture. 
                It is set between two hills – Matanga and Gandhamadana, which adds to its charm. Dedicated to Lord Tiruvengalanatha, the temple has huge courtyard, complete with intricate carved pillars and ornamental details. 
                Each pillar has sculptures inscribed that truly reflect the stunning craftsmanship.</i></p>
            </details>
            
            
                <a href="https://traveltriangle.com/blog/places-to-visit-in-hampi/" target="_blank">click here</a>
            </figure>
            </section>
            </article>
            </div>
        );
    }
}
class Historical extends React.Component{
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
export default Historical;