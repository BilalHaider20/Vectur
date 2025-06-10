const mongoose = require('mongoose');

const jobApplicationSchema = new mongoose.Schema({
name: {
    type: String,
    required: [true, 'Name is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
  },
  cnic: {
    type: Number,
    required: [true, 'CNIC is required'],
    unique: true,
  },
  yearsOfExperience: {
    type: Number,
    required: [true, 'Years of experience is required'],
  },
  role:{
    type: String,
  },
  resume: {
    type: String,
    required: [true, 'Resume file is required'],
  },
});

module.exports = mongoose.models.JobApplication || mongoose.model('JobApplication', jobApplicationSchema);