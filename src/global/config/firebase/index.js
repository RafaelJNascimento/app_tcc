import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyAK-ohL-IAlCoKYXi6ZwOfIGyI8VfoU_3w",
    authDomain: "projetotcc-65692.firebaseapp.com",
    projectId: "projetotcc-65692",
    storageBucket: "projetotcc-65692.appspot.com",
    messagingSenderId: "812895007577",
    appId: "1:812895007577:web:66c7d68c476cbbb9759248",
    measurementId: "G-5J5SQ5ZGCJ"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export async function getEstabelecimentos(db) {
    const colunas = collection(db, 'estabelecimentos');
    const dados = await getDocs(colunas);
    const estabelecimentosList = dados.docs.map(doc => doc.data());
    return estabelecimentosList;
}
