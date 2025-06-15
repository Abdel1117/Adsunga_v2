const express = require('express');
const router = express.Router();
const dotenv = require('dotenv');
const ArticlesController = require('../controllers/ArticlesController');
const upload = require('../middleware/multer'); // le fichier ci-dessus
const { checkArticle } = require('../functions/checkArticle');

dotenv.config();

router.get('/getAllArticles', ArticlesController.getAllArticle)
router.get(`/getRecentArticles/:from/:limit`, ArticlesController.getRecentArticles)
router.get('/getArticleById/:id', ArticlesController.getArticleById)
router.post('/createArticle',upload.single('image'), checkArticle, ArticlesController.createArticle)
router.put('/updateArticle/:id', upload.single('image'), checkArticle, ArticlesController.updateArticle)
router.delete('/deleteArticle/:id',  ArticlesController.deleteArticle)

module.exports = router;