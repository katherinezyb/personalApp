Meteor.publish('people',function(){
  return People.find();
})

Meteor.publish('feedback',function(){
  return Feedback.find();
})
