import Layout from "../../components/MasterLayout";
import fetch from "isomorphic-unfetch";
import Head from 'next/head'
import {ArticleView, ArticleViewTitle, Container, ArticleImage, FeedAuthor} from "../../theme/styles";


const Article = props => {
    const { title, description, created_at, freatured_image, user_details: {name}} = props.article;

    return (
        <Layout>
            <Head>
                <title>{title}</title>
            </Head>
            <Container>
                <ArticleView>
                    <header>
                        <ArticleViewTitle>{title}</ArticleViewTitle>
                        <FeedAuthor>By {name} | {created_at}</FeedAuthor>
                    </header>

                    <ArticleImage
                        src={freatured_image}
                        alt={title}
                    />

                    <div>
                        By {name} | {created_at}
                    </div>
                    <div  dangerouslySetInnerHTML={{ __html: description }} />
                </ArticleView>
            </Container>


        </Layout>

    )
}


Article.getInitialProps = async ( context) => {
    const { slug } = context.query;
    const res = await fetch(`https://blog.gkmit.co/articles/${slug}`)
    const json = await res.json()

    console.log(`data -> ${json}`)
    console.log(json)
    return { article: json }
}


export default Article
