var express = require ('express');
var session = require ('express-session');
var bodyParser = require ('body-parser');
var path = require ('path');
var multer = require ('multer');

/* import axios from 'axios'; */
var cors = require ('cors');
var app = express ();
app.use (cors ());
const sqlite3 = require ('sqlite3').verbose ();

app.use (bodyParser.urlencoded ({extended: true}));

app.use (express.static ('public'));
var storage = multer.diskStorage ({
  destination: function (requests, file, cb) {
    cb (null, 'public/');
  },
  filename: function (requests, file, cb) {
    cb (null, Date.now () + '-' + file.originalname);
  },
});
var upload = multer ({storage: storage});
/* var upload = upload.single('selectedFile'); */
/* let db = new sqlite3.Database(':memory:'); */
let db = new sqlite3.Database (
  '/home/myuser/Desktop/nodelogin/nodelogin.db',
  err => {
    if (err) {
      return console.error (err.message);
    }
    console.log (
      'Connected to the nodelogin SQli00000000000000000000000000000000000000000te database.'
    );
  }
);

app.use (
  session ({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
  })
);

/* app.use(bodyParser.urlencoded({ extended: true})); */
//app.use(bodyParser.json());
/* var j = bodyParser.json(); */

app.get ('/', function (request, response) {
  response.sendFile (path.join (__dirname + '/login.html'));
});

app.use (function (req, res, next) {
  res.header ('Access-Control-Allow-Origin', '*');

  res.header (
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );

  next ();
});

app.post ('/auth', function (request, response) {
  var username = request.body.username;
  var password = request.body.password;
  var event = 'E';
  if (username && password) {
    let sql = 'SELECT * FROM acounts WHERE username = ? AND password = ?';

    db.get (sql, [username, password], function (error, row) {
      if (row.username != username || row.password != password){
		return console.error (error.message);
		request.session.loggedin = false;

	  }
      else {
        request.session.loggedin = true;
        request.session.username = username;

        response.redirect ('/event');
        return row
          ? console.log (row.username, row.password)
          : console.log (`No user found with the username ${username}`);
      }
    });
  }
});

/* 
            console.log('results =>', results)
            console.log(error);
            console.log(fields); */
/* 	if (row  !== undefined && row.length > 0) {
		request.session.loggedin = true;
		request.session.username = username;
		response.redirect('/home');
	} */
/* 		else {
			response.send('Incorrect Username and/or Password!');
		}			
		response.end();
	});
} else {
	response.send('Please enter Username and Password!');
	response.end();
}
}); */

app.get ('/event', function (request, response) {
 
  let event_sql = 'SELECT * FROM event_gallary WHERE `usage(E,G,B)`="E"';
  db.all (event_sql, function (error, row) {
    if (error) {
      response.send (error.message);
    } else {
      /* 	response.sendFile('control.html', {root: __dirname });  */
      response.send (row);
      /* response.send(row); */
      /* 	console.log("it's me stupid response",response); */
    }

    /* else {
					response.send('Please login to view this page!');
				}
				  */
  });
}
);






app.get ('/gallery', function (request, response) {
 
  let event_sql = 'SELECT * FROM event_gallary WHERE `usage(E,G,B)`="G"';
  db.all (event_sql, function (error, row) {
    if (error) {
      response.send (error.message);
    } else {
      /* 	response.sendFile('control.html', {root: __dirname });  */
      response.send (row);

      /* response.send(row); */
      /* 	console.log("it's me stupid response",response); */
    }

    /* else {
					response.send('Please login to view this page!');
				}
				  */
  });
}
);


app.get ('/music', function (request, response) {
 
  let event_sql = 'SELECT * FROM music';
  db.all (event_sql, function (error, row) {
    if (error) {
      response.send (error.message);
    } else {
      /* 	response.sendFile('control.html', {root: __dirname });  */
      response.send (row);
      /* response.send(row); */
      /* 	console.log("it's me stupid response",response); */
    }

    /* else {
					response.send('Please login to view this page!');
				}
				  */
  });
}
);

