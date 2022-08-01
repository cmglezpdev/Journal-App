import moment from "moment" 
import { useDispatch } from "react-redux";
import { activeNote } from "../../actions/notes";


export const JournalEntry = ({ id, title, body, date, url }) => {
   
    const noteDate = moment(date);
    const dispatch = useDispatch();

    const handleEntryClick = () => {
        dispatch( activeNote(id, {body, title, date, url}) )
    }

    const getTitle = () => {
        if( title.length > 20 ) 
            return title.substring(0, 20) + "...";
        return title;
    }

    const getBody = () => {
        if( body.length > 100 ) 
            return body.substring(0, 100) + "...";
        return body;
    }


    return (
        <div 
            className="journal__entry pointer animate__animated animate__backInUp animate__faster" 
            onClick={handleEntryClick}>
        {   
         url && <img 
                    src={url}
                    style={{objectFit:'cover'}}
                    alt="journal entry"
                    className="journal__entry-picture"
                />
        }
        
            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    { getTitle() }
                </p>

                <p className="journal__entry-content">
                   { getBody() }
                </p>
            </div>

            <div className="journal__entry-date-box">
                <span>{ noteDate.format('dddd') }</span>
                <h4>{ noteDate.format('Do') }</h4>
            </div>
        </div>
    )
}
