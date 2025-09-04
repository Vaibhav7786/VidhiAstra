import Contact from '../models/Contact.js';

// @desc    Submit a new contact form
// @route   POST /api/contact
// @access  Public
export const createContact = async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;
    console.log('req.body : ', req.body);

    const newContact = new Contact({
      name,
      email,
      phone,
      subject,
      message,
    });

    await newContact.save();
    res
      .status(201)
      .json({ message: 'Contact form submitted successfully!', contact: newContact });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// @desc    Get all contact form submissions
// @route   GET /api/contact
// @access  Private (Admin only)
export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
