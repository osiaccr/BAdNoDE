const sha256 = require('js-sha256');
const adminpagebuilder = require(__dirname + '/AdminPageBuilder.js');
const dbmanager = require('../DBManager');

module.exports = {
    checkLoginKey:function (key) {
        var dateObj = new Date();
        var month = dateObj.getMonth() + 1;
        var day = dateObj.getDate();
        var year = dateObj.getFullYear();
        var newdate = '' + year + month + day;

        var correctKey = sha256(newdate);

        return key.toUpperCase () == correctKey.toUpperCase ();
    },

    processRequest:function (req, res) {
        if (module.exports.checkLoginKey (req.params.loginkey)) {
            module.exports.displayRequest (req, res);
        }
        else {
            res.send ('404!');
        }
    },

    processPostToInserPost:function (req, res) {
        if (module.exports.checkLoginKey (req.params.loginkey)) {
            dbmanager.formPost (req, res);
        }
        else {
            res.send ('404!');
        }
    },

    displayRequest:function (req, res) {
        switch (req.params.pagename) {
            case 'index':
                res.send (adminpagebuilder.createIndexPage ());
                break;
            case 'insertpost':
                res.send (adminpagebuilder.createInsertPostPage ());
                break;
            case 'showposts':
                dbmanager.getPosts ((results) => {
                    res.send (adminpagebuilder.createPostsPage (results));
                });
                break;
            case 'showsubscribers':
                dbmanager.getSubscribers ((results) => {
                    res.send (adminpagebuilder.createSubscribersPage (results));
                });
                break;
            case 'deletepost':
                dbmanager.deletePost (req, res, () => {res.send('Post Sters <br><a href = "showposts">Inapoi</a>')});
                break;
            case 'deletesubscriber':
                dbmanager.deleteSubscriber (req.query.email, req.query.hash, () => {res.send('Abonat Sters <br><a href = "showsubscribers">Inapoi</a>')});
                break;
            default:
                res.send ('404!');
                break;
        }
    }
};