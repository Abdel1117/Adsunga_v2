require("dotenv").config();
const express = require("express");
const { validationResult } = require("express-validator");
const {checkContactForm} = require('../functions/CheckContactForm')
const Article = require("../models/Article");

exports.getAllArticle = async (req, res) => {
    try {
        const articles = await Article.find();
        res.json(articles);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getRecentArticles = async (req, res) => {
    try {
        let limit = parseInt(req.params.limit) || 3;
        let from = parseInt(req.params.from) || 0;
        if (isNaN(limit) || isNaN(from)) {
            return res.status(400).json({ message: "Paramètres de requête invalides" });
        }
        const totalArticles = await Article.countDocuments();
        if (from >= totalArticles ){
            return res.status(400).json({ message: "Il n'y a plus d'articles disponibles" });
        }
        if(limit > totalArticles){
            limit = totalArticles;
        }
        const articles = await Article.find().sort({ createdAt: -1 }).skip(from).limit(limit);
        res.json(articles);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getArticleById = async (req, res) => {
    try {
        const article = await Article.findById(req.params.id);
        if (!article) return res.status(404).json({ message: "Article not found" });
        res.json(article);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.createArticle = async (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
      // Vérifier que l'image a bien été uploadée
        const imagePath = req.file ? req.file.filename : null;

  if (!imagePath) {
      return res.status(400).json({ message: "Image is required" });
  }

    const article = new Article({
        title: req.body.title,
        category: req.body.category,
        image: imagePath,
        content: req.body.content,
        createdAt: new Date(),
        author : req.body.author || "Julien Safou", 
    });
    try {
        const savedArticle = await article.save();
        res.status(201).json(savedArticle);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.updateArticle = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const article = await Article.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!article) return res.status(404).json({ message: "Article not found" });
        res.json(article);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

exports.deleteArticle = async (req, res) => {
    try {
        const article = await Article.findByIdAndDelete(req.params.id);
        if (!article) return res.status(404).json({ message: "Article not found" });
        res.json({ message: "Article deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
