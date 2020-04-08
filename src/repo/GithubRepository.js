import { Octokit } from "@octokit/rest";

class GithubRepository {
  constructor(authRepo) {
    this.authRepo = authRepo;
  }

  setToken() {
    return this.authRepo.getToken().then((token) => {
      this.octokit = new Octokit({
        userAgent: "CyfHomeworkTracker",
        auth: token,
        log: {
          debug: () => {},
          info: () => {},
          warn: console.warn,
          error: console.error,
        },
        request: {
          agent: undefined,
          fetch: undefined,
          timeout: 0,
        },
      });
    });
  }

  getAllHomework(repoName) {
    return this.octokit.pulls
      .list({
        owner: "CodeYourFuture",
        repo: repoName,
        per_page: 100,
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getHomeworkToReview(repoName) {
    return this.getAllHomework(repoName)
      .then(({ data }) => {
        return data.filter((pull) => {
          return this.isNotReviewed(pull);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  isNotReviewed(pullRequest) {
    let labels = pullRequest.labels;

    return (
      labels === undefined ||
      labels.length === 0 ||
      pullRequest.labels.some((label) => {
        return label.name.toLowerCase() === "reviewed";
      }) === false
    );
  }
}

export default GithubRepository;
