import { db } from "@lib/db";
import { users } from "@lib/db/schema";

import { Route, Get, Controller, SuccessResponse } from "tsoa";

@Route("test")
export class TestController extends Controller {
  @Get("db")
  @SuccessResponse("200", "OK")
  public async dbTest() {
    try {
      const result = await db
        .insert(users)
        .values({ name: "Test User" })
        .returning();
      return result;
    } catch {
      return "Failed to insert data";
    }
  }
}
