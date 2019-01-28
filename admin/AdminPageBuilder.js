module.exports = {

    createIndexPage:function () {
        const HTML = 

`<html>
    <head>

    </head>

    <body>
        <ul>
            <li>
                <a href = "insertpost">Adauga post</a>
            </li>
            <li>
                <a href = "showposts">Vezi tabela posturi</a>
            </li>
            <li>
                <a href = "showsubscribers">Vezi tabela abonati<a>
            </li>
            <li>
                <a href = "createsubsciberstable">Creaza Tabela Abonati</a>
            </li>
            <li>
                <a href = "createpoststable">Creaza Tabela Posturi</a>
            </li>
        </ul>
    </body>
</html>`

        return HTML;
    },

    createPostsPage:function (posts) {
        var HTML = 

`<html>
    <head>
        <style>
             th, td {
                border-style: solid;
                border-width: 2px;
                padding: 2px;
            }
        </style>
    </head>

    <body>
        <table>
            <tr>
                <th>ID</th>
                <th>TITLU</th>
                <th>CONTINUT</th>
                <th>ADRESA POZA</th>
                <th>DATA</th>
            </tr>`;
    

        posts.forEach(element => {
            HTML += 
            `<tr>
                <td>${element.id}</td>
                <td>${element.title}</td>
                <td>${element.body}</td>
                <td>${element.photopath}</td>
                <td>${element.timestamp}</td>
                <td  style = "border-width: 0px; background-color: red"><a href = "deletepost?id=${element.id}">DELETE</a></td>
            </tr>`
        });
       
HTML +=
        `</table>
        <br><a href = "index">Inapoi</a>
    </body>
</html>`;

        return HTML;
    },

    createInsertPostPage:function () {
        const HTML = `
<!DOCTYPE html>
<html>
<head>
    <title>Simple Upload Example</title>
</head>
<body>
<form action="insertpost" enctype="multipart/form-data" method="post">
    <p>Titlu</p>
    <input type="text" name="title"><br>
    <p>Continut</p>
    <textarea type="text" name="body" rows = "10" cols = "70"></textarea><br>
    <p>Imagine</p>
    <input type="file" name="photo" multiple>
    <input type="submit" value="Upload">
</form>
<br><a href = "index">Inapoi</a>
</body>
</html>`;
        return HTML;
    },

    createSubscribersPage:function (subscribers) {
    var HTML = 

`<html>
    <head>
        <style>
                th, td {
                border-style: solid;
                border-width: 2px;
                padding: 2px;
            }
        </style>
    </head>

    <body>
        <table>
            <tr>
                <th>ID</th>
                <th>EMAIL</th>
                <th>HASH</th>
            </tr>`;
    

        subscribers.forEach(element => {
            HTML += 
            `<tr>
                <td>${element.id}</td>
                <td>${element.email}</td>
                <td>${element.hash}</td>
                <td  style = "border-width: 0px; background-color: red"><a href = "deletesubscriber?email=${element.email}&hash=${element.hash}">DELETE</a></td>
            </tr>`
        });
        
HTML +=
        `</table>
        <br><a href = "index">Inapoi</a>
    </body>
</html>`;

        return HTML;
    }

};