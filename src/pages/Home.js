import React, { Fragment } from 'react';
import firebase from 'firebase';

const Home = () => (
  <Fragment>
    <h1>Home</h1>
  </Fragment>
);

export default Home;

const helloWorld = firebase.functions().httpsCallable('helloWorld');
helloWorld().then((result) => {
  console.log(result.data.text);
}).catch(({ code, message, details }) => {
    //
});