import Emotions from '../../components/Emotions'

export async function getStaticProps() {
    const res = await fetch('http://localhost:3002/emotions')
    const emotions = await res.json()

    return { props: { emotions } }
}

export default function UserGroup({ emotions }) {
    return <Emotions emotions={emotions} length={9} page={true} />
}
