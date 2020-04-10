function greet(name) {
  // checks for uppercase
  if (name && name == name.toUpperCase()) {
    return `HELLO ${name}!`;
  }

  // otherwise returns the name or the default phrase if there's no name
  return `Hello, ${name || "my friend"}.`;
}

module.exports = greet;