/* app.get ('/gallery', function (requests, response) {

	
  let event_sql = 'SELECT * FROM event_gallary WHERE `usage(E,G,B)`="G"';
  db.all (event_sql, [], function (error, row) {
    if (error) {
      response.send ('Please login to view this page!');
      return console.error (error.message);
    } else {
      response.send (row);
      console.log (row);
      /* 	row.forEach(row => console.log(row.title, row.description)); 
    }
  });
});


 */

//queries for the database
app.post ('/insert', upload.single ('selectedFile'), function (
  requests,
  response
) {
  const title = requests.body.title;
  const description = requests.body.description;
  const date = requests.body.date;
  const file_N = requests.file.filename;
  console.log ('Insert ', date);
  console.log ('Insert ', title);
  console.log ('Insert ', description);
  console.log ('Insert ', file_N);

  if (!file_N) {
    console.log ('upload image please ');
    console.log (title, description);
  } else {
    console.log('Run query');
    let event_sql =
      'INSERT INTO event_gallary (title,description, image_path, date, `usage(E,G,B)`) VALUES (?, ?, ?, ?,?)';

    db.run (event_sql, [title, description, file_N, date, 'E'], function (
      error,
      row
    ) {
      if (error) {
        response.send ('Please login to view this page!');
        return console.error ('here', error.message);
      } else {
        response.send ('data inserted into database');
        console.log (this);
        // row.forEach(row => console.log(row.title, row.description));
      }
    });
  }
});


app.post ('/insertgalary', upload.single ('selectedFile'), function (
  requests,
  response
) {
  const title = requests.body.title;
  const description = requests.body.description;
  const date = requests.body.date;
  const file_N = requests.file.filename;
  console.log ('Insert ', date);
  console.log ('Insert ', title);
  console.log ('Insert ', description);
  console.log ('Insert ', file_N);

  if (!file_N) {
    console.log ('upload image please ');
    console.log (title, description);
  } else {
    console.log('Run query');
    let event_sql =
      'INSERT INTO event_gallary (title,description, image_path, date, `usage(E,G,B)`) VALUES (?, ?, ?, ?,?)';

    db.run (event_sql, [title, description, file_N, date, 'G'], function (
      error,
      row
    ) {
      if (error) {
        response.send ('Please login to view this page!');
        return console.error ('here', error.message);
      } else {
        response.send ('data inserted into database');
        console.log (this);
        // row.forEach(row => console.log(row.title, row.description));
      }
    });
  }
});

app.post ('/insertMusic', upload.single ('selectedFile'), function (
  requests,
  response
) {
  const name= requests.body.name;
 
  const music_N = requests.file.filename;
 
  console.log (name, music_N);
  if (!music_N) {
    console.log ('upload image please ');
   
  } else {
    console.log('Run query');
    let event_sql =
      'INSERT INTO music (song_name,song_path) VALUES (?, ?)';

    db.run (event_sql, [name, music_N], function (
      error,
      row
    ) {
      if (error) {
        console.log (name, music_N);
        response.send ('Please login to view this page!');
        return console.error ('here the wrong', error.message);
      } else {
        console.log (name, music_N);
        response.send ('data inserted into database');
        console.log (this);
        // row.forEach(row => console.log(row.title, row.description));
      }
    });
  }
});





app.post ('/delete', function (requests, response) {

  var id=requests.body.index
  console.log("helllllooooooo",id);
  let delete_sql = 'DELETE FROM event_gallary WHERE id = ?';
  db.run (delete_sql, [ id ], function (error, row) {
    if (error) {
      response.send ('Please login to view this page!');
      return console.error ('heeell',error.message);
       
    } else {
      response.send (row);
      console.log ('hellooo row',row);
      console.log('Helllooo id',id );
      // db.close();
      /* 	row.forEach(row => console.log(row.title, row.description)); */
    }
  });
});



app.listen (4000);
