import createServer from "./utils/server";

const app = createServer();
const port: string | number = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is listen on port ${port}`);
});
