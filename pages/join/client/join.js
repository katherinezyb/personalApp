Template.addpeople.events({
  'click button'(elt,instance){
    const name = instance.$('#name').val();
    const gender = document.querySelector("input[name=gender]:checked").value;
    const place = instance.$('#place').val();
    const money = instance.$('#budget').val();
    const budget = parseInt(money);
    const language = instance.$('#language').val();
    // const birthyear = parseInt(year);

    console.log('adding '+name);
    //blank the space
    instance.$('#name').val("");
    instance.$('#place').val("");
    instance.$('#budget').val("");
    instance.$('#language').val("");
    // People.insert({name:name,gender:gender;place:place,budget:budget,language:language,
    //   owner:Meteor.userId(),
    //   createAt:new Date()});
    //People.insert({name,birthyear})

    var info = {
      name:name,
      gender:gender,
      place:place,
      budget:budget,
      language:language,
      owner:Meteor.userId()
    };
    Meteor.call('info.insert',info);
  }
})

Template.peoplerow.helpers({
  isOwner() {console.dir(this);
    return this.person.owner == Meteor.userId()}
})

Template.peoplerow.events({
  'click span'(elt,instance){
    console.dir(this);
    console.log(this);
    console.log(this.person._id);
    Meteor.call('info.remove',this.person);
    // if(this.person.owner==Meteor.userId()){
    //   People.remove(this.person._id);
    // }else{
    //   alert("Why are you deleting someone else's account");
    // }
  }
})

Template.showpeople.helpers({
  peopleData() {return People.find()},
})
