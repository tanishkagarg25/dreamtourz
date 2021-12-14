import React from "react";
import img1 from "./goa1.jpg";
import img2 from "./goa2.jpg";
import img3 from "./goa3.jpg";
import img4 from "./bombay1.jpg";
//mport img5 from "./bombay2.jpg";
import img6 from "./bombay3.jpg";
import img7 from "./an1.jpg";
//import img8 from "./an2.jpg";
import img9 from "./an3.jpg";
import img10 from "./back1.jpg";

        
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
                <article class="beach" style={sty2}>
                <section>
                <h1 style={sty1}>GOA</h1>
                <figure>
                    <details>
                        <summary><img src={img1} width="500" height="300"/>&emsp;</summary>
                        <p>The Sandy beaches, coconut trees waterfalls truly add flavor to the goan natural view. 
                        These beaches attracts tourist from all round the globe</p>
                    </details>
                <details>
                <summary><img src={img2} width="500" height="300"/></summary>
                    <p>Goa + casino + cruise = complete fun, right? 
                        If yes, make sure you head to Casino Cruise which is undoubtedly one of the top cruises in Goa. Indulge in various gaming experiences such as Rummy, Poker and Blackjack. Apart from this, 
                        you can also find many other entertainment activities like dance, karaoke, etc at the Casino Cruise.</p>&emsp;
                    </details>
                <details>
                <summary><img src={img3} width="500" height="300"/></summary>
                    <p>The Carnival has played a major part in the culture of Goa from the 18th century. 
                        It’s a fast paced eating-drinking and partying extravaganza held before the 40 days of Lent, a time of discipline and spirituality observed by Christians. 
                        Colourful floats and decor adorn the streets of Goa during the 4 days and people dress up in crazy, quirky attire and welcome the season of merriment with open arms.</p>
                </details>
                </figure>

                Goa is popularly known as the Pearl of the orient and tourist paradise.
                The real essence of Goa lies in its rich history, unique culture and the original natural beauty.
                There are more than 36 beaches in Goa, each one is known for its own distinctiveness.
                People visit Goa for Casinos and Cruise. People who enjoy gambling with chilled drinks and music find Goa to be a perfect place. 
                Candolim Beach, Baga Beach, Sinquerim Beach, Bambolim Beach, Arambol Beach, Palolem Beach, Agonda Beach and Cavelossim beaches are famous and an increasing number of tourists visit these beaches every year. 
                Calangute Beach – Queen of Goa beaches, Colva Beach- Pride of Salcete <br/><br/>
                    for more information about the place please visit:<br/>
                    <a href="https://www.tourmyindia.com/states/goa/beaches.html" target="_blank">https://www.tourmyindia.com/states/goa/beaches.html</a>
                </section>
                <section>
                    <h1 style={sty1}>BOMBAY</h1>
                <figure>
                    <details>
                <summary><img src={img4} width="500" height="300"/>&emsp;</summary>
                <p>The beaches in Mumbai are also considered as important venues for the shooting of many films.
                'Chowpatty Beach' is one of the most popular beaches situated in Mumbai.</p>
                </details>
                
                <details>
                <summary><img src={img6} width="500" height="300"/></summary>
                <p>H2O Water Sports is a popular beachside water park that offers an ultimate experience of fun and adventure. 
                    It has a wide assortment of activities – from boating to jet skiing, sailing, water skiing, parasailing, wakeboarding and kayaking.</p>
                </details>
                </figure>
                Mumbai is situated on the western coast of India and is surrounded by the magnificent Arabian Sea. 
                For this reason, there are a number of beaches in Mumbai and watching the glorious sunsets from these beaches is indeed a heavenly sight. 
                Equally beautiful, and one of the most visited beaches in Mumbai, is the 'Juhu Beach'.
                The Versova village is home to a large community of fishing folk known as 'Kolis'. This beach/village is famous for its fish market auctions which are held every day.<br/><br/>
                for more information about the place please visit:<br/>
                    <a id = "lnk" href="https://www.treebo.com/blog/beaches-in-mumbai/" target="_blank">https://www.treebo.com/blog/beaches-in-mumbai/</a>
                </section>
                <section>
                <h1 style={sty1}>ANDAMAN</h1>
                <figure>
                <details>
                <summary><img src={img7} width="500" height="300"/>&emsp;</summary>
                <p>With the coral reefs supporting marine life these above mentioned underwater activities will take you closer to the aquatic animals such as sharks, rays, and other beautiful fishes etc.<br/><br/>
                for more information about the place please visit:</p>
                </details>
                <details>
                <summary><img src={img9} width="500" height="300"/></summary>
                <p>When were talking about scuba diving, then we simply cant overlook the intriguing archipelago of the Andaman. 
                    Its crystal clear waters are regarded as the perfect place for relishing scuba diving. 
                    There are numerous places like The Havelock Islands, Neil Islands, Cinque Islands, and the Nicobar Islands that lure the ardent scuba divers. 
                    Theres an entirely different world of sea creatures that is simply astounding when you enter in that world.</p>
                </details>
                </figure>
                Andaman is blessed with swinging palm-lined trees, its soothing soft white sandy beaches, beautiful mangroves and alluring tropical rainforests.
                You can lounge on the many beaches of Andaman Island like Radhanagar Beach - Havelock Island, Ross and Smith Island Beach, Guitar Island Beach, 
                Wandoor Beach - Port Blair, Pathi Level Beach - Diglipur
                Andaman provide the guests with fun filled beach tourism activities like banana boat rides, snorkelling, scuba diving, parasailing, undersea walking etc. 
                You can also partake in adrenaline water activities like jet skiing, speed boating and even riding on a seaplane. 
                <br/>
                    <a id = "lnk" href="https://andamanholidays.com/blog/about-andaman-islands/beaches-of-andaman-and-nicobar-part-1/" target="_blank">https://andamanholidays.com/blog/about-andaman-islands/beaches-of-andaman-and-nicobar-part-1/</a>
                </section>
                </article>
                </div>
            );
        }
    }
    class Beaches extends React.Component{
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
export default Beaches;