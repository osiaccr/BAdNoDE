const formidable = require('formidable');
const mailer = require (__dirname + '/Mailer.js');
const fs = require('fs');

module.exports = {
    // Create Posts Table
    createPostsTable:function(callback) {
        let sql = `SHOW TABLES LIKE posts`;
        global.db.query (sql, (err, result) => {
            if ((typeof result) == 'undefined') {
                let sql = 'CREATE TABLE posts(id int(10) PRIMARY KEY AUTO_INCREMENT, title VARCHAR(255), body mediumtext, photopath VARCHAR(255), timestamp VARCHAR(255))';
                global.db.query(sql, (err, result) => {
                    if (err) throw err;
                    callback (false);
                });
            }
            else {
                callback(true);
            }
            
        });
    }

    //Form Post 
    ,formPost:function(req, res) {
        module.exports.getLatestPost ( (result) => {
            var form = new formidable.IncomingForm();
            var photoPath;
            var fields = Object;
            
            form.parse(req);

            form.on('fileBegin', (name, file) => {
                console.log(name);
                if (result.length != 0) {
                    photoPath = __dirname + '\\website\\images\\' + 'blogimage_' + (result[0].id + 1) + '.' + file.name.split('.')[1];
                    file.path = photoPath;
                    photoPath = '\\images\\' + 'blogimage_' + (result[0].id + 1) + '.' + file.name.split('.')[1];
                }
                else {
                    photoPath = __dirname + '\\website\\images\\' + 'blogimage_1.' + file.name.split('.')[1];
                    file.path = photoPath;
                    photoPath = '\\images\\' + 'blogimage_1.' + file.name.split('.')[1];
                }
            });

            fields.photoPath = photoPath;

            form.on('field', (name, value) => {
                switch (name) {
                    case 'title':
                        fields.title = value;
                        break;
                    case 'body':
                        fields.body = value;
                        break;
                }
            });

            form.on('end' ,() => {
                module.exports.insertPost(fields.title, fields.body, photoPath.replace(/\\/g, '/'), () => {
                    res.send("Post Succesfully added")
                });
            });
        });
    }

    

    //Insert Post
    ,insertPost:function(name, body, photoPath, callback) {
        var dateObj = new Date();
        var month = dateObj.getMonth();
        const monthNames = ['Ianuarie', 'Februarie', 'Martie', 'Aprilie', 'May', 'Iunuie', 'Iulie', 'August', 'Septembrie', 'Octombrie', 'Noembrie', 'Decembrie'];
        var day = dateObj.getDate();
        var year = dateObj.getFullYear();
        var newdate = year + " " + monthNames[month] + " " + day;

        let sql = `INSERT INTO posts (title, body, timestamp, photopath) VALUES ('${name}', '${body}', '${newdate}', '${photoPath}')`;
        global.db.query(sql, (err, results) => {
            if (err) throw err;

            // Sending an e-mail to all subscribers of the newsletter
            module.exports.getSubscribers ((subscribers) => {
                console.log (subscribers);
                var fields = {
                    title: name,
                    body: body,
                    id: results.insertId,
                };
                mailer.sendNewsletter (fields, subscribers);
            });

            callback ();
        });
    }

    //Get Posts 
    ,getPosts:function(callback) {
        let sql ='SELECT * FROM posts';
        return global.db.query(sql, (err, results) => {
            if (err) throw err;
            callback(results);
        });
    }

    //Get Post
    ,getPost:function(id, callback) {
        if (typeof id !== 'number') {
            let err = '404 Wrong Post Number'
            callback (undefined, err);
            return;
        }

        let sql =`SELECT * FROM posts WHERE id = ${id}`;
        let query = global.db.query(sql, (err, result) => {
            if (err) throw err;
            if (result.length == 0) {
                err = '404 Wrong Post Number';
                callback (result, err);
            }
            else {
                err = undefined;
                callback (result, err);
            }
        });
    }

    //Get Latest Post
    ,getLatestPost:function(callback) {
        let sql ='SELECT * FROM posts ORDER BY id DESC LIMIT 0, 1';
        return global.db.query(sql, (err, result) => {
            if (err) throw err;
            callback (result);
        });
    }

    //Update Post
    ,updatePost:function(req, res) {
        let sql = `UPDATE posts SET title = '${req.params.newTitle}' WHERE id = ${req.params.id}`;
        let query = global.db.query(sql, (err, result) => {
            if (err) throw err;
            console.log (result);
            res.send("Post updated");
        });
    }

    //Delete Post
    ,deletePost:function(req, res, callback) {
        module.exports.getPost(Number(req.query.id), (result) => {
            fs.unlink(__dirname + '/website' + result[0].photopath, (err) => {
                if (err) throw err;
                let sql =`DELETE FROM posts WHERE id = ${req.query.id}`;
                let query = global.db.query(sql, (err, result) => {
                    if (err) throw err;
                    console.log (result);
                    callback ();
                });
            });
        });
    }

    //Create Subscribers Table
    ,createSubscribersTable:function(callback) {
        let sql = `SHOW TABLES LIKE 'subscribers'`;
        global.db.query(sql, (err, result) => {
            if ((typeof reult) == 'undefined') {
                let sql = 'CREATE TABLE subscribers(id int(10) PRIMARY KEY AUTO_INCREMENT, email VARCHAR(255), hash INT(20))';
                global.db.query(sql, (err, result) => {
                    if (err) throw err;
                    callback (false);
                });
            }
            else {
                callback (true);
            }
        });
    }

    //Delete Subscribers Table
    ,deleteSubscribersTable:function(req, res) {
        let sql = 'DROP TABLE subscribers';
        global.db.query(sql, (err, result) => {
            if(err) throw err;
            console.log(result);
            res.send('Subscriber Talbe Deleted...');
        }); 
    }

    //Add Subscriber
    ,insertSubscriber:function(email, callback) {
        let sql = `INSERT INTO subscribers (email, hash) VALUES ('${email}', FLOOR(RAND()*1000000))`;
        global.db.query(sql, (err, results) => {
            if (err) throw err;
            callback();
        });
    }

    //Delete Subscriber
    ,deleteSubscriber:function(email, hash, callback) {
        let sql = `DELETE FROM subscribers WHERE email = '${email}' AND hash = ${hash}`;
        global.db.query(sql, (err, results) => {
            if (err) throw err;
            callback(results);
        });
    }

    //Get Subscribers
    ,getSubscribers:function(callback) {
        let sql = `SELECT * FROM subscribers;`;
        global.db.query(sql, (err, results) => {
            if (err) throw err;
            callback(results);
        });
    }
};
