// Replace 'YOUR_API_KEY' with your actual Google Translate API key
const apiKey = 'YOUR_API_KEY';

// Function to translate text using Google Translate API
async function translateText() {
    const sourceText = document.getElementById('sourceText').value;
    const sourceLanguage = document.getElementById('sourceLanguage').value;
    const targetLanguage = document.getElementById('targetLanguage').value;

    const apiUrl = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;

    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            q: sourceText,
            source: sourceLanguage,
            target: targetLanguage,
        }),
    });

    const data = await response.json();

    const translatedText = data.data.translations[0].translatedText;
    document.getElementById('translatedText').innerHTML = translatedText;
}