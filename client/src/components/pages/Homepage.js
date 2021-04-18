import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
    return (
        <div>

            <div id="hee">
               <div className="subs">
                    <Link to= "/register"  style={{'text-decoration':'none'}}><h2>Subscribe Now!!!</h2></Link>
               </div>
            </div>
            <div className="box" style={{marginTop:'70px'}}>
                <p className="about"> Newspapers and magazines were once the lifeline of the nation and was hailed as the fourth estate for its sheer power in forming public opinion and creating revolution on many issues. The aim of this project is to optimize newspaper delivery system. The newspaper delivery has been done manually by printing press depots Agents vendors and the worker boys distributes in the respective lane allotted to them by vendors. This newspaper distribution system can be a good replacer for hectic manual technique of newspaper distribution. This newspaper management system helps to distribute newspaper online.
Admin will be logging onto the website and can manage newspaper online and also can generate bill. Customer needs to register and login. To read the daily newspaper of their choice they need to subscribe the respective newspaper and pay monthly bill online. It is easy to use and acts as a more reliable source. Welcome to digital world of newspapers and magazines. We hope you enjoy reading with us.</p>
            </div>
            <div id="contact">
               <p>Contact us:</p>
               <p>Telephone no: 99xxxxxxxx</p>
               <p> email: headlinedistributors@example.com</p>
            </div>
        <div>
           <div>
    <div className="space" />
    <p  id="addr"> &#169 Headline Distributors</p>
    </div>

        </div>
        </div>
    )
}

export default Homepage;
