document.getElementById("solveButton").addEventListener("click", function () {
  var mathProblem = document.getElementById("mathInput").value;
  try {
    var result = math.evaluate(mathProblem);
    document.getElementById("result").textContent = "Answer: " + result;
  } catch (e) {
    document.getElementById("result").textContent = "Error: Invalid input";
  }
});
