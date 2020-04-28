module.exports = {
  // succeed,
  // fail,
  repair,
  get,
};

// - a `success(item)` method that accepts an `item` object and 
//**returns a new item** object modified according to the rules defined 
//by the client for enhancement success.


// ### When enhancement succeeds

// - The item's enhancement increases by 1.
// - If the item enhancement level is 20, the enhancement level is not changed.
// - The durability of the item is not changed.


// function succeed(item) {
//   // return { ...item };

//   if (item.enhancement === 20) {
//     return { ...item }
//   } else {
//     return (...item, item.enhancement: item.enhancement + 1)
//   }
// }

// - a `fail(item)` method that accepts an `item` object and **returns a new item** 
//object modified according to the rules defined by the client for enhancement failure.

// ### When enhancement fails

// - If the item's enhancement is less than 15, the durability of the item is decreased by 5.
// - If the item's enhancement is 15 or more, the durability of the item is decreased by 10.
// - If the item's enhancement level is greater than 16, the enhancement 
//level decreases by 1 (17 goes down to 16, 18 goes down to 17).

// function fail(item) {
//   // return { ...item };

//   if (item.enhancement < 15) {
//     return (...item, item.durability: item.durability -5 )
//   } else if (item.enhancement >= 15 & item.enhancement < 17) {
//     return (...item, item.durability: item.durability - 10 )
//   } else if (item.enhancement > 16) {
//     return (...item,
//       item.durability: item.durability - 10,
//         item.enhancement: item.enhancement - 1)
//   }

// }

// - a `repair(item)` method that accepts an `item` object and 
//**returns a new item** with the durability restored to 100. 
//This method is the simplest of the three and would be a **good starting point** on this project.

function repair(item) {
  item.durability = 100
  return { ...item };
}

// - a `get()` method for use when working on the stretch problem.

function get(item) {
  return { ...item };
}





