const Stack = require("../../Stack");

function checkParenthesesBalance(parentheses) {
  const length = parentheses.length;
  let stack = new Stack(length);

  let i = 0;
  while (i < length) {
    let current = parentheses[i];

    if (current == "(" || current == "[" || current == "{") {
      stack.push(current);
    } else {
      let top = stack.top();

      if (
        stack.isEmpty() ||
        (top != "(" && current == ")") ||
        (top != "[" && current == "]") ||
        (top != "{" && current == "}")
      ) {
        return false;
      }

      stack.pop(current);
    }
    i++;
  }

  if (!stack.isEmpty()) {
    return false;
  }

  return true;
}

console.log("checkParenthesesBalance = " + checkParenthesesBalance("[()()]{}"));
