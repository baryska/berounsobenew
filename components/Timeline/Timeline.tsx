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
    <div className={styles.main}>
      <h2 className={styles.heading}>Jak šel čas s berounským mostem:</h2>
      <VerticalTimeline
        layout="2-columns"
        lineColor="#e2e2de"
        animate
      >
        {timeline
          .sort((a, b) => a.year - b.year)
          .map((item, index) => (
            <VerticalTimelineElement
              key={item.text}
              className="vertical-timeline-element--work"
              contentStyle={{
                background: '#ffffff',
                borderRadius: '14px',
                border: '1px solid #e2e2de',
                boxShadow: '0 1px 0 rgba(0,0,0,0.03), 0 10px 28px -20px rgba(0,0,0,0.3)',
                color: '#1b1b2e',
              }}
              contentArrowStyle={{ borderRight: '7px solid #e2e2de' }}
              icon={
                <span style={{ fontWeight: 700, fontFamily: "'PuffinDisplay', 'Inria Sans', sans-serif" }}>
                  {item.year}
                </span>
              }
              iconStyle={{
                background: index % 2 === 0 ? 'var(--color-primary)' : 'var(--color-accent)',
                color: 'white',
                width: '50px',
                height: '50px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 0 4px #fff, 0 1px 6px rgba(0,0,0,0.15)',
              }}
            >
              <p>
                {item.text}
              </p>
            </VerticalTimelineElement>
          ))}
      </VerticalTimeline>
    </div>
  )
}

export default Timeline;


