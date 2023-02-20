const AXIOS_DEV_CONFIG = {
  baseURL: "localhost:3000",
  timeout: 5000,
  headers: {
    Accept: "application/json",
  },
};

const AXIOS_CONFIG = {
  development: AXIOS_DEV_CONFIG,
};

export default AXIOS_CONFIG[import.meta.env.MODE as keyof typeof AXIOS_CONFIG];
