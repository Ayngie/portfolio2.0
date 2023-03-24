import { gitHubApiRequest } from "../../services/gitHubApiRequest";
import type { IRepo } from "../../models/IRepo";
import { createHTMLForGitRepos } from "./createHTMLForGitRepos";
import { log } from "../../helpers/devHelpers";

export async function getRepos(): Promise<void> {
  let repos: IRepo[];
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  // eslint-disable-next-line prefer-const
  repos = await gitHubApiRequest();
  log(repos);
  createHTMLForGitRepos(repos);
}
