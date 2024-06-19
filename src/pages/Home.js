import React, { useState, useEffect } from 'react';
import '../styles/Home.css';

function Home() {
    const goals = [
        "/my name is Brandon",
        "/i'm a software engineer",
        "/i work in Magento2 for my day job",
        "/and in React during my off hours",
        "/i'm an avid do-it-yourself-er",
        "/and an amateur woodworker",
        "/this is my space to share my work",
      ];
      
      const quotes = [
        '"Your favorite quote goes here." - ChatGPT',
        '"Don\'t be inspired, be inspirational" - unknown', 
        '"Live every week like it\'s Shark Week" - Tracy Jordan (30 Rock)',
        '"Bullet holes and jail cells couldn\'t stop me, this my destiny" - 21 Savage', 
        '"Everybody wanna be God, besides God, he wanna be like us" - Mac Miller', 
        '"Don\'t think because I\'m gluten free that I won\'t come for your bread" - Marlon Craft'
      ];
    
      const [selectedQuote, setSelectedQuote] = useState('')
    
      useEffect(() => {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        setSelectedQuote(randomQuote);
      // eslint-disable-next-line
      }, []);

      const ResetQuote = () => {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        setSelectedQuote(randomQuote);
      }

    return (
        <div className='home'>
            <div className='content'>
                <p>
                    {selectedQuote}
                    <i className='bi bi-arrow-clockwise fs-5' onClick={ResetQuote}></i>
                </p>
                <div>
                    <ul>
                    {goals.map((goal, index) => (
                        <li key={index} className="" style={{ paddingLeft: `${(index * 2)+2}rem` }}>
                        {goal}
                        </li>
                    ))}
                    </ul>
                </div>
                <div>
                    <img
                        className="headshot"
                        src={process.env.PUBLIC_URL + '/assets/images/fall-2021(headshot-small).jpg'}
                        alt="Brandon Broxterman"
                    />
                </div>
            </div>
        </div>
    )
}

export default Home;