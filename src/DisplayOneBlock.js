function DisplayOneBlock({ duration, title }) {

  return (
    <div 
        className="singleBlock"
        style={{ height: `${duration}px` }}
    > {title}
    </div>
  );
}

export default DisplayOneBlock;