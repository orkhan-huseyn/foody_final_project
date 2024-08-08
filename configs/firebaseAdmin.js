import admin from 'firebase-admin';
import { applicationDefault } from 'firebase-admin/app';

admin.initializeApp({
    credential: applicationDefault(),
    projectId: 'foody-app-fe87a',
});

export const storage = admin.storage();
export const firestore = admin.firestore();

export default admin;
