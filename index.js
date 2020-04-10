function greet(name) {
  // checks for an array of names
  if (Array.isArray(name)) {
    // two names
    if (name.length == 2) {
      return `Hello, ${name[0]} and ${name[1]}.`;
    }

    // more than two names
    return `Hello,${name.map((n, i, arr) => {
      // if name is the last name in the list, print "and" followed by the name
      if (i == arr.length - 1) {
        return ` and ${n}.`;
      }
      // else, just print the name
      return ` ${n}`;
    })}`;
  }

  // checks for uppercase
  if (name && name == name.toUpperCase()) return `HELLO ${name}!`;

  // otherwise returns the name or the default phrase if there's no name
  return `Hello, ${name || "my friend"}.`;
}

module.exports = greet;
