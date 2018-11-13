const fs = require('fs');
const dbmanager = require(__dirname + '\\DBManager.js');

module.exports = {
    createBlogPostHTML:function (post) {
        var firstPeriod = post.body.indexOf('.');
        if (firstPeriod == -1) firstPeriod = post.body.length;
        var firstExclamation = post.body.indexOf('!');
        if (firstExclamation == -1) firstExclamation = post.body.length;
        var firstQuestion = post.body.indexOf('?');
        if (firstQuestion == -1) firstQuestion = post.body.length;
        description = post.body.substring(0, Math.min (firstPeriod, firstExclamation, firstQuestion));
        return '<div class="col-lg-4 col-md-4"><div class="fh5co-blog animate-box"><a href="#"><img class="img-responsive" src="' + post.photopath + '" alt=""></a><div class="blog-text"><h3><a href=""#>' + post.title + '</a></h3><span class="posted_on">' + post.timestamp + '</span><p>' + description + '</p><a href="#" class="btn btn-primary">Read More</a></div></div></div>';
    },

    displayPlainHtml:function (fileName, res) {
        fs.readFile(__dirname + "\\website\\" + fileName +".html", 'utf8', (err, data) => {  
            if (err) throw err;
            res.send (data);
        });
    },

    displayIndex:function(res) {
        fs.readFile(__dirname + "\\website\\index_top.html", 'utf8', (err, dataTop) => {
            if (err) throw err;

            res.write(dataTop);

            dbmanager.getPosts ((results) => {
                
                results.forEach(element => {
                    res.write(this.createBlogPostHTML(element));                    
                });
                
                fs.readFile(__dirname + "\\website\\index_bottom.html", 'utf8', (err, dataBottom) => {
                    if (err) throw err;
                    res.write(dataBottom);
                    res.end();
                });
            });
        });
    },

    displayBlog:function(res) {
        fs.readFile(__dirname + "\\website\\blog_top.html", 'utf8', (err, dataTop) => {
            if (err) throw err;

            res.write(dataTop);

            dbmanager.getPosts ((results) => {
                
                results.forEach(element => {
                    res.write(this.createBlogPostHTML(element));                    
                });
                
                fs.readFile(__dirname + "\\website\\blog_bottom.html", 'utf8', (err, dataBottom) => {
                    if (err) throw err;
                    res.write(dataBottom);
                    res.end();
                });
            });
        });
    },

    displayInsertPage:function(req, res) {
        if (req.query.key != global.key) throw 'INVALID KEY!'; 
        fs.readFile(__dirname + "\\website\\insertforum.html", 'utf8', (err, data) => {
            if (err) throw err;
            res.send(data);
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
                module.exports.displayBlog(res);
                break;
        }
    }
};