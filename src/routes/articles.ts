import * as express from 'express';
import {
    createArticle,
    deleteArticle,
    getArticle,
    getArticles,
    updateArticle,
} from './controller/articles';

const router = express.Router();

router.get('/', getArticles);
router.post('/', createArticle);
router.get('/:articleId', getArticle);
router.put('/:articleId', updateArticle);
router.delete('/:articleId', deleteArticle);

export default router;
