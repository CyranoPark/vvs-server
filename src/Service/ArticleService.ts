import {
    Category,
    IArticle,
    IArticleRequest,
    IArticlesResponse,
} from '../types/models/Article';
import Article from '../Models/Article';
import ErrorService from './ErrorService';

class ArticleService {
    private perPage = 10;

    async getArticles(
        page: number,
        category?: Category
    ): Promise<IArticlesResponse> {
        const articles = await Article.find({
            category: category || Category.BLOG,
        })
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

    async getArticleById(id: string): Promise<IArticle> {
        const isValidId = ErrorService.validateId(id);

        if (!isValidId) {
            ErrorService.createIdValidateError();
        }

        const article = await Article.findById(id);

        if (!article) {
            ErrorService.createNotFoundError();
        }
        return article;
    }

    async createArticle(article: IArticleRequest): Promise<IArticle> {
        const newArticle = new Article(article);

        return await newArticle.save();
    }

    async updateArticle(
        id: string,
        article: IArticleRequest
    ): Promise<IArticle> {
        const isValidId = ErrorService.validateId(id);

        if (!isValidId) {
            ErrorService.createIdValidateError();
        }
        console.log(article);
        await Article.findByIdAndUpdate(id, article);
        return await Article.findById(id);
    }

    async removeArticle(id: string): Promise<IArticle> {
        const isValidId = ErrorService.validateId(id);

        if (!isValidId) {
            ErrorService.createIdValidateError();
        }
        return await Article.findByIdAndDelete(id);
    }
}

export default new ArticleService();
