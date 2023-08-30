import SinglePlayGame from '../../components/playgame/SinglePlayGame'
import Layout from '../../components/layout/Layout'
import { getStaticProps } from "../../lib/FetchData";

export async function getServerSideProps(context) {
    const param = context.params.game

    const data = await getStaticProps();
    
    const game = data['play-game'].filter((game) => game.id === +param)

    return { props: { game } }
}

export default function Emotion({ game }) {
    return (
        <Layout pageTitle="Game">
            <SinglePlayGame game={game[0]} />
        </Layout>
    )
}
