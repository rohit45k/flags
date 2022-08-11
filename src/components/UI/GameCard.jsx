import { Link } from 'react-router-dom';

const GameCard = (props) => {
  return (
    <div>
      <Link to={props.path}>
        <img src={props.image} alt={props?.alt} />
        <h2>{props.title}</h2>
      </Link>
    </div>
  );
};

export default GameCard;
