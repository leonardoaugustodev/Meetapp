import produce from 'immer';

const INITIAL_STATE = {
  meetup: {
    id: null,
    title: null,
    description: null,
    date: new Date().toISOString(),
    location: null,
    image_id: null,
  },
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@meetup/EDIT_MEETUP_REQUEST': {
        draft.meetup = action.payload.meetup;
        break;
      }
      case '@meetup/DELETE_MEETUP_REQUEST': {
        break;
      }
      case '@meetup/NEW_MEETUP_REQUEST': {
        break;
      }
      default:
        return state;
    }
  });
}
