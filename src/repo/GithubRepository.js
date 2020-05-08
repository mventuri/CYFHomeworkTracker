import { Octokit } from "@octokit/rest";

class GithubRepository {
  constructor(authRepo) {
    this.authRepo = authRepo;
  }

  setToken() {
    return this.authRepo.getToken().then((token) => {
      this.token = token;
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

  getToken() {
    return this.token;
  }

  getStudent(studentName) {
    return this.octokit.users.getByUsername({
      username: studentName,
    });
  }

  getAllHomework(repoName, pageNo) {
    return this.octokit.pulls
      .list({
        owner: "CodeYourFuture",
        repo: repoName,
        per_page: 100,
        page: pageNo,
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getHomeworkToReview(repoName, pageNo) {
    return this.getAllHomework(repoName, pageNo)
      .then(({ data }) => {
        return data.filter((pull) => {
          return this.isNotReviewed(pull);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getAllHomeworkToReview(repoNamesArray) {
    let promises = repoNamesArray.map((repoName) => {
      return this.getHomeworkToReview(repoName, 1);
    });

    let promisesPageTwo = repoNamesArray.map((repoName) => {
      return this.getHomeworkToReview(repoName, 2);
    });

    let promisesPageThree = repoNamesArray.map((repoName) => {
      return this.getHomeworkToReview(repoName, 3);
    });

    promises = promises.concat(promisesPageTwo);

    promises = promises.concat(promisesPageThree);

    return Promise.all(promises).then((data) => {
      console.log(data);
      return this.flatten(data);
    });
  }

  getAllHomeworkToReviewForSchool(repoNamesArray, school) {
    return this.getAllHomeworkToReview(repoNamesArray).then((data) => {
      if (school === "Unknown") {
        return data;
      } else {
        return data.filter((homework) => {
          return school.students.contains(homework.user.login);
        });
      }
    });
  }

  flatten(arr) {
    return arr.reduce((flat, toFlatten) => {
      return flat.concat(
        Array.isArray(toFlatten) ? this.flatten(toFlatten) : toFlatten
      );
    }, []);
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
