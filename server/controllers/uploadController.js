const uploadLogo = (req, res) => {
  if (req.file) {
    res.json({
      message: 'File uploaded successfully',
      filePath: `/uploads/${req.file.filename}`, // Path relative to server/public
    });
  } else {
    res.status(400).json({ message: 'No file uploaded or invalid file type' });
  }
};

export { uploadLogo };
