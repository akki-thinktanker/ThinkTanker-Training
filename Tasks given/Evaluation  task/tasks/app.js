const express = require("express");
const ejs = require("ejs");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views");

app.get("/", (req, res) => {
  res.send("Hello");
});

// 1. Return the A-Z.

const UtilityFunction = async (req, res) => {
  const value = req.body.stringVal;
  const operation = req.body.operation;
  let ans = "";
  let valueArr = "";

  try {
    let params = { result: "No answer" };
    switch (operation) {
      // 1. Return the A-Z.
      case "first":
        const upperCaseValues = value.match(/[A-Z]/g);
        ans = upperCaseValues;
        params = { result: ans };

        break;

      case "second":
        // 2. Return the a-z.
        const lowerCaseValues = value.match(/[a-z]/g);
        ans = lowerCaseValues;
        params = { result: ans };

        break;

      case "third":
        // 3. Return the 0-9

        const numbersValue = value.match(/[0-9]/g);
        ans = numbersValue;
        params = { result: ans };

        break;

      case "fourth":
        // 4. Return only special characters.

        const specialCharacters = value.match(/[^A-Za-z0-9]/g);
        ans = specialCharacters;
        params = { result: ans };

        break;

      case "fifth":
        // 5. Return only vowels (a, e, i, o, u).

        const vowels = value.match(/[aeiou]/gi);
        ans = vowels;
        params = { result: ans };

        break;

      case "sixth":
        // 6. Return only consonants.
        const consonants = value.match(/[^aeiouAEIOU]/g);
        ans = consonants;
        console.log(consonants);
        params = { result: ans };

        break;

      case "seventh":
        // 7. Print characters/digits at odd positions.

        valueArr = value.split("");

        const oddPositions = [];

        valueArr.forEach((val, idx) => {
          if (idx % 2 === 0) oddPositions.push(val);
        });
        ans = oddPositions;
        params = { result: ans };

        break;

      case "eighth":
        valueArr = value.split("");

        const evenPositions = [];

        valueArr.forEach((val, idx) => {
          if (idx % 2 === 1) evenPositions.push(val);
        });

        ans = evenPositions;
        params = { result: ans };

        break;

      case "ninth":
        // 9. Reverse the input
        const reverse = value.split("").reverse().join("");
        ans = reverse;
        params = { result: ans };

        break;

      case "tenth":
        // 10. Find the second last character/digit/number in the input.

        const secondLastCharacter = value[value.length - 2];
        ans = secondLastCharacter;
        params = { result: ans };

        break;

      default:
        ans = "Select any operation to perform";
        params = { result: ans };
    }

    let html = await ejs.renderFile(
      path.resolve(__dirname, "./pages/utils.ejs"),
      params
    );
    res.send(html);
  } catch (err) {
    console.log("Error", err);
  }
};

app.get("/utils", UtilityFunction);
app.post("/utils", UtilityFunction);

app.listen(8080, () => {
  console.log("Server listening on port 8080");
});
