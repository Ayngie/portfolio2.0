import { getGitRepos } from "../services/gitrepos";
import type { IRepo } from "../models/IRepo";
import { createGitReposHTML } from "./createGitReposHTML";

export async function getRepos() {
  let repos: IRepo[] = [];
  repos = await getGitRepos();
  console.log(repos);
  createGitReposHTML(repos);
}
