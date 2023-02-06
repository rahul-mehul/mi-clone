import React from 'react'
import '../styles/PreFooter.css';


const hassleicon = <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M24.05 40.1q-6.55 0-11.275-4.725Q8.05 30.65 8.05 24.1v-2.25l-4 4L2.1 23.9l7.45-7.45L17 23.9l-1.95 1.95-4-4v2.25q0 5.35 3.825 9.175Q18.7 37.1 24.05 37.1q1.45 0 2.75-.25t2.45-.75l2.15 2.15q-1.8 1-3.625 1.425-1.825.425-3.725.425Zm14.45-8.45-7.45-7.45 2-2L37 26.15V24.1q0-5.35-3.825-9.175Q29.35 11.1 24 11.1q-1.45 0-2.75.275t-2.45.675L16.65 9.9q1.8-1 3.625-1.4Q22.1 8.1 24 8.1q6.55 0 11.275 4.725Q40 17.55 40 24.1v2.15l4-4 1.95 1.95Z" /></svg>
const shieldIcon =
    <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="m21.8 30.65 11.4-11.4-2.1-2.05-9.15 9.15-5.05-5.05-2.2 2.2Zm2.2 13.3q-7-1.75-11.5-8.125T8 21.85V9.95l16-6 16 6v11.9q0 7.6-4.5 13.975T24 43.95Zm0-3.1q5.75-1.9 9.375-7.175T37 21.85v-9.8l-13-4.9-13 4.9v9.8q0 6.55 3.625 11.825Q18.25 38.95 24 40.85ZM24 24Z" /></svg>
const mapIcon =
    <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="m30.6 42-13.15-4.65L8.5 40.9q-.85.45-1.675-.05Q6 40.35 6 39.35v-27.9q0-.65.375-1.15.375-.5.975-.75L17.45 6l13.15 4.6 8.9-3.55q.85-.4 1.675.075Q42 7.6 42 8.6v28.25q0 .55-.375.95-.375.4-.925.6Zm-1.7-3.75V13l-9.8-3.3v25.25Zm3 0L39 35.9V10.3L31.9 13ZM9 37.65l7.1-2.7V9.7L9 12.05ZM31.9 13v25.25ZM16.1 9.7v25.25Z" /></svg>

function Footer() {
    return (
        <>
            <div className='preFooter' >
                <div>{hassleicon}
                    <p> <b>Hassle-free replacment</b><br />10-Days easy replacment policy on mi.com </p>
                </div>
                <div>{shieldIcon}
                    <p><b>100% secure payments </b><br />We support Cards,Wallets,EMI and COD</p>
                </div>
                <div>
                    {mapIcon}
                    <p><b>Vast service network</b><br />1000 Mi service-centers across 600 cities</p>
                </div>
            </div>
            <div className="preFooter2">
                <div><p>LET'S STAY IN TOUCH</p><span>Get updates on sales specials and more</span></div>
                <div>
                    <div>
                        <input type="email" name="email" placeholder='Enter Email Address' />
                        <button>〉</button>
                    </div>
                    <span>Thanks. You're on our email list for special offers</span>
                </div>
                <div>
                    <p>FOLLOW MI</p>
                    <span>We want to hear from you!</span>
                </div>
                <div></div>

            </div>
        </>
    )
}

export default Footer
