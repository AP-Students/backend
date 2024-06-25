import { logger } from "./lib/logger";
import { app } from "./app";
import { env } from "@lib/env";

const port = env.PORT;

app.listen(port, () =>
  logger.info(`Example app listening at http://localhost:${port}`),
);
