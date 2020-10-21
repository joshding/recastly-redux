import Redux from 'redux';
//TODO: define a reducer for the currentVideo field of our state.
var currentVideoReducer = (state, action) => {

  switch (action.type) {
  case 'CHANGE_VIDEO':
    let result = {};
    if (state !== undefined) {
      result = { ...state };
      result.currentVideo = action.video;
      return result;
    } else {
      return state = action.video;
    }
  default:
    return null;
  }
};

export default currentVideoReducer;
