import { Container } from "@softnetics/what-the-dep";
import { ProbotApp } from "./probot";
import { run } from "probot";

export const container = new Container().register<ProbotApp>()

const probotApp = await container.get<ProbotApp>();

const probotServer = await run(probotApp.app)
const router = probotServer.router('/hello')

router.get('/hello', (req, res) => {
  console.log(req, res)
})
