/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

const get = (address: string): any => {
  return axios.get(address);
};
const post = () => {
  console.log();
};

export { get, post };
