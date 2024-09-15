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

// neyse
// hele ki, signin signout bashin burax
// qalan sheyleri ishle :D
// tokensiz zadsiz
// buna baxariq
// niyese mende ishleyir bu normal
// eyni kod, eyni Nodejs versiyasi, eyni firebase admin versiyasi
// Ibrahimde de yoxlayin
// onda da eger eyni error verise, "Caller does not have permission to use project"
// onda uje bilmirem ne meseledi
