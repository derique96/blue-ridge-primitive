import React from 'react';
// import summerHat from '../images/summerHat.jpg';
import blackTee from '../images/blackTee.jpg';
import summerHat2 from '../images/summerHat2.png';
import whiteTee from '../images/whiteTee.jpg';
import whiteBlue from '../images/white&Blue.jpg';


export default function Home() {
    return(
        <div>
            <div
            style={{
            }}>
                <img 
                    src={summerHat2} 
                    alt= 'BRP hat'
                    style={{
                        width: '100%',
                        height: '575px',
                        justifyContent: 'center'
                    }}
                />
            </div>
            <div 
                style={{
                    display: 'flex',
                    flexWrap: 'wrap'
                }}>
                <img
                    src= {blackTee}
                    alt = 'black Tee in the mountains'
                    style={{
                        width: '33.3%',
                        height: '200%'
                    }}
                />
                   <img
                    src= {whiteTee}
                    alt = 'black Tee in the mountains'
                    style={{
                        width: '33.3%',
                        height: '200%'
                    }}
                />
                   <img
                    src= {whiteBlue}
                    alt = 'black Tee in the mountains'
                    style={{
                        width: '33.3%',
                        height: '200%'
                    }}
                />
            </div>
        </div>
    )
}