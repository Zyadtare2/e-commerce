import { apiClient } from "./apiClient";

const api = apiClient();

const signUp = async (
  name: string,
  email: string,
  password: string,
  rePassword: string
) => {
  try {
    const response = await api.post("auth/signUp", {
      json: { name, email, password, rePassword },
    });
    return await response.json(); // or response.json() depending on your API client
  } catch (error) {
    // Handle error appropriately
    console.error("Sign up failed:", error);
    throw error; // Re-throw the error if you want calling code to handle it
  }
};
const verifyOTP = async (email: string, OTP: string) => {
  try {
    const response = await api.post("auth/verifyOTP", {
      json: { email, OTP },
    });
    return response.json(); // or response.json() depending on your API client
  } catch (error) {
    // Handle error appropriately
    console.error("verification failed:", error);
    throw error; // Re-throw the error if you want calling code to handle it
  }
};
const login = async (email: string, password: string) => {
  try {
    const response = await api.post("auth/logIn", {
      json: { email, password },
    });
    return response.json(); // or response.json() depending on your API client
  } catch (error) {
    // Handle error appropriately
    console.error("login failed:", error);
    throw error; // Re-throw the error if you want calling code to handle it
  }
};

export { signUp, verifyOTP,login };
