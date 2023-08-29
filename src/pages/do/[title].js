import SingleDoMake from '../../components/domake/SingleDoMake'
import Layout from '../../components/layout/Layout'
import { getStaticProps } from "../../lib/FetchData";

export async function getServerSideProps({ params }) {
    // const domake = await fetchData(`do-make/?title=${params.title}`)

    const data = await getStaticProps();

    const domake = data['do-make'].filter(
        (domake) => domake.title === params.title
    )
    return { props: { domake } }
}

export default function SingleDoMakePage({ domake }) {
    return (
        <Layout pageTitle="Do/Make">
            <SingleDoMake domake={domake[0]} />
        </Layout>
    )
}
