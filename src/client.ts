import type { ProbotOctokitType } from "./probot"

export class GithubClient {
  constructor (private octokit: ProbotOctokitType) {
    console.log(this.octokit)
  }
}