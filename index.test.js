const greet = require("./index");

// Requirement 1
test("simple greeting", () => {
  expect(greet("Bob")).toMatch("Hello, Bob.");
});

// Requirement 2
test("name is null", () => {
  expect(greet(null)).toMatch("Hello, my friend.");
});

// Requirement 3
test("handle shouting", () => {
  expect(greet("JERRY")).toMatch("HELLO JERRY!");
});

// Requirement 4
test("two names", () => {
  expect(greet(["Jill", "Jane"])).toMatch("Hello, Jill and Jane");
});

// Requirement 5
test("abitrary number of names", () => {
  expect(greet(["Amy", "Brian", "Charlotte"])).toMatch(
    "Hello, Amy, Brian, and Charlotte."
  );
});

// Requirement 6
test("mixing normal and shouting names", () => {
  expect(greet(["Amy", "BRIAN", "Charlotte"])).toMatch(
    "Hello, Amy and Charlotte. AND HELLO BRIAN!"
  );
});
