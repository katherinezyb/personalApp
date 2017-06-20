Template.addpeople.events({
  'click button'(elt,instance){
    const name = instance.$('#name').val();
    const place = instance.$('#place').val();
    const money = instance.$('#budget').val();
    const budget = parseInt(money);
    // const birthyear = parseInt(year);
    console.log('adding '+name);
    instance.$('#name').val("");
    instance.$('#place').val("");
    instance.$('#budget').val("");
    People.insert({name:name,place:place,budget:budget,
      owner:Meteor.userId(),
      createAt:new Date()});
    //People.insert({name,birthyear})
  }
})

Template.peoplerow.helpers({
  isOwner() {console.dir(this);
    return this.person.owner == Meteor.userId()}
})

Template.peoplerow.events({
  'click span'(elt,instance){
    console.dir(this);
    console.log(this.person._id);
    if(this.person.owner==Meteor.userId()){
      People.remove(this.person._id);
    }else{
      alert("Why are you deleting someone else's account");
    }
  }
})

Template.showpeople.helpers({
  peopleData() {return People.find()},
})
