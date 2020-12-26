import {
    IArticle,
    IArticleRequest,
    IArticlesResponse,
} from '../types/models/Article';
import Article from '../Models/Article';

class ArticleService {
    private perPage = 1;

    async getArticles(page: number): Promise<IArticlesResponse> {
        const articles = await Article.find()
            .limit(this.perPage)
            .skip(this.perPage * page)
            .sort({
                updatedAt: 'desc',
            });

        const totalCounts = await Article.count();
        const pages = Math.ceil(totalCounts / this.perPage) - 1;

        return {
            articles,
            page,
            pages,
            hasNext: page + 1 <= pages,
        };
    }

    async getArticleById(id): Promise<IArticle> {
        return await Article.findById(id);
    }

    async createArticle(article: IArticleRequest): Promise<IArticle> {
        const newArticle = new Article(article);

        return await newArticle.save();
    }
}

export default new ArticleService();
