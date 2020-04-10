function greet(name) {
  return `Hello, ${name || "my friend"}.`;
}

module.exports = greet;
