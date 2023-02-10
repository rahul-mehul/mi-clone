import React from 'react'
import '../styles/PreFooter.css';

const githubIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px">    <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" /></svg>
const facebookIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px">    <path d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z" /></svg>

const LinkdinIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px"><path d="M27,15c0,6.627-5.373,12-12,12S3,21.627,3,15S8.373,3,15,3S27,8.373,27,15z M10.403,11.021 c0.935,0,1.496-0.561,1.496-1.309c0-0.748-0.561-1.309-1.403-1.309C9.561,8.403,9,8.964,9,9.712 C9,10.46,9.561,11.022,10.403,11.021z M9,20h3v-8H9V20z M19.459,12c-1.412,0-2.165,0.465-2.541,1.116V12H14v8h2.917 c0,0,0-4.186,0-4.372c0-1.302,0.942-1.488,1.224-1.488s1.035,0.279,1.035,1.488V20H22v-4.372C22,13.116,20.871,12,19.459,12z" /></svg>

const twitterIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="30px" height="30px"><path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z" /></svg>

const hassleicon = <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M24.05 40.1q-6.55 0-11.275-4.725Q8.05 30.65 8.05 24.1v-2.25l-4 4L2.1 23.9l7.45-7.45L17 23.9l-1.95 1.95-4-4v2.25q0 5.35 3.825 9.175Q18.7 37.1 24.05 37.1q1.45 0 2.75-.25t2.45-.75l2.15 2.15q-1.8 1-3.625 1.425-1.825.425-3.725.425Zm14.45-8.45-7.45-7.45 2-2L37 26.15V24.1q0-5.35-3.825-9.175Q29.35 11.1 24 11.1q-1.45 0-2.75.275t-2.45.675L16.65 9.9q1.8-1 3.625-1.4Q22.1 8.1 24 8.1q6.55 0 11.275 4.725Q40 17.55 40 24.1v2.15l4-4 1.95 1.95Z" /></svg>
const shieldIcon =
    <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="m21.8 30.65 11.4-11.4-2.1-2.05-9.15 9.15-5.05-5.05-2.2 2.2Zm2.2 13.3q-7-1.75-11.5-8.125T8 21.85V9.95l16-6 16 6v11.9q0 7.6-4.5 13.975T24 43.95Zm0-3.1q5.75-1.9 9.375-7.175T37 21.85v-9.8l-13-4.9-13 4.9v9.8q0 6.55 3.625 11.825Q18.25 38.95 24 40.85ZM24 24Z" /></svg>
const mapIcon =
    <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="m30.6 42-13.15-4.65L8.5 40.9q-.85.45-1.675-.05Q6 40.35 6 39.35v-27.9q0-.65.375-1.15.375-.5.975-.75L17.45 6l13.15 4.6 8.9-3.55q.85-.4 1.675.075Q42 7.6 42 8.6v28.25q0 .55-.375.95-.375.4-.925.6Zm-1.7-3.75V13l-9.8-3.3v25.25Zm3 0L39 35.9V10.3L31.9 13ZM9 37.65l7.1-2.7V9.7L9 12.05ZM31.9 13v25.25ZM16.1 9.7v25.25Z" /></svg>

function Footer(props) {
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
                <div>
                    <p>LET'S STAY IN TOUCH</p><span>Get updates on sales specials and more</span>
                </div>
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
                <div>
                    <a href="https://github.com/rahul-mehul">{githubIcon}</a>
                    <a href="https://www.linkedin.com/in/rahul-kumar-7a1947215/">{LinkdinIcon}</a>
                    <a href="https://twitter.com/home">{twitterIcon}</a>
                    <a href="/">{facebookIcon}</a>
                </div>
            </div>

            <div className="footer">
                <div>
                    <p>SUPPORT</p>
                    {props.footer.support.map((item, index) => (
                        <a key={index} href={item.url}>{item.name}</a>
                    ))}
                </div>
                <div>
                    <p>SHOP AND LEARN</p>
                    {props.footer.shopAndLearn.map((item, index) => (
                        <a key={index} href={item.url}>{item.name}</a>
                    ))}
                </div>

                <div>
                    <p>RETAIL STORE</p>
                    {props.footer.retailStore.map((item, index) => (
                        <a key={index} href={item.url}>{item.name}</a>
                    ))}
                </div>
                <div>
                    <p>ABOUT</p>
                    {props.footer.aboutUS.map((item, index) => (
                        <a key={index} href={item.url}>{item.name}</a>
                    ))}
                </div>
                <div>
                    <p>CONTACT US</p>
                    {props.footer.contactUs.map((item, index) => (
                        <a key={index} href={item.url}>{item.name}</a>
                    ))}
                </div>
                <div>
                    <div>
                        Chat with out virtule AI Bot(24/7 Live Agent Support)
                    </div>
                    <button>CHAT NOW</button>
                </div>
            </div>

            <div>
                <div className="footerBorder">
                    <div>Copyright @ 2023 xiaomi. All Rights Reserved</div>
                </div>
            </div>

        </>
    )
}

export default Footer











// https://d3dyfaf3iutrxo.cloudfront.net/general/upload/91272ef6c7864e49a3ca9be9f83d0b7b.png
// https://d3dyfaf3iutrxo.cloudfront.net/general/upload/cb822dd10708498f93ec54b08e7bf44e.png