import { Container } from "@softnetics/what-the-dep";
import { ProbotApp, type ProbotOctokitType } from "./probot";
import { run } from "probot";
import { GithubClient } from "./client";

export const container = new Container()
  .register<ProbotApp>()
  .register<ProbotOctokitType>(async (get) => {
    const probotApp = await get<ProbotApp>();
    const probotOctokit = await run(probotApp.app);
    return probotOctokit.probotApp.auth();
  })
  .register<GithubClient>();
