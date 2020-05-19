import moduleConfig from "../config/ModuleConfig";

class StudentRepository {
  constructor(firebase) {
    this.firebase = firebase;
  }

  getAttendanceByWeek(school) {
    return this.firebase
      .getAllStudents()
      .get()
      .then((querySnapshot) => {
        let attendancePromises = querySnapshot.docs
          .map((doc) => {
            if (school.students.includes(doc.data().githubName)) {
              return doc.ref.collection("attendence").get();
            }
          })
          .filter((doc) => {
            return doc !== undefined;
          });

        return Promise.all(attendancePromises);
      })
      .then((results) => {
        let attendedData = [];
        let lateAttendedData = [];

        results.forEach((i) => {
          i.docs.forEach((y) => {
            let week = y.data()["week"];
            let attended =
              y.data()["result"] === "Yes" || y.data()["result"] === "Late";
            let lateAttended = y.data()["result"] === "Late";

            if (attended) {
              if (attendedData[week] === undefined) {
                attendedData[week] = 1;
              } else {
                attendedData[week] += 1;
              }
            }

            if (lateAttended) {
              if (lateAttendedData[week] === undefined) {
                lateAttendedData[week] = 1;
              } else {
                lateAttendedData[week] += 1;
              }
            }
          });
        });

        let ordered = [];

        moduleConfig.forEach((week, i) => {
          if (attendedData[week] !== undefined) {
            ordered[i] = {
              name: week,
              students: attendedData[week],
              lateStudents: lateAttendedData[week],
            };
          }
        });

        console.log(ordered);
        return ordered;
      });
  }

  getAttendanceForStudentByName(githubName, onRetrieve) {
    this.getDetailsForStudentByName(githubName, "attendance", onRetrieve);
  }

  getHomeworkForStudentByName(githubName, onRetrieve) {
    this.getDetailsForStudentByName(githubName, "homework", onRetrieve);
  }

  getDetailsForStudentByName(githubName, type, onRetrieve) {
    this.firebase
      .getStudentByName(githubName)
      .get()
      .then(function (querySnapshot) {
        return querySnapshot.docs[0].ref;
      })
      .then(function (doc) {
        return doc.collection(type).get();
      })
      .then(function (querySnapshot) {
        let results = querySnapshot.docs.map(function (doc) {
          return doc.data();
        });

        onRetrieve(results);
      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
  }
}

export default StudentRepository;
