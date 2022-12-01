const express = require(`express`);
const bodyParser = require(`body-parser`);
const myModules = require(`${__dirname}/myModules.js`);
const ejs = require(`ejs`);

const port = 3000;
const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(`public`));

const defaultListItems = [];
const workListItems = [];

app.get(`/`, (req, res) => {
  const currentDate = myModules.getDate(`numeric`, `long`, `long`);
  res.render(`index`, { listTitle: currentDate, item: defaultListItems });
});

app.post(`/`, (req, res) => {
  let item = req.body.newItem;
  let listName = req.body.listName;
  if (listName === `Work`) {
    workListItems.push(item);
    res.redirect(`/work`);
  } else {
    defaultListItems.push(item);
    res.redirect(`/`);
  }
});

app.get(`/work`, (req, res) => {
  res.render(`index`, { listTitle: `Work`, item: workListItems });
});

app.get(`/about`, (req, res) => {
  res.render(`about`);
});

app.listen(port, () => {
  console.log(`Server started listening on port ${port}`);
});
