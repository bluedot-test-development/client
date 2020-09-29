import axios from 'axios';
const UPLOAD_URI = `/video`;

class UserService {
  static async uploadVideo(formData) {
    const { data } = await axios({
      method: 'POST',
      url: `${UPLOAD_URI}/`,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      data: formData,
      userId: 14,
    });

    return data;
  }
}

export default UserService;
