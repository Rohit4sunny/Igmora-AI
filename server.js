const express = require('express');
const fetch = require('node-fetch');
const app = express();
const PORT = 3000;

// Replace with your actual OpenAI API key
const apiKey = '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';

app.use(express.json());

app.post('/api/openai', async (req, res) => {
  try {
    const apiUrl = 'https://api.openai.com/v1/models/text-davinci-003/completion';
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify(req.body)
    });
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
