/////////////////////////////////////////////////////////////////
///////////////////////////// BOOTCAMP //////////////////////////
////////////////////// REQUIRED PRACTICE EXAM ///////////////////
/////////////////////////////////////////////////////////////////

let subscriptions = [
    {  // 0
      name: "HBOMax",
      type: 'streaming',
      costPerMonth: 14.99,
      cancel: false,
      users: [
        {
          ip: '184.190.92.50',
          lastAccessed: '5/22/2023'
        },
        {
          ip: '175.100.90.40',
          lastAccessed: '5/18/2023'
        }
      ]
    },
    { // 1
      name: 'Hulu',
      type: 'streaming',
      costPerMonth: 7.99,
      cancel: false,
       users: [
        {
          ip: '184.190.92.50',
          lastAccessed: '5/22/2023'
        },
      ]
    },
    { // 2
      name: 'Netflix',
      type: 'streaming',
      costPerMonth: 9.99,
      cancel: false,
       users: [
        {
          ip: '184.190.92.50',
          lastAccessed: '5/22/2023'
        },
        {
          ip: '175.100.90.40',
          lastAccessed: '5/18/2023'
        },
         {
           ip: '180.145.75.25',
           lastAccessed: '5/20/2023'
         }
      ]
    },
    { // 3
      name: 'Express VPN',
      type: 'software',
      costPerMonth: 12.95,
      cancel: false,
       users: [
        {
          ip: '184.190.92.50',
          lastAccessed: '5/22/2023'
        },
      ]
    },
    { // 4
      name: 'Adobe Premiere Pro',
      type: 'software',
      costPerMonth: 20.99,
      cancel: false,
       users: [
        {
          ip: '184.190.92.50',
          lastAccessed: '5/22/2023'
        },
      ]
    },
  ];
  
  
  
  /////////////////////////////////////////////////////////////////
  // PROBLEM #1 ///////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////
  
  /**
   * Create a function called `cancelSubscriptions` that takes in one parameter - `array` - that represents an array of subscription objects. 
   * This function should iterate through the input array of subscriptions and set EVERY OTHER subscription object's `cancel` property to true, 
   * but only if the cost of the subscription is more than 10 dollars.
- [ {check for cancellation}, {}, {check for cancellation}, {}, {check for cancellation}];
   * I: an array of subscription objects
   * O:
   * C:
   * E:
   */
  //parameter is the subscriptions array of objects
  let cancelSubscriptions = function(arrayOfSubObj){
    //return the arrayofsubObj calling the map method, taking in the current value and index
    return arrayOfSubObj.map( (currentValue, i) => {
      //if the index is divisible by 2 or the index is 0
      if( i % 2 === 0 || i === 0 ){
        //if the current values cost is more than 10
        if( currentValue.costPerMonth >= 10 ){
          //set the current values cancel property to true
        currentValue.cancel = true;
        }
      }
      //return the current value
      return currentValue;
    })
  };
  
  
  /*
  NOTE: If you test this function in the console, remember to comment 
  out the test because this function will DESTRUCTIVELY alter the subscriptions 
  array.
  */
  
  
  /////////////////////////////////////////////////////////////////
  // PROBLEM #2 ///////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////

  /**
   * Create a function called `subscriptionList` that takes in one parameter - `array` - which represents an array of subscription objects. 
   * This function should use the native reduce method to return a string that formats the subscriptions like as such:
```
HBOMax - 14.99
Hulu - 7.99
Netflix - 9.99
Express VPN - 12.95
Adobe Premiere Pro - 20.99

```
- This is an example of what the return value should look like as a string: `"HBOMax - 14.99\nHulu - 7.99\nNetflix - 9.99\nExpress VPN - 12.95\nAdobe Premiere Pro - 20.99\n"`

I: array of subscription Objects
O: a string
C: use reduce
E:
   */
  
  //set array of subscription objects as parameter
  let subscriptionList = function(arrayOfSubObj){
    //return the parameter calling the reduce method, taking in a return string and the current value
   return arrayOfSubObj.reduce( (returnString, currentValue) => {
    //return a concatenated string that has the current values name, a dash, cost per month, and a new line
          return returnString += `${currentValue.name} - ${currentValue.costPerMonth}\n`
          //seed is an empty string
   }, "")
  };
  
  
  
  
  /////////////////////////////////////////////////////////////////
  // PROBLEM #3 ///////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////
  /**
   * . Create a function called `getSubscriptionObject` that takes in two parameters - `array` and `name`. 
   * `array` represents an array of subscription objects; `name` is a string of a subscription (example: 'HBOMax'). 
   * This function should use recursion to find the subscription object matching the input name. If the subscriptio is found, 
   * the function should return an object containing the subscription's name and cost property. If no subscription is found, 
   * the function should return an object with the name and cost properties set to null.
- getSubscriptionObject('HBOMax'); // => { name: 'HBOMax', costPerMonth: 14.99 }
- getSubscriptionObject('Disney Plus'); // => { name: null, costPerMonth: null }

I:array of subscription objects, a string
O: an object containing the sub name and cost property
C: use recursion
E: object returned must match the input name

   */
  //parameters are an array, a name, and defaulted index to 0, and defaulted newObj to null properties
  let getSubscriptionObject = function(array, name, i = 0, newObj = { name: null, costPerMonth: null } ){
   //base
  console.log(i)
  //if the array key value of name at the current index matches the name
   if(array[i].name === name){
    //reassign the default param object to the current index name
    newObj["name"] = array[i].name ;
    //do the same for cost per month
    newObj['costPerMonth'] = array[i].costPerMonth;
    //return the new obj
    return newObj;
    //if the index is equal to the length of the array minus 1 and the array current value is not equal to the name
   } else if( i === array.length - 1 && array[i].name !== name ){
    //return the default object
    return newObj;
   }
   //recursion
   //call the function back with the index incremented by 1
   return getSubscriptionObject(array, name, i += 1, newObj)
  };
  
  
  
  /////////////////////////////////////////////////////////////////
  // PROBLEM #4 ///////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////
  
  /**
   * Create a function called `updateSubscription` that takes in two parameters - `object` and `updates`. 
   * `object` represents a single subscription object; `updates` represents an array of arrays, 
   * where each subarray contains a property to update and a value to assign to that property.
   * This function should use this `updates` array to access the necessary properties on the input object and assign the new values.
   *  `updateSubscription` should return the input object after modifying it.
```
updateSubscription(
{
  name: "HBOMax",
  type: 'streaming',
  costPerMonth: 14.99,
  cancel: false
}, [ ['name', 'Max'], ['costPerMonth', 12.99] ] 
);

// returns =>

{
  name: 'Max',
  type: 'streaming',
  costPerMonth: 12.99,
  cancel: false
}
   */
  /**
   * I: an object, an array  of arrays
   * O: the input object after modification
   * C:
   * E: each part of the subarray contains a property to update and a value to assign that property
   */
  
  //function takes in 2 parameters, input object and array of arrays
  let updateSubscription = function(inputObj, arrayOfArrays){
    //loop through the length of the array of arrays
    for(let i = 0; i < arrayOfArrays.length; i += 1){
      //on each iteration, reassign the matching key property in the array of arrays to the value in the array of arrays
       inputObj[arrayOfArrays[i][0]] = arrayOfArrays[i][1];
     }
     //return the input object
     return inputObj;
   };
  /////////////////////////////////////////////////////////////////
  // PROBLEM #5 ///////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////
  /**
   * Create a function called `getMultipleUsers` that takes in one parameter - `array` - which represents an array of subscription objects.
   *  This function should use the native filter method to return a new array of only the subscriptions that have multiple users.
   */

  //function takes in the subscriptions array of objects
  let getMultipleUsers = function(arrayOfSubObj){
    //return the parameter calling the filter method, with the inner function taking in the current value
   return arrayOfSubObj.filter( (currentVal) => {
    //return the current value ONLY if the length of the users key value is greater than 1
    return currentVal.users.length > 1
   })
  }; 
  
  
  
  
  /////////////////////////////////////////////////////////////////
  // PROBLEM #6 ///////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////
  /*
  Create a function called `getUsersArray` that takes in one parameter -
   `array` which represents an array of subscription objects. 
   This function should use the native map method to return 
   a new array of objects that only contains 
   the `name` property of the subscription and 
   `users` property pointing to an array of the users.
```
getUsersArray(subscriptions); // returns => 
[
  { name: 'HBOMax', users: [ [Object], [Object] ] },
  { name: 'Hulu', users: [ [Object] ] },
  { name: 'Netflix', users: [ [Object], [Object], [Object] ] },
  { name: 'Express VPN', users: [ [Object] ] },
  { name: 'Adobe Premiere Pro', users: [ [Object] ] }
]
```
*/
  
//let the function take in the subscriptions array of objects
  let getUsersArray = function(arrayOfSubObj){
    //return the parameter calling the map method, map method will take in the current value
   return arrayOfSubObj.map( (current) => {
    //initialize a new object
    newObj = {};
    //set its name to the current values name
    newObj["name"] = current.name;
    //set its users to teh current values users
    newObj["users"] = current.users;
    //return the new object
    return newObj;
   }
   )
  };
  
  
