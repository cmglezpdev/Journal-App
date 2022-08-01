import Swal from 'sweetalert2';
import { db } from "../firebase/firebase-config";
import { loadNotes } from "../helpers";
import { fileUpload } from '../helpers/fileUpload';
import { types } from "../types";


export const startNewNote = () => {
    return async ( dispatch, getState ) => {
        const { uid } = getState().auth;
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }
        
        const doc = await db.collection(`${uid}/journal/notes`).add( newNote );

        dispatch( activeNote(doc.id, newNote) );
    dispatch( addNewNote(doc.id, newNote) );
    }
}


export const activeNote = ( id, note ) => ({
    type: types.notesActive,
    payload: {
        id,
        ...note
    }
})

export const addNewNote = (id, note) => ({
    type: types.notesAddNew,
    payload: {
        id,
        ...note
    }
})

export const setNotes = ( notes ) => ({
    type: types.notesLoad,
    payload: notes
})

export const startLoadingNotes = ( uid ) => {
    return async ( dispatch ) => {
        const notes = await loadNotes(uid);
        dispatch( setNotes( notes ) )
    }
}

export const startSaveNote = ( note ) => {
    return async ( dispatch, getState ) => {
        
        const { uid } = getState().auth;
        const noteToFirestore = { ...note, date: new Date().getTime() };
        
        if( !noteToFirestore.url ) delete noteToFirestore.url;
        dispatch(activeNote( note.id, noteToFirestore ));

        delete noteToFirestore.id;
        
        await db.doc(`${uid}/journal/notes/${note.id}`).update( noteToFirestore );
        dispatch( refreshNote(note.id, noteToFirestore) );
        Swal.fire('Saved', note.title, 'success');
    }
}


export const refreshNote = ( id, note ) => ({
    type: types.notesUpdate,
    payload: {
        id, 
        note: {
            id,
            ...note
        }
    } 
})


export const startUploading = (file) => {
    return async ( dispatch, getState ) => {

        const { active:activeNote } = getState().notes;

        Swal.fire({
            title: 'Uploading...',
            text: 'Please wait...',
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            }
        });

        const fileUrl = await fileUpload( file );
        activeNote.url = fileUrl;
        
        dispatch( startSaveNote( activeNote ) )
        Swal.close();
    }   
}

export const startDeleting = ( id ) => {

    return async ( dispatch, getState ) => {
        const {uid} = getState().auth;
        
        Swal.fire({
            title: 'Deleting...',
            text: 'Please wait...',
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            }
        });
        await db.doc(`${uid}/journal/notes/${id}`).delete();
        dispatch( deleteNote(id) );
        
        Swal.fire('Deleted', '', 'success');
    }
}

export const deleteNote = (id) => ({
    type: types.notesDelete,
    payload: id
})


export const notesLogout = () => ({
    type: types.notesLogoutCleaning,
    payload: {
        notes: [],
        active: null
    }
})