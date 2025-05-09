import ky from "ky";

export const apiClient = () => {
  return ky.create({
    prefixUrl: "http://localhost:5000/api",
  });
};
