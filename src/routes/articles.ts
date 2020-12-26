import * as express from 'express';
import { createArticle, getArticle, getArticles } from './controller/articles';

const router = express.Router();

router.get('/', getArticles);
router.post('/', createArticle);
router.get('/articleId', getArticle);

export default router;
