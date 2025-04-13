const Stack = require("../../Stack");

function prec(operator) {
  const operators = [
    { operator: "+", level: 1 },
    { operator: "-", level: 1 },
    { operator: "*", level: 2 },
    { operator: "/", level: 2 },
    { operator: "^", level: 3 },
    { operator: "(", level: 4 },
    { operator: ")", level: 4 },
  ];

  let operatorLevel = operators.find((value) => value.operator == operator);

  return operatorLevel ? operatorLevel.level : 0;
}

function convertInfixToPostfix(expression) {
  let s = "";
  let length = expression.length;
  let stack = new Stack(length);

  let i = 0;
  while (i < length) {
    let current = expression[i];
    let operatorLevel = prec(current);

    if (!operatorLevel) {
      s += current;
    } else {
      let stackTop = stack.top();
      let stackTopLevel = prec(stackTop);

      if (current == ")") {
        while (stack.top() != "(") {
          s += stack.pop();
        }
        stack.pop();
      } else if (
        !stackTop ||
        current == "(" ||
        stackTop == "(" ||
        operatorLevel > stackTopLevel
      ) {
        stack.push(current);
      } else {
        while (prec(stack.top()) >= operatorLevel && stack.top() != "(") {
          s += stack.pop();
        }
        stack.push(current);
      }
    }

    i++;
  }

  while (!stack.isEmpty()) {
    s += stack.pop();
  }

  return s;
}

function postfixEvaluation(equation) {
  let length = equation.length;
  let stack = new Stack(length);

  let i = 0;
  while (i < length) {
    let current = equation[i];
    let num = Number(current);

    if (isNaN(num)) {
      let rightSide = stack.pop();
      let leftSide = stack.pop();

      stack.push(evaluateExpression(current, leftSide, rightSide));
    } else {
      stack.push(num);
    }
    i++;
  }

  return stack.pop();
}

function evaluateExpression(operator, a, b) {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    case "^":
      return a ** b;
    default:
      throw new Error("Unsupported");
  }
}

console.log(
  "infixToPostfix = " + convertInfixToPostfix("a+b*(c^d-e)^(f+g*h)-i")
);

let infixToPostfix = convertInfixToPostfix("1+2*(2^2-2)^(1+2*1)-5");

console.log("infixToPostfix = " + infixToPostfix);
console.log("infixToPostfix Evaluation = " + postfixEvaluation(infixToPostfix));

console.log("postfixToInfix = " + convertPostfixToInfix(infixToPostfix));

function convertPostfixToInfix(expression) {
  let length = expression.length;
  let stack = new Stack(length);

  let i = 0;
  while (i < length) {
    let current = expression[i];
    let operatorLevel = prec(current);

    if (!operatorLevel) {
      stack.push(current);
    } else {
      let rightSide = stack.pop();
      let leftSide = stack.pop();

      stack.push(`(${leftSide}${current}${rightSide})`);
    }

    i++;
  }

  return stack.pop();
}

function convertInfixToPrefix(expression) {
  let reversedExpression = expression.split("").reverse().join("");
  reversedExpression = reversedExpression
    .replace(/\(/g, "X")
    .replace(/\)/g, "(")
    .replace(/X/g, ")");

  let infixToPostfix = convertInfixToPostfix(reversedExpression);
  let reversedinfixToPostfix = infixToPostfix.split("").reverse().join("");

  return reversedinfixToPostfix;
}

function prefixEvaluation(equation) {
  let length = equation.length;
  let stack = new Stack(length);
  let reversedEquation = equation.split("").reverse().join("");

  let i = 0;
  while (i < length) {
    let current = reversedEquation[i];
    let num = Number(current);

    if (isNaN(num)) {
      let leftSide = stack.pop();
      let rightSide = stack.pop();

      stack.push(evaluateExpression(current, leftSide, rightSide));
    } else {
      stack.push(num);
    }
    i++;
  }

  return stack.pop();
}

function convertPrefixToInfix(expression) {
  let reversedExpression = expression.split("").reverse().join("");

  let postfixToInfixT = convertPostfixToInfix(reversedExpression);
  let reversedPostfixToInfixT = postfixToInfixT.split("").reverse().join("");
  reversedPostfixToInfixT = reversedPostfixToInfixT
    .replace(/\(/g, "X")
    .replace(/\)/g, "(")
    .replace(/X/g, ")");

  return reversedPostfixToInfixT;
}

console.log("infixToPrefix = " + convertInfixToPrefix("(a-b/c)*(a/k-l)"));
let infixToPrefix = convertInfixToPrefix("1+2*(2^2-2)^(1+2*1)-5");

console.log("infixToPrefix = " + infixToPrefix);
console.log("infixToPrefix Evaluation = " + prefixEvaluation(infixToPrefix));
console.log("prefixToInfix = " + convertPrefixToInfix(infixToPrefix));
