const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
  title: String,
  company: String,
  description: String,
  location: String,
  category: String,
  jobType: String,
  salary: String,
  postedDate: String,
  applicants: Number,
}, {
  timestamps: true // ✅ Adds createdAt and updatedAt
});

module.exports = mongoose.model('Job', JobSchema);
