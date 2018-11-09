import firebase from 'firebase/app';
import 'firebase/functions';

export const helloWorld = firebase.functions().httpsCallable('helloWorld');
export const generateFullNames = firebase.functions().httpsCallable('generateFullNames');
export const getFullName = firebase.functions().httpsCallable('getFullName');
