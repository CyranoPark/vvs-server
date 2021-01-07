import ArticleService from '../../service/ArticleService';

export const getArticles = async (req, res, next) => {
    try {
        const { page, category } = req.query;
        const articles = await ArticleService.getArticles(
            Number(page) || 0,
            category
        );

        res.status(200).json({ articles });
    } catch (e) {
        next();
    }
};

export const getArticle = async (req, res, next) => {
    try {
        const { articleId } = req.param;
        const article = await ArticleService.getArticleById(articleId);

        res.status(200).json({ article });
    } catch (e) {
        next();
    }
};

export const createArticle = async (req, res, next) => {
    try {
        const article = await ArticleService.createArticle(req.body);

        res.status(200).json({ article });
    } catch (e) {
        console.log(e);
        next();
    }
};
