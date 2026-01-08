import app from "./app";
import config from "./config/env.config";

app.listen(config.PORT, () => {
  console.log(`Server is running on http://localhost:${config.PORT}`);
  console.log(`Environment: ${config.NODE_ENV}`);
});
