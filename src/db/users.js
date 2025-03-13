import { db } from "../services/firebase";
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";

const addTarea = async (userId, tarea) => {
    const tareaId = uuidv4();
    await addDoc(collection(db, `usuarios/${userId}/tareas`), { id: tareaId, ...tarea });
};

const getTareas = async (userId) => {
    const snapshot = await getDocs(collection(db, `usuarios/${userId}/tareas`));
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

const updateTarea = async (userId, tareaId, newData) => {
    const tareaRef = doc(db, `usuarios/${userId}/tareas`, tareaId);
    await updateDoc(tareaRef, newData);
};

const deleteTarea = async (userId, tareaId) => {
    const tareaRef = doc(db, `usuarios/${userId}/tareas`, tareaId);
    await deleteDoc(tareaRef);
};

const addExamen = async (userId, examen) => {
    const examenId = uuidv4();
    await addDoc(collection(db, `usuarios/${userId}/examenes`), { id: examenId, ...examen });
};

const getExamenes = async (userId) => {
    const snapshot = await getDocs(collection(db, `usuarios/${userId}/examenes`));
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

const updateExamen = async (userId, examenId, newData) => {
    const examenRef = doc(db, `usuarios/${userId}/examenes`, examenId);
    await updateDoc(examenRef, newData);
};

const deleteExamen = async (userId, examenId) => {
    const examenRef = doc(db, `usuarios/${userId}/examenes`, examenId);
    await deleteDoc(examenRef);
};

const addAnotacion = async (userId, anotacion) => {
    const anotacionId = uuidv4();
    await addDoc(collection(db, `usuarios/${userId}/anotaciones`), { id: anotacionId, ...anotacion });
};

const getAnotaciones = async (userId) => {
    const snapshot = await getDocs(collection(db, `usuarios/${userId}/anotaciones`));
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

const updateAnotacion = async (userId, anotacionId, newData) => {
    const anotacionRef = doc(db, `usuarios/${userId}/anotaciones`, anotacionId);
    await updateDoc(anotacionRef, newData);
};

const deleteAnotacion = async (userId, anotacionId) => {
    const anotacionRef = doc(db, `usuarios/${userId}/anotaciones`, anotacionId);
    await deleteDoc(anotacionRef);
};

export {
    addTarea, getTareas, updateTarea, deleteTarea,
    addExamen, getExamenes, updateExamen, deleteExamen,
    addAnotacion, getAnotaciones, updateAnotacion, deleteAnotacion
};

