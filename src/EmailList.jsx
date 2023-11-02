import { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setEmails, selectEmail, markAsFavorite } from './emailSlice';
import classes from "./EmailList.module.css";
import Card from './UI/Card';

const EmailList = () => {
  const dispatch = useDispatch();
  const emails = useSelector((state) => state.emails.list);

  // useEffect(() => {
  //   // Fetch emails and set them in the store
  //   fetch('https://flipkart-email-mock.now.sh/')
  //     .then((response) => {
  //       response.json()
  //     console.log(response)})
  //     .then((data) => dispatch(setEmails(data)))
  //     .catch((error) => console.error('Error fetching emails:', error));
  // }, [dispatch]);


  const fetchEmailsHandler = useCallback(async () => {
    try {
      const response = await fetch('https://flipkart-email-mock.vercel.app/');
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const res = await response.json();
      const data = await res.list;
      console.log(data)

      dispatch(setEmails(data));
    } catch (error) {
      console.error('Error fetching emails:', error);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchEmailsHandler();
  }, [fetchEmailsHandler]);

  const handleEmailClick = (email) => {
    dispatch(selectEmail(email));
  };

  return (
    <div className={classes.emails}>
      <ul >
        {emails.map((email) => (
          <li className={classes.item} key={email.id} onClick={() => handleEmailClick(email)}>
            <Card>
              <div className={classes.flex}>
                <div className={classes.circle}>
                  {email.from.name.toUpperCase()[0]}
                </div>
                <div>
                  <header>
                    <h3>From : {email.from.name.toUpperCase()} {email.from.email} </h3>
                    <h3>Subject : {email.subject}</h3>

                  </header>
                  <p style={{fontSize:'18px'}}>{email.short_description}</p>
                  <div className={classes.actions}>
                    <p>{email.date}</p>
                    <button onClick={() => dispatch(markAsFavorite(email.id))}>Mark as Favorite</button>
                  </div>

                </div>

              </div>


            </Card>
          </li>




          // <li key={email.id} onClick={() => handleEmailClick(email)}>
          //   {email.from.email} - {email.subject}
          //   <button onClick={() => dispatch(markAsFavorite(email.id))}>Mark as Favorite</button>
          // </li>
        ))}
      </ul>
    </div>
  );
};

export default EmailList;
