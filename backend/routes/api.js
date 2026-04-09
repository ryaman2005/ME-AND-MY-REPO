const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Contact = require('../models/Contact');
const path = require('path');

// @route   POST /api/contact
// @desc    Submit a contact form message
router.post('/contact', async (req, res) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      return res.status(503).json({ success: false, message: 'Database not connected. Please configure your MongoDB.' });
    }

    const { name, email, subject, message } = req.body;
    
    const newContact = new Contact({
      name,
      email,
      subject,
      message
    });

    await newContact.save();
    
    res.status(201).json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Contact Form Error:', error);
    res.status(500).json({ success: false, message: 'Server Error. Please try again later.' });
  }
});

// @route   GET /api/download-cv/:type
// @desc    Download CV in pdf or docx
router.get('/download-cv/:type', (req, res) => {
  const { type } = req.params; // 'pdf' or 'docx'
  
  if (type === 'pdf') {
    const file = path.join(__dirname, '..', 'public', 'Resume.pdf');
    res.download(file, 'Aryaman_Bohra_CV.pdf');
  } else if (type === 'docx') {
    const file = path.join(__dirname, '..', 'public', 'Resume.docx');
    res.download(file, 'Aryaman_Bohra_CV.docx');
  } else {
    res.status(400).json({ success: false, message: 'Invalid file type requested.' });
  }
});

module.exports = router;
