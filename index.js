function greet(name) {
  // checks for an array of names
  if (Array.isArray(name)) return `Hello, ${name[0]} and ${name[1]}.`;

  // checks for uppercase
  if (name && name == name.toUpperCase()) return `HELLO ${name}!`;

  // otherwise returns the name or the default phrase if there's no name
  return `Hello, ${name || "my friend"}.`;
}

module.exports = greet;
