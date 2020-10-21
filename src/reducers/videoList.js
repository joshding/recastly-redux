import Redux from 'redux';
import sampleData from '../data/exampleVideoData.js';
//TODO: define a reducer for the videoList field of our state.
var videoListReducer = (state = sampleData, action) => {
  switch (action.type) {
  case 'CHANGE_VIDEO_LIST':
    var result = action.videos;
    return result;
  default: return [];
  }
};

export default videoListReducer;
