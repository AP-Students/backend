import { Get, Post, Route, Tags, Body, Controller, Patch, Path } from "tsoa";
import fs from "fs";
import { exec } from "child_process";

type Article = {
  body: string; // markdown
  title: string; // plaintext
  type: string; //type of question (mcq or multi-answer)
  options: {
    value: string; // plaintext
    id: string; // uuid
  }[]; // postgres array
  correct: string[]; // postgres array of uuid's referring to $.options
  // metadata for Article
  course_id: string; // uuid -> $course.id relation or, alternatively, an array of course ids (talk to evalprime) that refer to all courses that this question applies to
  unit_ids: string[]; // array of uuid's, same shpiel but for units
  subunit_ids: string[]; // array of uuid's, same shpiel but for subunits
};

async function logUpdate(articleId: string, changes: Article) {
  const logEntry = `Update on ${new Date().toISOString()}: Article ${articleId} updated with ${JSON.stringify(changes)}\n`;
  fs.appendFileSync("updateLog.txt", logEntry);

  // Stage and commit the log file using Git
  exec(
    'git add updateLog.txt && git commit -m "Logged update for article ${articleId}"',
    (error /*, stdout, stderr */) => {
      if (error) {
        // console.error(`exec error: ${error}`);
        return;
      }
      // console.log(`stdout: ${stdout}`);
      // console.error(`stderr: ${stderr}`);
    },
  );
}

@Route("articles")
@Tags("Article")
export class ArticlesController extends Controller {
  @Get("/")
  public async getArticles(): Promise<Article[]> {
    return [
      /* Insert article interface after extracting from the database */
    ];
  }

  @Post("/")
  public async createArticle(@Body() requestBody: Article): Promise<Article> {
    return requestBody;
  }

  @Patch("/{id}")
  public async updateArticle(
    @Path() id: string,
    @Body() requestBody: Article,
  ): Promise<Article> {
    // Logic to update the article

    await logUpdate(id, requestBody).catch(error => console.error(`Error logging update: ${error}`)); // Assuming requestBody as the source of changes

    return requestBody;
  }
}
