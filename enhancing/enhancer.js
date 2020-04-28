module.exports = {
  succeed,
  fail,
  repair,
  get,
};

// ### When enhancement succeeds

// - The item's enhancement increases by 1.
// - If the item enhancement level is 20, the enhancement level is not changed.
// - The durability of the item is not changed.


function succeed(item) {

  if (item.enhancement >= 20) {
    return { ...item }
  } else {
    item.enhancement += 1;
    return { ...item }
  }
}

// - a `fail(item)` method that accepts an `item` object and **returns a new item** 
//object modified according to the rules defined by the client for enhancement failure.

// ### When enhancement fails

// - If the item's enhancement is less than 15, the durability of the item is decreased by 5.
// - If the item's enhancement is 15 or more, the durability of the item is decreased by 10.
// - If the item's enhancement level is greater than 16, the enhancement 
//level decreases by 1 (17 goes down to 16, 18 goes down to 17).

function fail(item) {

  if (item.enhancement < 15) {
    item.durability -= 5;
    return { ...item }
  } else if (item.enhancement >= 15 & item.enhancement < 17) {
    item.durability -= 10;
    return { ...item }
  } else if (item.enhancement > 16) {
    item.durability -= 10;
    item.enhancement -= 1;
    return { ...item }
  }

}


function repair(item) {
  item.durability = 100
  return { ...item };
}

// - a `get()` method for use when working on the stretch problem.

function get(item) {
  return { ...item };
}





