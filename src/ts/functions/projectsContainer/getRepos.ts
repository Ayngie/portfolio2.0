import { gitHubApiRequest } from "../../services/gitHubApiRequest";
import type { IRepo } from "../../models/iRepo";
import { createHTMLForProjects } from "./createHTMLForProjects";
import { log } from "../../helpers/devHelpers";

export async function getRepos(): Promise<void> {
  let repos: IRepo[];
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // eslint-disable-next-line prefer-const
  repos = await gitHubApiRequest();
  log(repos);
  createHTMLForProjects(repos);
}
