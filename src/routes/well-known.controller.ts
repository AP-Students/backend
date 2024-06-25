import { Route, Get, Controller, SuccessResponse } from "tsoa";

@Route(".well-known")
export class WellKnownController extends Controller {
  @Get("health-check")
  @SuccessResponse("200", "OK")
  public async healthCheck(): Promise<string> {
    return "OK";
  }
}
