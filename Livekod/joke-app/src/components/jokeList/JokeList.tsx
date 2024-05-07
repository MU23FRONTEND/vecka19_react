import Joke from '../joke/Joke';
import './jokeList.css';
import JokeType from '../../models/Joke';

type Props = {
  jokes : JokeType[]
}

function JokeList({ jokes } : Props) {
  return (
    <section className="joke-list">
      {
        jokes &&
        jokes.map((joke, index) =>{
          return <Joke 
                   joke={ joke }
                   index={ index }
                   key={ index }
                 />
        })
      }
    </section>
  )
}

export default JokeList;
