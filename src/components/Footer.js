import React from 'react';
import './Timeline.css'; // Import your CSS file for styling
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function Footer() {
  return (
    <div id="acad" className="mt-4 bg-dark-200 rounded-md  px-8 py-4">
      <h1 className="text-3xl text-center text-white">Academics and Work Experience</h1>
      <br></br>
   
    <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  >
    <h3 className="vertical-timeline-element-title">Software Engineer - 1</h3>
    <h4 className="vertical-timeline-element-subtitle">Bazaarvoice India</h4>
    <p>
      July 2022 - Present
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  >
    <h3 className="vertical-timeline-element-title">Software Engineer Intern</h3>
    <h4 className="vertical-timeline-element-subtitle">Bazaarvoice India</h4>
    <p>
     January 2022 - July 2022
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  >
    <h3 className="vertical-timeline-element-title">Bangalore Institute of Technology</h3>
    <h4 className="vertical-timeline-element-subtitle">Bangalore, India</h4>
    <p className='college'> 
      CGPA : 8.0      2018-2022
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  >
    <h3 className="vertical-timeline-element-title">Modern Vidhya Niketan</h3>
    <h4 className="vertical-timeline-element-subtitle">Faridabad,Haryana,India</h4>
    <p className='college'>
      12th Percentage: 88%   [2017-2018]
      <br></br>
      10th CGPA: 9.8   [2015-2016]       
    </p>
  </VerticalTimelineElement>

</VerticalTimeline>
<br></br>
<br></br>
<p className="text-xl text-sm font-light text-center text-white">Made with 💛 by Dhruv</p>
</div>
  );
}
