const fs = require('fs');
const dbmanager = require(__dirname + '\\DBManager.js');
const blogpostbuilder = require(__dirname + '\\BlogPostBuilder.js');
const blogbuilder = require(__dirname + '\\BlogBuilder.js');
const indexbuilder = require(__dirname + '\\IndexBuilder.js');

module.exports = {
    displayPlainHtml:function (fileName, res) {
        fs.readFile(__dirname + "\\website\\" + fileName +".html", 'utf8', (err, data) => {  
            if (err) throw err;
            res.send (data);
        });
    },

    displayIndex:function(res) {
       dbmanager.getPosts((posts) => {
           var page = indexbuilder.createPage (posts);
           res.send (page);
       });
    },

    displayBlog:function(req, res) {
        dbmanager.getPosts((posts) => {
            var page = blogbuilder.createPage (posts);
            res.send (page);
        });
    },

    displayInsertPage:function(req, res) {
        if (req.query.key != global.key) throw 'INVALID KEY!'; 
        fs.readFile(__dirname + "\\website\\insertforum.html", 'utf8', (err, data) => {
            if (err) throw err;
            res.send(data);
        });
    },

    displayBlogPost:function(req, res) {
        dbmanager.getPost (req.query.id, (post) => {
            var page = blogpostbuilder.createPage(post[0]);
            res.send (page);
        });
    },

    loadPage:function(req, res) {
        switch (req.params.pageName) {
            case 'about':
                module.exports.displayPlainHtml('about', res);
                break;
            case 'contact':
                module.exports.displayPlainHtml('contact', res);
                break;
            case 'services':
                module.exports.displayPlainHtml('services', res);
                break;
            case 'insertblog':
                module.exports.displayInsertPage(req, res);
                break; 
            case 'index':
                module.exports.displayIndex(res);
                break;
            case 'blog':
                module.exports.displayBlog(req, res);
                break;
            case 'blogpost':
                module.exports.displayBlogPost(req, res);
                break;
        }
    }
};