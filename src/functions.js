import firebase from 'firebase';

export const helloWorld = firebase.functions().httpsCallable('helloWorld');
