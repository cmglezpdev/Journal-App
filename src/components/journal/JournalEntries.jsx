import { useSelector } from "react-redux";
import { JournalEntry } from "./JournalEntry";

export const JournalEntries = () => {

    const { notes: entries } = useSelector(state => state.notes);
    entries.sort((a, b) => a.date > b.date ? -1 : 1);


    return (
        <div className="journal__entries">
            {
                entries.map( entry => {
                    return (
                        <JournalEntry 
                            key={ entry.id } 
                            { ...entry }
                        />
                    )
                })
            }
        </div>
    )
}
