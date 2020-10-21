import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


//TODO:  Write an asynchronous action to handle a video search!
var handleVideoSearch = (q) => {

  var allData;
  searchYouTube({YOUTUBE_API_KEY, q}, (data) => {
    allData = data;
  });

  return () => {
    return {type: 'VIDEO_SEARCH', videos: allData };
  };
};

export default handleVideoSearch;
