import '@/styles/circles.css';

const Background = () => {
  const numCircles = 10;

  return (
    <div className="area">
      <ul className="circles">
        {[...Array(numCircles)].map((_, index) => (
          <li key={index}></li>
        ))}
      </ul>
    </div>
  );
};
export default Background;
