const functions = require('firebase-functions');
const cors = require('cors')({ origin: true });
const times = require('lodash/times');

const getFullName = require('./src/getFullName');

const generators = {
  getFullName: require('./src/getFullName'),
};

exports.helloWorld = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    response.status(201).json({ data: 'Hello from Firebase (and CORS)!' });
  });
});

// Call in shell via generateFullNames.post().json({data:{count:10}})
exports.generateFullNames = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    const data = times(request.body.data.count, getFullName);
    // console.log(data);
    response.status(201).json({ data });
  });
});

// Call in shell via getFullName()
exports.getFullName = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    response.status(201).json({ data: getFullName() });
  });
});

// Call in shell via generator.post().json({data:{type:'getFullName',props:{nickname:'Elfo'}}})
exports.generator = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    const { type, props } = request.body.data;
    const fn = generators[type];
    console.log(fn(props));
    response.status(201).json({ data: fn ? fn(props) : '' });
  });
});
