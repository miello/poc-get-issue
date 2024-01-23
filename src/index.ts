import { container } from "./container"
import { ProbotApp } from "./probot"

const probotApp = await container.get<ProbotApp>()
console.log(probotApp.hello())