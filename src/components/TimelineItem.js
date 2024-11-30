import React from 'react';

const TimelineItem = ({ title, location, duration }) => (
    <div className='item-center'>
  <li>
    <div className="timeline-badge"></div>
    <div className="timeline-panel">
      <div className="timeline-heading">
        <pre>
        <h4 className="timeline-title">   {title}</h4>
        <p className="text-muted">   {location}</p>
        <p className="text-muted">   {duration}</p>
        </pre>
      </div>
    </div>
  </li>
  </div>
);

export default TimelineItem;
