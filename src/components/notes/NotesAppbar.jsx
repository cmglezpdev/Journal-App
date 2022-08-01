import moment from "moment";
import { useDispatch, useSelector } from "react-redux"
import { startSaveNote, startUploading } from "../../actions/notes";

export const NotesAppbar = () => {
 
  const dispatch = useDispatch();
  const { active:note } = useSelector(state => state.notes);

  const handleSave = () => {
    dispatch( startSaveNote(note) );
  }

  const handlePictureUpload = () => {
    document.querySelector('#file-selector').click();
    console.log('handlePictureUpload');
  }

  const handleFileChange = ( event ) => {
    
    const file = event.target.files[0];
    if( file ) {
      dispatch( startUploading(file) );
    }
  }


  return (
    <div className="notes__appbar">
        <span>{ moment(note.date).format('MMMM Do YYYY, h:mm:ss a') }</span>

        <input 
          type="file" 
          style={{display:'none'}}
          onChange= {handleFileChange}
          id="file-selector"
        />

        <div>
            <button 
              className="btn"
              onClick={handlePictureUpload}
            >
                Picture
            </button>

            <button 
              className="btn"
              onClick={() => handleSave()}
            >
                Save
            </button>
        </div>

    </div>
  )
}
