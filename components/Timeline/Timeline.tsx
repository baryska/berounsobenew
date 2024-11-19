import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { TimelineContent } from '../../pages/most';
import styles from './Timeline.module.css';

interface Props {
  timeline: TimelineContent[];
}


const Timeline = ({ timeline }: Props) => {
  return (
    <>
      <h2 className={styles.heading}>JAK ŠEL ČAS S BEROUNSKÝM MOSTEM:</h2>
      <VerticalTimeline
        layout="2-columns"
        lineColor='lightgrey'
        animate
      >
        {timeline
          .sort((a, b) => a.year - b.year)
          .map((item, index) => (
            <VerticalTimelineElement
              key={item.text}
              className="vertical-timeline-element--work"
              contentStyle={{ background: index % 2 === 0 ? '#ebf8ff' : '#fff', borderRadius: '25px' }}
              contentArrowStyle={{ borderRight: index % 2 === 0 ? '7px solid #ebf8ff' : '7px solid #fff' }}
              icon={<span style={{ fontWeight: 'bold', fontFamily: 'Montserrat' }}>{item.year}</span>}
              iconStyle={{
                background: '#161534',
                color: 'rgb(76, 164, 202)',
                width: '50px',
                height: '50px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <p>
                {item.text}
              </p>
            </VerticalTimelineElement>
          ))}
      </VerticalTimeline>
    </>
  )
}

export default Timeline;


