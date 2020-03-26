import { Octokit } from "@octokit/rest";

class GithubRepository {
  constructor() {
    this.octokit = new Octokit({
      userAgent: "CyfHomeworkTracker",
      log: {
        debug: () => {},
        info: () => {},
        warn: console.warn,
        error: console.error
      },
      request: {
        agent: undefined,
        fetch: undefined,
        timeout: 0
      }
    });
  }

  getReposToReview(repoName) {
    return this.octokit.pulls
      .list({
        owner: "CodeYourFuture",
        repo: repoName,
        per_page: 100
      })
      .then(({ data }) => {
        return data.filter(pull => {
          return (
            pull.labels.some(label => {
              return label.name === "to-review";
            }) > 0
          );
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
}

export default GithubRepository;
