const express = require('express');
const app = express();
app.use(express.json());
require('dotenv').config();
// const courses = [
//   { id: 1, name: 'course1' },
//   { id: 2, name: 'course2' },
//   { id: 3, name: 'course3' },
//   { id: 4, name: 'course4' },
// ];
app.get('/api/courses', (req, res) => {
  res.send(courses);
});
// app.get('/api/courses/:id', (req, res) => {
//   const course = courses.find((c) => c.id === parseInt(req.params.id));
//   if (!course) res.status(404).send('This course give not Found!');
//   res.send(course);
// });
const courses = [
  { id: 1, name: 'course1' },
  { id: 2, name: 'course2' },
  { id: 3, name: 'course3' },
  { id: 4, name: 'course4' },
  { id: 5, name: 'course5' },
  { id: 6, name: 'course6' },
];
app.get('/', (req, res) => {
  res.send('Hello World');
});
//});
// for copy below alt shift down / alt shift up
// for copy below alt shift down / alt shift up
// for copy below alt shift down / alt shift up
// app.get('/api/courses/:id', (req, res) => {
//   res.send(req.params.id);
// });
app.get('/api/courses/:id', (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) {
    res.status(404).send('This course id with given was not found!');
  }
  res.send(course);
});
app.put('/api/courses/:id', (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  course.name = req.body.name;
  res.send(course);
});
app.post('/api/courses', (req, res) => {
  if (!req.body.name || req.body.name.length < 3) {
    res.status(404).send('name is required and min 3 character');
    return;
    // npm joi for validation large data
    // npm i joi@13.1.0
    // const Joi = require('joi)
    // const schema ={ name : Joi.string().min(3)())}
    // const result = Joi.validate(req.body, schema)
    //console.log(result);
  }
  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };
  courses.push(course);
  res.send(course);
});
app.delete('/api/courses/:id', (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) {
    res.status(404).send('This course id with given was not found!');
    const index = courses.indexOf(course);
    courses.splice(index, 1);
    res.send(course);
  }
});
// app.get('/api/posts/:year/:month', (req, res) => {
//   res.send(req.params);
// });
// for query parameters
// app.get('/api/posts/:year/:month', (req, res) => {
//   res.send(req.query);
// });
// app.put();
// app.delete();
// app.post();
// export PORT = 5000 OR WINDOW  set PORT = 5000;
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listen on port ${port}...`);
});
