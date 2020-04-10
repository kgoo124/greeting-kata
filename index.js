// a function passed to .reduce that splits words by commas
const splitCommas = (names, name) => {
  // used to not split the name if intentional quotes are used
  if (name[0] === '"') {
    const escapedName = name.substr(1, name.length - 2);
    return [...names, escapedName];
  }
  return [...names, ...name.split(", ")];
};

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

  // split commas
  name = name.reduce(splitCommas, []);

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
