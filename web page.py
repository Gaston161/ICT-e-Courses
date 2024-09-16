<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Web Page</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            background-color: #f4f4f4;
        }
        h1 {
            color: #333;
        }
        #output {
            margin-top: 20px;
            padding: 10px;
            background-color: #fff;
            border: 1px solid #ccc;
        }
    </style>
</head>
<body>

    <h1>Welcome to My Web Page</h1>
    <input type="text" id="userInput" placeholder="Type something...">
    <button onclick="displayMessage()">Submit</button>

    <div id="output"></div>

    <script>
        function displayMessage() {
            const input = document.getElementById('userInput').value;
            document.getElementById('output').innerText = `You typed: ${input}`;
        }
    </script>

</body>
</html>