import React from 'react'
import { GameI } from '../../Api/games'
import styles from './game.module.css'

interface IProps {
  game: GameI
}

const Game: React.FC<IProps> = (props) => {
  const [playing, setPlaying] = React.useState(false)
  return (
    <div className={styles.game}>
      <h3 title={props.game.name}>
        {props.game.name}
      </h3>
      <img src={props.game.image} alt={props.game.name} />
      <button onClick={() => setPlaying(!playing)}>{playing ? 'Parar' : 'Jugar'}</button>
    </div>
  )
}

export default Game
