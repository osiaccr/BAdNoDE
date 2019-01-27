const fs = require('fs');
const formidable = require('formidable');
const dbmanager = require(__dirname + '/DBManager.js');
const blogpostbuilder = require(__dirname + '/BlogPostBuilder.js');
const blogbuilder = require(__dirname + '/BlogBuilder.js');
const indexbuilder = require(__dirname + '/IndexBuilder.js');
const mailer = require(__dirname + '/Mailer.js');

module.exports = {
    displayPlainHtml:function (fileName, res) {
        fs.readFile(__dirname + "/website/" + fileName +".html", 'utf8', (err, data) => {  
            if (err) throw err;
            res.send (data);
        });
    }

    ,displayIndex:function(req, res) {
       dbmanager.getPosts((posts) => {
           var page = indexbuilder.createPage (posts);
           res.send (page);
       });
    }

    ,displayBlog:function(req, res) {
        dbmanager.getPosts((posts) => {
            var page = blogbuilder.createPage (posts);
            res.send (page);
        });
    }

    ,displayBlogPost:function(req, res) {
        dbmanager.getPost (req.query.id, (post, err) => {
            if (err) 
                res.send (err);
            else {
                var page = blogpostbuilder.createPage(post[0]);
                res.send (page);
            }
        });
    }

    ,addSubscriber:function(req, res) {
        var form = new formidable.IncomingForm();

        form.parse(req, (err, fields, files) => {
            if (err) throw err;
            dbmanager.insertSubscriber(fields.email, () => {
                module.exports.displayIndex(req, res);
            });
        });
        
    }

    ,deleteSubscriber:function(req, res) {
        dbmanager.deleteSubscriber (req.query.email, req.query.hash, (results) => {
            if (results.affectedRows == 0) {
                res.send ('404 Wrong Email Deletion');
            }
            else {
                res.send (`La revedere ${req.query.email}`);
            }
        });
    }

    ,sendMessage:function(req, res) {
        var form = new formidable.IncomingForm();

        form.parse(req, (err, fields, fiels) => {
            if (err) throw err;
            mailer.sendMessage(fields);
            module.exports.displayPlainHtml('contact', res);
        });
    }

    ,loadPage:function(req, res) {
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
                module.exports.displayIndex(req, res);
                break;
            case 'blog':
                module.exports.displayBlog(req, res);
                break;
            case 'blogpost':
                module.exports.displayBlogPost(req, res);
                break;
            case 'deletesubscriber':
                module.exports.deleteSubscriber(req, res);
                break;
        }
    }
};
