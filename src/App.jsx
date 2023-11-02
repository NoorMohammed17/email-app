
//import { store } from './store'; // Import your Redux store
import EmailList from './EmailList'; // Import your EmailList component
import EmailBody from './EmailBody'; // Import your EmailBody component
import "./App.css"
import { useSelector } from 'react-redux';

function App() {
  const selectedEmail = useSelector((state) => state.emails.selectedEmail);
  return (
  
      <div className="App">
        <h1>Email Client</h1>
        <div className={ selectedEmail ? `email-client-container` :`email-one`} >
          <div className="email-list-container">
            <EmailList />
          </div>
          {selectedEmail &&
          <div className="email-body-container">
            <EmailBody />
          </div>
}
        </div>
      </div>
 
  );
}

export default App;
