var nodemailer = require('nodemailer');

module.exports = {
    composeEmail:function(fields) {
        var string = 
`Mesaj nou primit de la ${fields.firstname} ${fields.lastname}, cu adresa de e-mail ${fields.email}.

Subiectul mesajului:
${fields.subject}

Continutul mesajului:
${fields.message}

!!Atentie!! NU raspundeti la acest e-mail, trimite-ti raspunsul la adresa de e-mail a clientului`;
        return string;
    }

    ,composeNewsletter:function(fields, client) {
        var string =
`Din partea ExvalCont:

${fields.title}

${fields.body}

Pentru mai multe informatii: http://localhost:3000/blogpost?id=${fields.id}

Pentru a va dezabona de la newsletter va rog sa accesati: http://localhost:3000/deletesubscriber?email=${client.email}&hash=${client.hash}`;
        return string;
    }

    ,sendMessage:function(fields) {
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
            user: 'exvalcont.emailmanager@gmail.com',
            pass: 'caiso2010'
            }
        });
        
        var mailOptions = {
            from: 'exvalcont.emailmanager@gmail.com',
            to: 'osiaccr@gmail.com',
            subject: `Mesaj nou trimis pe siteul ExvalCont!`,
            text: module.exports.composeEmail(fields)
        };

        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
            console.log(error);
            } else {
            console.log('Email sent: ' + info.response);
            }   
        });
    }

    ,sendNewsletter:function(fields, destinations) {
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
            user: 'exvalcont.emailmanager@gmail.com',
            pass: 'caiso2010'
            }
        });

        destinations.forEach((element) => {
            var mailOptions = {
                from: 'exvalcont.emailmanager@gmail.com',
                to: element.email,
                subject: `Newsletter ExvalCont - ${fields.title}`,
                text: module.exports.composeNewsletter(fields, element)
            };
    
            transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                console.log(error);
                } else {
                console.log('Email sent: ' + info.response);
                }   
            });
        });
    }
};