import express from 'express';
import posts from './data/posts';

import { POSTS_ROUTE } from '../../constants/api-routes';

const router = express.Router();

router.get(POSTS_ROUTE, (req, res) => res.json(posts));

export default router;