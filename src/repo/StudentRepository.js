class StudentRepository {
  constructor(firebase) {
    this.firebase = firebase;
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
