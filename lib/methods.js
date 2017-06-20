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
});
