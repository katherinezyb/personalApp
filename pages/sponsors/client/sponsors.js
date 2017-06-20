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
