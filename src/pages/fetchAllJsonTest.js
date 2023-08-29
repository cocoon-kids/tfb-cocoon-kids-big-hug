import { getStaticProps } from "../lib/FetchData";

export async function getServerSideProps() {
    const data = await getStaticProps();

    return {
        props: {
            data,
        },
    };
}

export default function FetchAllJsonTest({ data }) {
    console.log("hello")
    console.log(data)
    return (
        <div>
            Hello
        </div>
    );
}

