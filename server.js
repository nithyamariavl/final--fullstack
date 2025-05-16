const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public'))); // for your HTML/CSS

// Connect to MongoDB
mongoose.connect('mongodb+srv://nithyamariavl:nithya@cluster0.wukklrf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

// Define a schema
const ContactSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    subject: String,
    message: String
});

const Contact = mongoose.model('Contact', ContactSchema);

// POST route to receive form datas
app.post('/contact', async (req, res) => {
    try {
        const contact = new Contact(req.body);
        await contact.save();
        res.status(200).send({ message: 'Form submitted successfully' });
    } catch (error) {
        res.status(500).send({ error: 'Something went wrong' });
    }
});
const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  }
});

const Project = mongoose.model('Project', projectSchema);

// POST route to add new project
app.post('/api/projects', async (req, res) => {
  const { title, description } = req.body;

  try {
    const newProject = new Project({ title, description });
    await newProject.save(); // Save to MongoDB
    res.status(201).json({ message: 'Project added successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to add project' });
  }
});

// GET route to fetch all projects (optional)
app.get('/api/projects', async (req, res) => {
  try {
    const projects = await Project.find(); // Fetch all projects
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch projects' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});