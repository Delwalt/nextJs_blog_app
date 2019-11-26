import Link from 'next/link';
import {FeedCard, FeedCardContent, FeedCardMedia, FeedCardMediaImg, FeedTitle, FeedAuthor} from '../theme/styles';

const ArticleFeedCard = props => {
    const {title, created_at, slug, freatured_image, user_details: {name}} = props.data;
    return (
        <FeedCard>
            <FeedCardContent>
                <Link href="/article/[slug]" as={`/article/${slug}`}>
                    <FeedTitle>{title}</FeedTitle>
                </Link>

                <FeedAuthor> By {name} | {created_at}</FeedAuthor>
            </FeedCardContent>
            <FeedCardMedia>
                <Link href="/article/[slug]" as={`/article/${slug}`}>
                    <FeedCardMediaImg src={freatured_image} alt={title}/>
                </Link>
            </FeedCardMedia>
        </FeedCard>
    )
};

const ArticleFeeds = props => {
    const {articles} = props.articles
    return articles.map(article =>  <ArticleFeedCard key={article.id} data={article}/>)
};

export default ArticleFeeds
