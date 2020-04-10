const greet = require("./index");

// Requirement 1
test("simple greeting", () => {
  expect(greet("Bob")).toMatch("Hello, Bob.");
});

// Requirement 2
test("name is null", () => {
  expect(greet(null)).toMatch("Hello, my friend.");
});
