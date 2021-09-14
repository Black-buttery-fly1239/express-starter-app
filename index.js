const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const session = require('express-session');
const pizzaPerfect = require('./pizza');

const app = express();

const pizzaperfect = pizzaPerfect()

const pg = require('pg');
const Pool = pg.Pool;

// should we use a SSL connection
let useSSL = false;
const local = process.env.LOCAL || false;
if (process.env.DATABASE_URL && !local) {
	useSSL = true;
}

const PORT = process.env.PORT || 3017;

// enable the req.body object - to allow us to use HTML forms
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// enable the static folder...
app.use(express.static('public'));

// app.use(session({
// 	secret: ' ',
// 	resave: false,
// 	saveUninitialized: true
// }));

// add more middleware to allow for templating support

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//configure http-session middleware
app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 } }))

// let counter = 0;

app.get('/', function (req, res) {
	res.render('index', {
		total: pizzaperfect.getPizza(),
		small: pizzaperfect.getSmallPizza(),
		medium: pizzaperfect.getLargePizza(),
        large: pizzaperfect.getMediumPizza(),
	});
	// console.log(getPizza());
});

app.post('/action', function (req, res) {
    // console.log(req.body.actionType);

    pizzaperfect.addTotal(req.body.pizzaType)
    res.redirect('/');
    
	console.log(req.body.pizzaType)
});

app.get('/theOrder', function (req, res){
	// const theActions = pizzaperfect.Detail(),
	console.log(pizzaperfect.pizza());
res.render('theOrders', {
    actions: pizzaperfect.Detail(pizzaperfect.pizza())
});
// console.log(Detail());
});




app.post('/pizza', function (req, res) {
    // console.log(req.body.actionType);

   
    res.redirect('/');
    
});

// app.post('/count', function (req, res) {

// 	if (!req.session.counter) {
// 		req.session.counter = 0;
// 	}
// 	req.session.counter++;
// 	res.redirect('/')
// });

// app.post('/reset', function (req, res) {
// 	req.session.counter = 0;

// 	res.redirect('/')
// });
// start  the server and start listening for HTTP request on the PORT number specified...
app.listen(PORT, function () {
	console.log(`App started on port ${PORT}`)
});