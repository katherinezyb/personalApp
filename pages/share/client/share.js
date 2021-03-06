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
    var trip = {
      title:title,
      content:content,
      owner:Meteor.userId()
    };

    var x = document.getElementById('agree');
    if (x.checked){
      Meteor.call('trip.insert',trip);
      console.log('adding '+title);
      instance.$('#title').val("");
      instance.$('#content').val("");
      $('input:checkbox').removeAttr('checked');
    }else{
      alert("You must agree to publish your feedback.")
    }

  }

})

Template.feedbackrow.helpers({
  isOwner() {console.dir(this);
    return this.fb.owner == Meteor.userId()}
})

Template.feedbackrow.events({
  'click span'(elt,instance){
    console.dir(this);
    console.log(this);
    console.log(this.fb._id);
    Meteor.call('trip.remove',this.fb)
    // if(this.fb.owner==Meteor.userId()){
    //   Feedback.remove(this.fb._id);
    // }else{
    //   alert("Why are you deleting someone else's feedback");
    // }
  }

})

Template.feedbackrow.events({
  // 'click button'(elt,instance){
  //     Meteor.call('trip.update',this.fb,"The content is hidden by the author")
  // }
  'click #edit'(event,instance){
    instance.edit.set(true);
  },
  'click #update'(elt,instance){
    const newContent = instance.$('#newContent').val();
    instance.$('#newContent').val("");
    Meteor.call('trip.update',this.fb,newContent);
    instance.edit.set(false);
  }
})

Template.showfeedback.helpers({
  feedbackData() {return Feedback.find()},
})

Template.showfeedback.onCreated(function(){
  Meteor.subscribe('feedback');
})

Template.feedbackrow.onCreated(function(){
  this.edit = new ReactiveVar(false);
})
Template.feedbackrow.helpers({
  editButton(){
    return Template.instance().edit.get();
  }
})
