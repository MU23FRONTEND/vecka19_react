import './joke.css';
import JokeType from '../../models/Joke';

type Props = {
  joke : JokeType,
  index : number
}

function Joke({ joke, index } : Props) {
  return (
    <article className="joke">
      <h3>Joke #{ index + 1 }</h3>
      <p>
        <em>
          { joke.joke }
        </em>
      </p>
    </article>
  )
}

export default Joke;
