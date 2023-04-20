export const configLoader = () => {
  return {
    port: process.env.PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    dbport: process.env.DB_PORT,
    host: process.env.DB_HOST,
  };
};
