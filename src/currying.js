function add(a) {
  return function (b) {
    return a + b;
  };
}

const add2 = (a) => (b) => a + b;

// like add(1,4)
add(1)(4);
