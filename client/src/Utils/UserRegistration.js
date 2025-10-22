import axios from "./Axios";

export class User {
  async registerUser(email, password) {
    if (!email || !password) throw Error("All fields are required");

    try {
      this.response = await axios.post(
        "/api/v1/users/register",
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
    } catch (error) {
      throw new Error(error.message);
      console.log(error);
    }

    return this.response;
  }
}

const user = new User();

export default user;
