const raju = {
    firstName: "Raju",
    lastName: 'Shorif',
    age: 2040 - 2004,
    job: "Front-end developer",
    friends:[
        'Mijan','Ibrahim', 'Nishat'
    ]
     }
     console.log(raju);
     console.log(raju.lastName);
     console.log(raju['lastName']);
     const nameKey = "Name";
     console.log(raju['first' + nameKey]);
     console.log(raju['last' + nameKey]);
    
     //Pop up 
     const interestedIn = prompt('what do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');
    //retriving an element from an object
      if (raju[interestedIn]) {
        console.log(raju[interestedIn]);    
      } else{
        console.log('Wrong request! Choose between firstName, lastName, age, job, and friends')
      };
      raju.location = 'Madaripur';
      raju['twitter'] = '@rajushorif';
      console.log('raju');
      console.log(`${raju.firstName} has ${raju.friends.length} friends, and his best friend is called ${raju.friends[2]}`)
      
      // Object Methods
      const raju = {
        firstName: "Raju",
        lastName: 'Shorif',
        age: 2040 - 2004,
        job: "Front-end developer",
        friends:[
            'Mijan','Ibrahim', 'Nishat'
        ],
        calcAge : function (birthYear){
          return 2040 - 2004;
        }
         };
         console.log(raju.calcAge)