//import GlobalUserGroup from '../../context/GlobalContext'
//import { useContext } from 'react'

import Link from 'next/link'

const PlayGame = ({ games }) => {
    //const { userGroup } = useContext(GlobalUserGroup)
    return (
        <div>
            {games.map((game) => {
                return (
                    <Link href={`/play/${game.id.toString()}`} key={game.id}>
                        <div>
                            {game.emotions.map((emotion) => (
                                <span key={emotion}>{emotion}</span>
                            ))}
                        </div>
                        <div>
                            {game['how-it-helps'].map((how) => (
                                <span key={how}>{how}</span>
                            ))}
                        </div>
                        {/* <a href={game.game}>Play Game</a> */}
                    </Link>
                )
            })}
        </div>
    )
}

export default PlayGame
