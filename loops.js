
    var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer", "computer"]
officeItems.forEach(function(item, index, array) {
    console.log(item, index)
})
var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer", "computer"]
const storage = [
    { stapler: '1', status: '1' },
    { monitor: '2', status: '1' },
    { computer: '3', status: '0' },
    { desk: '4', status: '1' },
    { lamp: '5', status: '1' },
    { computer: '6', status: '0' },
    { lamp: '7', status: '1' },
    {stapler: '8', status: '1'},
    {computer: '9', status: '0' },
    {computer: '10', status: '0' },

  ];
  
  let counter = 0;
  for (let i = 0; i < storage.length; i++) {
    if (storage[i].status === '0') counter++;
  }
  
  console.log(counter); 
  var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ]
  peopleWhoWantToSeeMadMaxFuryRoad.forEach(({ name, age }) => {
    if (age < 18) {
    console.log( name +  'not old enough');
    }
    });
    var peopleWhoWantToSeeMadMaxFuryRoad = [
        {
          name: "Mike",
          age: 12,
          gender: "male"
        },{
          name: "Madeline",
          age: 80,
          gender: "female"
        },{
          name: "Cheryl",
          age: 22,
          gender: "female"
        },{
          name: "Sam",
          age: 30,
          gender: "male"
        },{
          name: "Suzy",
          age: 4,
          gender: "female"
        }
      ]
      peopleWhoWantToSeeMadMaxFuryRoad.forEach(({ name, age }) => {
        if (age > 18) {
        console.log( name +  "old enough");
        }
        });