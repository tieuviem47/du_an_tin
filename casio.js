<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Casio</title>
    <link rel="stylesheet" href="casio.css">
</head>
<body>
    <div class="calculator">
        <input type="text" placeholder="0" id="Inputbox" readonly>
        <div>
            <button class="operator ac" onclick="clearInput()">AC</button>
            <button class="operator del" onclick="deleteLast()">DEL</button>
            <button class="operator ans" onclick="useAns()">Ans</button>
            <button class="operator" onclick="appendOperator('/')">/</button>
        </div>
        <div>
            <button onclick="appendNumber(7)">7</button>
            <button onclick="appendNumber(8)">8</button>
            <button onclick="appendNumber(9)">9</button>
            <button class="operator" onclick="appendOperator('*')">*</button>
        </div>
        <div>
            <button onclick="appendNumber(4)">4</button>
            <button onclick="appendNumber(5)">5</button>
            <button onclick="appendNumber(6)">6</button>
            <button class="operator" onclick="appendOperator('-')">-</button>
        </div>
        <div>
            <button onclick="appendNumber(1)">1</button>
            <button onclick="appendNumber(2)">2</button>
            <button onclick="appendNumber(3)">3</button>
            <button class="operator" onclick="appendOperator('+')">+</button>
        </div>
        <div>
            <button class="operator" onclick="appendPower()">^</button>
            <button onclick="appendNumber(0)">0</button>
            <button onclick="appendDecimal()">.</button>
            <button class="equal-Btn" onclick="calculate()">=</button>
        </div>
    </div>

    <script>
        let lastAnswer = 0;
        const inputBox = document.getElementById("Inputbox");

        function calculate() {
            try {
                let expression = inputBox.value.replace(/\^/g, "**");
                lastAnswer = eval(expression) || 0;
                inputBox.value = lastAnswer;
            } catch (e) {
                inputBox.value = "Error";
            }
        }

        function useAns() {
            if (inputBox.value === "0" || inputBox.value === "Error") {
                inputBox.value = lastAnswer;
            } else {
                inputBox.value += lastAnswer;
            }
        }

        function appendNumber(num) {
            if (inputBox.value === "0" || inputBox.value === "Error") {
                inputBox.value = num;
            } else {
                inputBox.value += num;
            }
        }

        function appendOperator(op) {
            inputBox.value += op;
        }

        function appendPower() {
            let lastChar = inputBox.value.slice(-1);
            if (lastChar.match(/[0-9]/)) {
                inputBox.value += "^";
            }
        }

        function appendDecimal() {
            let lastPart = inputBox.value.split(/[^0-9.]/).pop();
            if (!lastPart.includes('.')) {
                inputBox.value += '.';
            }
        }

        function clearInput() {
            inputBox.value = "0";
        }

        function deleteLast() {
            inputBox.value = inputBox.value.slice(0, -1) || "0";
        }
    </script>
</body>
</html>
