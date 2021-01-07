import ArticleService from '../../service/ArticleService';
import castAsync from '../../utils/castAsync';
import { Category } from '../../types/models/Article';

export const getArticles = castAsync(async (req, res, next) => {
    const { page } = req.query;
    const category = req.query.category as Category;

    const articles = await ArticleService.getArticles(
        Number(page) || 0,
        category
    );

    res.status(200).send(articles);
});

export const getArticle = castAsync(async (req, res, next) => {
    const { articleId } = req.params;
    const article = await ArticleService.getArticleById(articleId);

    res.status(200).send({ article });
});

export const createArticle = castAsync(async (req, res, next) => {
    const article = await ArticleService.createArticle(req.body);

    res.status(200).send({ article });
});

export const updateArticle = castAsync(async (req, res, next) => {
    const { articleId } = req.params;
    console.log(articleId);
    const article = await ArticleService.updateArticle(articleId, req.body);

    res.status(200).send({ article });
});

export const deleteArticle = castAsync(async (req, res, next) => {
    const { articleId } = req.params;
    const article = await ArticleService.removeArticle(articleId);

    res.status(200).send({ article });
});
