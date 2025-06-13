import fetch from 'node-fetch';

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxZnhFoQHKXZcopE2wOaIOES9AdGT6698WU7J302_aAIFbZE9Qc_-ydiRJ32Xa4WTNiMQ/exec';

export async function handler(event, context) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    // Log the incoming event body
    console.log('Incoming event.body:', event.body);

    const data = JSON.parse(event.body);

    // Log the data being sent to Apps Script
    console.log('Data sent to Apps Script:', data);

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    });

    const text = await response.text();
    console.log('Apps Script response:', text);

    let result;
    try {
      result = JSON.parse(text);
    } catch (e) {
      result = { error: 'Invalid JSON from Apps Script', raw: text };
    }

    return {
      statusCode: 200,
      body: JSON.stringify(result)
    };
  } catch (err) {
    console.error('Netlify function error:', err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message })
    };
  }
}