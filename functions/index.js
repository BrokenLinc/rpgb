const functions = require('firebase-functions');
const cors = require('cors')({ origin: true });
const sampleSize = require('lodash/sampleSize');

const names = [
  'Abraham',
  'Billy',
  'Chris',
  'Damion',
  'Edgar',
  'Fonzie',
  'Gillian',
  'Helena',
  'Ignacio',
  'Juniper',
  'Kendrick',
];

exports.helloWorld = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    response.status(201).json({ data: 'Hello from Firebase (and CORS)!' });
  });
});

// Call in shell via generateFullNames.post().json({data:{count:5}})
exports.generateFullNames = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    const data = sampleSize(names, request.body.data.count);
    // console.log(data);
    response.status(201).json({ data });
  });
});
