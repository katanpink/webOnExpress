const express = require('express');
const app = express();
const port = 3000

app.listen(port, () => {
    console.log('Server/App is running at ', port);
});


app.use(express.static('./public/images'));

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('home', { text: 'This is EJS' });
});
app.get('/about', (req, res) => {
    res.render('about', { text: 'About Page' });
})
app.get('/contact', (req, res) => {
    res.render('contact', { text: 'Contact Page' });
}) 
app.get('/home', (req, res) => {
    res.render('home', { text: 'Home Page' });
}) 
app.get('/portfolio', (req, res) => {
    res.render('portfolio', { text: 'Portfolio Page' });
}) 