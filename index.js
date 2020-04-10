function formatNormalNames(names) {
  if (names.length == 0) return "";
  let lastName = names.pop();
  let otherNames = names.length > 1 ? names.join(", ") + "," : names[0];
  return `Hello, ${otherNames} and ${lastName}.`;
}

function formatShoutingNames(names) {
  if (names.length == 0) return "";
  let lastName = names.pop();
  let otherNames = names.length > 1 ? names.join(", ") + "," : names[0];
  return `HELLO, ${otherNames} AND ${lastName}!`;
}

function greet(name) {
  const normalSingleName = (name) => `Hello, ${name}.`;
  const shoutSingleName = (name) => `HELLO ${name}!`;

  // null check
  if (name == null) return normalSingleName("my friend");

  // checks for an array of names otherwise puts the single name into an array
  if (!Array.isArray(name)) {
    name = [name];
  }

  // creates arrays of normal and shouting names
  let normalNames = name.filter((n) => n != n.toUpperCase());
  let shoutingNames = name.filter((n) => n == n.toUpperCase());

  let normalText =
    normalNames.length != 1
      ? formatNormalNames(normalNames)
      : normalSingleName(normalNames[0]);

  let shoutingText =
    shoutingNames.length != 1
      ? formatShoutingNames(shoutingNames)
      : shoutSingleName(shoutingNames[0]);

  // determines which text to return (possibly both)
  if (normalText == "") return shoutingText;
  if (shoutingText == "") return normalText;

  return `${normalText} AND ${shoutingText}`;
}

module.exports = greet;
