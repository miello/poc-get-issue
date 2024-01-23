import type { Probot, ProbotOctokit } from "probot"

export type ProbotOctokitType = InstanceType<typeof ProbotOctokit>

export class ProbotApp {
  constructor() {}

  hello() {
    console.log('hello')
  }

  async app(app: Probot) {    
    app.on("projects_v2_item", async (context) => {
      console.log(context.payload.action);
    });

    app.on("issues.opened", async (context) => {
      console.log(context, context.payload);
    });
  }
}