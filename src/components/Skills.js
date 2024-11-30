import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SkillCard from "./SkillCard.js"
import javascript from "../assets/skills/javascript.svg"
import react from "../assets/skills/react.svg"
import nodejs from "../assets/skills/nodejs.svg"
import angular from "../assets/skills/angular.svg"
import python from "../assets/skills/python.svg"
import html from "../assets/skills/html.svg"
import cprog from "../assets/skills/c-programming.svg"
import docker from "../assets/skills/docker.svg"
import git from "../assets/skills/git.svg"
import jenkins from "../assets/skills/jenkins.svg"
import springBoot from "../assets/skills/springboot.png"
import aws from "../assets/skills/aws.svg"
import hr from "../assets/curve-hr.svg"
import mongo from "../assets/skills/mongo.svg"

export default function Skills() {
    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1
      };

    return (
        <div id="skills" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Skills</h1>
            <p className="font-light text-gray-400">Here are some of my skills</p>

            <div className="mt-4">
                <Slider {...settings}>
                <SkillCard name="Angular" experience="1 year of Experience" img={angular} />
                <SkillCard name="ReactJs" experience="1 year of Experience" img={react} />
                <SkillCard name="Spring Boot" experience="1 year of Experience" img={springBoot} />
                <SkillCard name="Python" experience="1 year of Experience" img={python} />
                <SkillCard name="C/C++" img={cprog} />
                <SkillCard name="HTML/CSS" experience="1 year of Experience" img={html} />
                <SkillCard name="Javascript" experience="1 year of Experience" img={javascript} />
                <SkillCard name="Node.js" experience="1 year of Experience" img={nodejs} />
                <SkillCard name="docker" experience="1 year of Experience" img={docker} />
                <SkillCard name="Jenkins" experience="1 year of Experience" img={jenkins} />
                <SkillCard name="AWS" experience="1 year of Experience" img={aws} />
                <SkillCard name="MongoDB" experience="1 year of Experience" img={mongo} />
                <SkillCard name="git" experience="1 year of Experience" img={git} />
                </Slider>
            </div>
            <img src={hr} className="w-full mt-8 md:h-3" alt="hr" />
        </div>
    )
}
