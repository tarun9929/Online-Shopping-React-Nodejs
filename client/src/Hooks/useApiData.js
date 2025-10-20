import axios from "../Utils/Axios";
import { useState, useEffect } from "react";

export default function useApiData() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  return async (email, password, callback) => {
    try {
      console.log("Hello");
      const response = await callback(email, password);

      setData(response);
      setLoading(false);

      return { data, loading };
    } catch (error) {
      console.log(error);
    }
  };
}
