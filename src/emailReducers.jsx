import { FETCH_EMAILS, FETCH_EMAIL_BODY, MARK_AS_FAVORITE } from './emailActions';

// Initial state
const initialState = {
  emails: [],
  selectedEmail: null,
};

// Reducer function
export const emailReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EMAILS:
      return {
        ...state,
        emails: action.emails,
      };
    case FETCH_EMAIL_BODY:
      return {
        ...state,
        selectedEmail: action.emailBody,
      };
    case MARK_AS_FAVORITE:
      // Implement the logic to mark an email as favorite here
      return state;
    default:
      return state;
  }
};
