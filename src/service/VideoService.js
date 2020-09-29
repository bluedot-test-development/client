import axios from 'axios';
const USER_URI = `/video`;

class VideoService {
  static async getVideos() {
    const { data } = await axios({
      method: 'GET',
      url: `${USER_URI}/14`,
    });
    return data;
  }
}

export default VideoService;
