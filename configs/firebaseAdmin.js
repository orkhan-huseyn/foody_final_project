import admin from 'firebase-admin';
import { applicationDefault } from 'firebase-admin/app';

if (admin.apps.length === 0) {
    admin.initializeApp({
        credential: applicationDefault(),
        projectId: 'foody-app-ab94d',
    });
}
export const storage = admin.storage();
export const firestore = admin.firestore();

export default admin;
