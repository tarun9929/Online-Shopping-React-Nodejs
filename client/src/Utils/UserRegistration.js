import axios from "./Axios";

export class User {
  registerUser(email, password) {
    return async () => {
      if (!email || !password) throw Error("All fields are required");

      console.log(email, password);

      const response = await axios.post(
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

      console.log(response.data);
    };
  }
}

const user = new User();

export default user;
