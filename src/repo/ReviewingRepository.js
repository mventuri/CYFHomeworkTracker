class ReviewingRepository {
  constructor(firebase) {
    this.firebase = firebase;
  }

  reportRepoInReview(id, name) {
    let data = { id: id, name: name, time: Date.now() };
    this.firebase.inUseData().doc(id.toString()).set(data);
  }

  registerForDataChanges(onChange) {
    this.inUseData.doc("SF").onSnapshot(function (querySnapshot) {
      let array = querySnapshot.map(function (doc) {
        return { id: doc.id, name: doc.name, time: doc.time };
      });

      onChange(array);
    });
  }
}

export default ReviewingRepository;
