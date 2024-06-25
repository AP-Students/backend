import { logger } from "@lib/logger";
import { app } from "./app.js";
import { env } from "@lib/env.js";

const port = env.PORT;

app.listen(port, () =>
  logger.info(`Example app listening at http://localhost:${port}`),
);
