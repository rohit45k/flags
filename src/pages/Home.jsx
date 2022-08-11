import classes from './Home.module.css';
import globe from '../assets/globe.png';
import GameCard from '../components/UI/GameCard';

const Home = () => {
  return (
    <main className={classes.main}>
      <h1>Let's Play a Game</h1>
      <div className={classes.games}>
        <GameCard
          title='Guess the Flags'
          image={globe}
          alt='a globe made up of flags of different countries of the world'
          path='/flags'
        />
      </div>
    </main>
  );
};

export default Home;
