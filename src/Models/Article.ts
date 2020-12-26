import * as mongoose from 'mongoose';
import {
    ArticleContentType,
    Category,
    IArticle,
} from '../types/models/Article';

const articleSchema: mongoose.Schema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        subTitle: {
            type: String,
            trim: true,
        },
        contents: [
            {
                type: {
                    type: String,
                    enum: [
                        ArticleContentType.CODE,
                        ArticleContentType.IMAGE,
                        ArticleContentType.VIDEO,
                        ArticleContentType.HTML,
                    ],
                },
                content: {
                    type: String,
                },
            },
        ],
        count: {
            like: {
                type: Number,
            },
            view: {
                type: Number,
            },
        },
        category: {
            type: String,
            enum: [Category.BLOG, Category.NOTICE, Category.DIARY],
        },
        thumbnailUrl: {
            type: String,
        },
    },
    { timestamps: true }
);

export default mongoose.model<IArticle>('Article', articleSchema);
