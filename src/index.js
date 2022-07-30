// import ReactDOM from 'react-dom';
import { JournalApp } from './JournalApp';
import { createRoot } from 'react-dom/client';
import './styles/styles.scss'

createRoot( document.querySelector("#root") ).render( <JournalApp /> );

// ReactDOM.render(
//     <JournalApp />,
//     document.querySelector('#root')
// );