import moduleConfig from "../config/ModuleConfig";

class StudentRepository {
  constructor(firebase) {
    this.firebase = firebase;
  }

  postStudentNote(githubName, note) {
    this.getStudentDetailsByName(githubName).then((snapshot) => {
      snapshot.ref
        .collection("notes")
        .doc()
        .set({ created: Date.now(), note: note });
    });
  }

  getStudentsFromSchool(schoolName) {
    return this.firebase.getStudentsInSchool(schoolName).get();
  }

  getAllHomework(school) {
    return this.firebase
      .getAllStudents()
      .get()
      .then((querySnapshot) => {
        let attendancePromises = querySnapshot.docs
          .map((doc) => {
            if (school.students.includes(doc.data().githubName)) {
              return doc.ref.collection("homework").get();
            } else {
              return null;
            }
          })
          .filter((doc) => {
            return doc !== null;
          });

        return Promise.all(attendancePromises);
      })
      .then((results) => {
        let allHomework = [];

        results.forEach((i) => {
          i.docs.forEach((y) => {
            allHomework.push(y.data());
          });
        });

        return allHomework;
      });
  }

  getAttendanceByWeek(school) {
    return this.firebase
      .getStudentsInSchool(school.name)
      .get()
      .then((querySnapshot) => {
        let attendancePromises = querySnapshot.docs.map((doc) => {
          return doc.ref.collection("attendence").get();
        });

        return Promise.all(attendancePromises);
      })
      .then((results) => {
        let attendedData = [];
        let lateAttendedData = [];
        let notAttendedData = [];

        results.forEach((i) => {
          i.docs.forEach((y) => {
            let week = y.data()["week"];
            let attended =
              y.data()["result"] === "Yes" || y.data()["result"] === "Late";
            let lateAttended = y.data()["result"] === "Late";
            let notAttended = y.data()["result"] === "No";

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

            if (notAttended) {
              if (notAttendedData[week] === undefined) {
                notAttendedData[week] = 1;
              } else {
                notAttendedData[week] += 1;
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
              notAttended: notAttendedData[week],
            };
          }
        });
        return ordered;
      });
  }

  getAttendanceForStudentByName(githubName) {
    return this.getDetailsForStudentByName(githubName, "attendence");
  }

  getHomeworkForStudentByName(githubName) {
    return this.getDetailsForStudentByName(githubName, "homework");
  }

  getDetailsForStudentByName(githubName, type) {
    return this.getStudentDetailsByName(githubName)
      .then(function (doc) {
        return doc.ref.collection(type).get();
      })
      .then(function (querySnapshot) {
        return querySnapshot.docs.map(function (doc) {
          return doc.data();
        });
      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
  }

  getStudentDetailsByName(githubName) {
    return this.firebase
      .getStudentByName(githubName)
      .get()
      .then(function (querySnapshot) {
        return querySnapshot.docs[0];
      });
  }
}

export default StudentRepository;
