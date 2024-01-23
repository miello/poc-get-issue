import { GithubClient } from "./client";
import { container } from "./container";

console.log(await container.get<GithubClient>())