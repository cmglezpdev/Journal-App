import { useDispatch, useSelector } from "react-redux"
import { NotesAppbar } from "./NotesAppbar"
import { useForm } from '../../Hooks/useForm';
import { useEffect, useRef } from "react";
import { activeNote, startDeleting } from "../../actions/notes";


export const NoteScreen = () => {

    const { active:note } = useSelector(state => state.notes);
    const dispatch = useDispatch();
    
    const [ formValues, handleInputChange, reset ] = useForm( note );
    const { body, title, url, id } = formValues;

    const activeId = useRef( note.id );

    useEffect(() => {
       
        if( note.id !== activeId.current ) {
            reset( note );
            activeId.current = note.id;
        }   

    }, [note, reset]);

    useEffect(() => {
        dispatch( activeNote(id, { ...formValues }) )
    }, [formValues, id, dispatch]);


    const handleDeleteNote = () => {
        dispatch( startDeleting(id) );
    }


  return (
    <div className="notes__main-content">

        <NotesAppbar />

        <div className="notes__content">
            <input 
                type="text"
                placeholder="Some awesome title"
                className="notes__title-input"
                autoComplete="off"
                value={title}
                name="title"
                onChange={handleInputChange}
            />

            <textarea
                placeholder="What happend today?"
                className="notes__textarea"
                value={body}
                name="body"
                onChange={handleInputChange}
            ></textarea>
            {
                url && <div className="notes__image">
                    <img 
                        src={ url } 
                        alt="image_journal_app" 
                    />
                </div>
            }
        </div>

        <button
            className="btn-danger"
            onClick={handleDeleteNote}
        >
            Delete
        </button>
    </div>
  )
}
