Meteor.methods({
  'info.insert':function(info) {
    People.remove({owner:info.owner});
    People.insert(info);

  },

  'info.remove':function(info){
    console.log("userid="+this.userId);
    console.log('info.owner='+info.owner);
    console.dir(info);
    if(this.userId==info.owner)
      People.remove(info._id);
  },

  'trip.insert':function(trip) {
    Feedback.remove({owner:trip.owner});
    Feedback.insert(trip);
  },

  'trip.remove':function(trip) {
    console.log("userid="+this.userId);
    console.log('trip.owner='+trip.owner);
    console.dir(trip);
    if(this.userId==trip.owner)
      Feedback.remove(trip._id);
  }
});
