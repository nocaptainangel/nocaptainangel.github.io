import '../styles/timeline.css';

const timelines = [
  {
    title: 'Research',
    content: 'User interviews, user search.',
  },
  {
    title: 'Analysis',
    content: 'User flows, user journey mapping.',
  },
  {
    title: 'Design',
    content: 'Sketches, wireframing, prototyping.',
  },
  {
    title: 'Testing',
    content: 'Testing prototype, getting feedback, executing improvements.',
  },
];

const Timeline = () => {
  return (
    <div className='relative'>
      <ul className='timeline'>
        {timelines.map((timeline, index) => (
          <li key={index} data-year={timeline.title.toUpperCase()} data-text={timeline.content}></li>
        ))}
      </ul>
    </div>
  );
};

export default Timeline;
