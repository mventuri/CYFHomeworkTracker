import { Octokit } from "@octokit/rest";

class GithubRepository {
  constructor(authRepo) {
    this.authRepo = authRepo;
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

  getHomeworkToReview(repoName) {
    return this.authRepo
      .getToken()
      .then(token => {
        return this.octokit.pulls.list({
          owner: "CodeYourFuture",
          repo: repoName,
          per_page: 100,
          auth: token
        });
      })
      .then(({ data }) => {
        return data.filter(pull => {
          return (
            pull.labels.some(label => {
              // return label.name === "to-review";
              return true;
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
