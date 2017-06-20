// const feedback = [
//  {user:"Bob",fb:"I went to Europe and GlobalTour really gave me a lot of help!"},
//  {user:"Amy",fb:"I love this app!!"},
//  {user:"Lily",fb:"It will be better if it could include discounts"},
//  {user:"Alex",fb:"I would definitely recommend this app to my friend."},
// ]
//
// Template.share.helpers({
// 	feedbackData: feedback,
// })

Template.addfeedback.events({
  'click button'(elt,instance){
    const title = instance.$('#title').val();
    const content = instance.$('#content').val();
    console.log('adding '+title);
    instance.$('#title').val("");
    instance.$('#content').val("");
    Feedback.insert({title:title,content:content,
      owner:Meteor.userId(),
      createAt:new Date()});
    //People.insert({name,birthyear})
  }
})

Template.feedbackrow.helpers({
  isOwner() {console.dir(this);
    return this.fb.owner == Meteor.userId()}
})

Template.feedbackrow.events({
  'click span'(elt,instance){
    console.dir(this);
    console.log(this.fb._id);
    if(this.fb.owner==Meteor.userId()){
      Feedback.remove(this.fb._id);
    }else{
      alert("Why are you deleting someone else's feedback");
    }
  }
})

Template.showfeedback.helpers({
  feedbackData() {return Feedback.find()},
})
