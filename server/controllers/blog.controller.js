'use strict';

const db = require('../repository/repository');

exports.getBlogs = (req, res, next) => {

    db.blogs.getBlogs().then((data) => {
        console.log(data);
        return res.render('partials/blogs', { blogs: data });
    });
};