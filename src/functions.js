import firebase from 'firebase/app';
import 'firebase/functions';

export const helloWorld = firebase.functions().httpsCallable('helloWorld');
