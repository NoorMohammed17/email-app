// import React from 'react';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import classes from "./EmailBody.module.css"

const EmailBody = () => {
  const [content, setContent] = useState();
  const selectedEmail = useSelector((state) => state.emails.selectedEmail);
  // const selectedId = selectedEmail.id;

  const fetchHandler = () => {
    fetch(`https://flipkart-email-mock.vercel.app/?id=${selectedEmail && selectedEmail.id}`)
      .then((response) => response.json())
      .then((data) => setContent(data.body))
      .catch((error) => console.error('Error fetching emails:', error));
  };
  fetchHandler();
  console.log(selectedEmail)
  return (
    <div>
      {selectedEmail && (
        <div className={classes.actions}>
          <div className={classes.circle} >
            {selectedEmail.from.name.toUpperCase()[0]}
          </div>

          {/* <div className={classes.circle}></div> */}
          <div>
            <div className={classes.flex}>
              <h3>{selectedEmail.subject}</h3>
              <button >Mark as Favorite</button>
            </div>
            <p>{selectedEmail.date}</p>

            <div style={{ fontSize: '18px' }} dangerouslySetInnerHTML={{ __html: content }}></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmailBody;
