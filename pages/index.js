import Layout from "../components/MasterLayout";
import ArticleFeeds from "../components/ArticleFeeds";
import fetch from 'isomorphic-unfetch';
import { Container} from '../theme/styles';
import Head from "next/dist/next-server/lib/head";

const Index = (articles) => (
    <div>
        <Head>
            <title>GKMIT Blog | Next Js</title>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        </Head>
        <Layout>
            <Container>
                <ArticleFeeds articles={articles} />
            </Container>
        </Layout>
    </div>

)


Index.getInitialProps = async ({ req }) => {
    const res = await fetch('https://blog.gkmit.co/articles')
    const json = await res.json()
    return { articles: json }
}

export default Index
