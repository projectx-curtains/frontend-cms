import axios from "axios";

import config from "@constants/config";

export const axiosInstance = axios.create(config);
