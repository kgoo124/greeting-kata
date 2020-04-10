const greet = require("./index");

// Requirement 1
test("simple greeting", () => {
  expect(greet("Bob")).toMatch("Hello, Bob.");
});
