const express = require('express');
const app = express();
const path = require('path');
const port = 8000;
const bodyParser = require('body-parser');

/* Set up View engine */
app.set('view engine' , 'ejs');

/* Set Up views */
app.set('views', path.join(__dirname, 'views'));

/* Set up static files */
app.use(express.static('assets'));

app.use(express.urlencoded());

app.get('/' , function(req , res){
    res.render('home' , {
        title : "To Do APP",
        taskList :[
            {
                id:1
            },
            {
                id:1
            },
            {
                id:1
            }
        ]
    })
})

app.listen(port , function(err){
    if(err)
    {
        console.log("Error : " , err);
    }
    else
    {
        console.log("Server is running on port : " << port);
        console.log("http://127.0.0.1:" + port);
    }
})
