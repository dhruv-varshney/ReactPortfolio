import HonorCard from "./HonorCard.js"

import hr from "../assets/curve-hr.svg"

export default function Honors(){
    return (
        <div id="honors" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Honors & Awards</h1>
            <p className="font-light text-gray-400">Here are some of my honors and awards</p>

            <div className="flex flex-col md:flex-row mt-4 gap-5">
                <HonorCard name="Winner of VCET's National Level Project Showcase 2021" desc="Won 1st prize in VCET'S National Level Project Showcase competition held on 14th May, 2021."/>
                <HonorCard name="Project shorlisted for AICTE CHHATRA VISHWAKARMA AWARDS" desc="My project got shortlisted for “AICTE CHHATRA VISHWAKARMA AWARDS 2020 state Level" />
            </div>
            <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
        </div>
    )
}
