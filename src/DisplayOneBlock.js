function DisplayOneBlock({ duration, title, start, end }) {

  return (
    <div 
      className="singleBlock"
      style={{ height: `${duration*1.5}px` }}
    >
      <span className="blockTitle">{title}</span>
      <span className="blockTimes">{start} - {end}</span>
    </div>
  );
}

export default DisplayOneBlock;