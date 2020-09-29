import axios from "axios";
const USER_URI = `/user`;

class UserService {
  static async getArtists() {
    const { data } = await axios({
      method: "GET",
      url: `${USER_URI}/artist`,
    });

    return data;
  }
  static async getPosts() {
    const { data } = await axios({
      method: "GET",
      url: `${USER_URI}/post`,
    });
    return data;
  }
  static async getUser() {
    const { data } = await axios({
      method: "GET",
      url: `${USER_URI}/profile`,
    });
    return data;
  }
}

export default UserService;
