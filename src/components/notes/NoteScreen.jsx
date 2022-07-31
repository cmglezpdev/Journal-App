import { NotesAppbar } from "./NotesAppbar"

export const NoteScreen = () => {
  return (
    <div className="notes__main-content">

        <NotesAppbar />

        <div className="notes__content">
            <input 
                type="text"
                placeholder="Some awesome title"
                className="notes__title-input"
                autoComplete="off"
            />

            <textarea
                placeholder="What happend today?"
                className="notes__textarea"
            ></textarea>

            <div className="notes__image">
                <img 
                    src="https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                    alt="image_journal_app" 
                />
            </div>

        </div>

    </div>
  )
}
