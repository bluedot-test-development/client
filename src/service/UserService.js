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
}

export default UserService;
