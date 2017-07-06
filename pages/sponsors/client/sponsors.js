const ourSponsors = [
 {name:"Yelp",amt:"$50 million"},
 {name:"Airbnb",amt:"$20 million"},
 {name:"Amtrack",amt:"$40 million"},
 {name:"StudentUniverse",amt:"$10 million"},
]

Template.sponsors.helpers({
	sponsorData: ourSponsors,
  today:new Date()
})

Template.sponsors.events({
  "click #popup_button": function(){
    $("#popup1").css("visibility", "visible");
    $("#popup1").css("opacity", 1);
  }
})

Template.sponsors.events({
  "click #popup_close":function(){
    $("#popup1").css("visibility","hidden");
    $('#popup1').css("opacity",0);
  }
})
