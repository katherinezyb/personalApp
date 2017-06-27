// Meteor.startup(function(){
// 	if (Pokedex.find().count()==0){
// 		console.log("Importing Pokedex to db")
//
// 			 var data = JSON.parse(Assets.getText(
// 				 "Pokemon-DB-master/pokedex.json"));
// 			 console.log("data length = "+data.length);
//
// 			 data.forEach(function (item, index, array) {
// 				 //console.log(index+" "+JSON.stringify(item));
// 					 Pokedex.insert(item);
// 			 })
// 			 console.log("Pokedex imported");
// 	};
//
// // this is very insecure, but helpful for development
// 	Meteor.publish('userList', function (){
//   return Meteor.users.find({});
// });
//
// });


Meteor.startup(() => {
  // code to run on server at startup
  People.remove({});  // clear the database
  People.insert({name:'Tim',gender:'male',place:"USA",budget:1000,language:'English'});
  People.insert({name:'Caitlin',gender:'female',place:"England",budget:2000,language:'English'});

	Feedback.remove({});
	Feedback.insert({title:"London trip",content:"I went to Europe and GlobalTour really gave me a lot of help!"});
  Feedback.insert({title:"Wonderful experience",content:"I love this app!!"});
  Feedback.insert({title:"Suggestion",content:"It will be better if it could include discounts"});
  Feedback.insert({title:"Sharing",content:"I would definitely recommend this app to my friend."});
});
