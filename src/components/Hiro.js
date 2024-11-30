import {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faGithub, faGoogle, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import hr from '../assets/curve-hr.svg'

import profile from '../assets/profile.webp'

export default function Hiro () {

    const [loaded, setLoaded] = useState(true);

    return (
        <>
        {loaded ?
        <div
            className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-white flex flex-col items-center justify-center"
        >Loading...</div>
            :
            null
        }
        <div id="home" className="flex w-full h-screen flex-col md:flex-row gap-5 items-center justify-center text-white relative">
            <div className='md:w-3/6 md:p-4'>
                <img data-aos="flip-right" data-aos-duration="1500" data-aos-offset="200" src={profile} alt="profile" onLoad={() => setLoaded(false)}  style={{ width: '500px', height: 'auto' }} />
            </div>
            <div className='md:w-3/6' data-aos="fade-right" data-aos-duration="1000" data-aos-offset="100" >
                <div className="flex flex-col w-full mt-8">
                    <h1 className="text-xl text-gray-400">Hi, I'm</h1>
                    <h1 className="text-2xl font-bold">Dhruv Varshney</h1>
                    <p className="text-xl text-gray-300">Software Engineer</p>
                    <p className="text-md font-light text-gray-400 ">Software Engineer with More than 1 year of Experience in Frontend Development. Recently started working as a backend engineer </p>
                </div>
                <ul className='flex mt-2 gap-4 items-center' style={{ position: "relative", zIndex: "1" }}>
                   <li>
                        <a href='https://github.com/DhRuvvarshney261' rel="noreferrer" target="_blank"><FontAwesomeIcon size='2xl' icon={faGithub} /></a>
                   </li> 
                    <li>
                        <a href='https://www.linkedin.com/in/dhruv-varshney2612/' rel="noreferrer" target="_blank"><FontAwesomeIcon size='2xl' icon={faLinkedinIn} /></a>
                    </li>
                    <li>
                        <a href='mailto:varshneydhruv2612@gmail.com' rel="noreferrer" target="_blank"><FontAwesomeIcon size='2xl' icon={faGoogle} /></a>
                    </li>
                </ul>
            </div>
            <br></br>
            <img src={hr} className="w-full md:h-2 absolute bottom-0" alt="hr" style={{ zIndex: "0" }} />
        </div>
        </>
    )
}
