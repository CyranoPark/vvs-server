import ArticleService from '../../Service/ArticleService';

export const getArticles = async (req, res, next) => {
    try {
        const { page, category } = req.query;
        const articles = await ArticleService.getArticles(
            Number(page) || 0,
            category
        );

        res.status(200).send({ articles });
    } catch (e) {
        next();
    }
};

export const getArticle = async (req, res, next) => {
    try {
        const { articleId } = req.param;
        const article = await ArticleService.getArticleById(articleId);

        res.status(200).send({ article });
    } catch (e) {
        next();
    }
};

export const createArticle = async (req, res, next) => {
    try {
        const article = await ArticleService.createArticle(req.body);

        res.status(200).send({ article });
    } catch (e) {
        console.log(e);
        next();
    }
};
