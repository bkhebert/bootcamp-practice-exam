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
  let cancelSubscriptions = function(arrayOfSubObj){
    return arrayOfSubObj.map( (currentValue, i) => {
      if( i % 2 === 0 || i === 0 ){
        if( currentValue.costPerMonth >= 10 ){
        currentValue.cancel = true;
        }
      }
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
  
  
  let subscriptionList = function(arrayOfSubObj){
   return arrayOfSubObj.reduce( (returnString, currentValue) => {
          return returnString += currentValue.name + ' - ' + currentValue.costPerMonth + '\n'
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
  
  let getSubscriptionObject = function(array, name, i = 0, newObj = { name: null, costPerMonth: null } ){
   //base
  console.log(i)
   if(array[i].name === name){
    newObj["name"] = array[i].name ;
    newObj['costPerMonth'] = array[i].costPerMonth;
    return newObj;
   } else if( i === array.length - 1 && array[i].name !== name ){
    return newObj;
   }
   //recursion
   i += 1;
   return getSubscriptionObject(array, name, i, newObj)
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
  
  let updateSubscription = function(inputObj, arrayOfArrays, i = 0){
     for(let i = 0; i < arrayOfArrays.length; i + 1){
        inputObj[arrayOfArrays[i][0]] = arrayOfArrays[i][1];
      }
      return inputObj;
    };
  
  
  {}
  /////////////////////////////////////////////////////////////////
  // PROBLEM #5 ///////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////
  
  let getMultipleUsers = function(){
   
  }; 
  
  
  
  
  /////////////////////////////////////////////////////////////////
  // PROBLEM #6 ///////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////
  
  let getUsersArray = function(){
   
  };
  
  
