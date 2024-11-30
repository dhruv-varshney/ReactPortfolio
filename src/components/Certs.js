import CertCard from "./CertCard.js"

import hr from "../assets/curve-hr.svg"
import bigdata from "../assets/certs/BigData.png"
import pythongoogle from "../assets/certs/pythongoogle.png"
import javascript  from "../assets/certs/javascript.png"
import hcl from "../assets/certs/hcj.png"
import pythonm from "../assets/certs/pythonM.png"
import pythonhack from "../assets/certs/pythonHack.png"
import win from "../assets/certs/win.jpeg"
import ieee from "../assets/certs/ieee.jpeg"
// import 

export default function Certs(){
    return (
        <div id="certs" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Certifications</h1>
            <p className="font-light text-gray-400">Here are some of my Certifications</p>

            {/* <div className="flex flex-col md:flex-row flex-wrap mt-4 gap-5"> */}
            <div className="grid grid-cols-1 md:grid-cols-3 justify-center mt-4 gap-5">
                <CertCard name="Introduction to Big Data" img={bigdata} issued="Coursera" date="Oct 2022" />
                <CertCard name="Crash Course on Python" img={pythongoogle} issued="Coursera" date="Jan 2021" />
                <CertCard name="Introduction to Javascript: The Basics" img={javascript} issued="Coursera" date="Sept 2020" />
                <CertCard name="Programming Foundations with JavaScript, HTML and CSS" img={hcl} issued="Coursera" date="Sept 2020" />
                <CertCard name="Programming for Everybody (Getting Started with Python)" img={pythonm} issued="Coursera" date="Dec 2018" />
                <CertCard name="Python" img={pythonhack} issued="Hackerrank" date="March 2021" />
                <CertCard name="Winner of VCET's National Level Project Showcase 2021" img={win} issued="VCET" date="May 2021" />
                <CertCard name="IEEE Participation Certificate" img={ieee} issued="IEEE" date="June 2021" />
            </div>
            <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
        </div>
    )
}
