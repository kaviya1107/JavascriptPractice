<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Submission with Callback</title>
</head>
<body>
    <h2>Enter Your Name</h2>
    <form id="userForm">
        <label for="name">Name:</label>
        <input type="text" id="name" required>
        <button type="submi">Submit</button>
    </form>
    <p id="greetingMessage">hello</p>
 
    
    <script>
      
        function displayGreeting(name) {
            const greetingMessage = document.getElementById("greetingMessage");
            greetingMessage.textContent = `Hello, ${name}! Welcome to our site.`;
        }


        function handleFormSubmit(event, callback) {
            event.preventDefault(); // Prevents page reload
            const value = document.getElementById("name").value; // Get the entered name
            callback(value); // Calls the callback with the name entered by the user
        }

      
        const forms = document.getElementById("userForm");
        forms.addEventListener("submit", function(e) { //e is a parameter pass to handleFormSubmit
            handleFormSubmit(e, displayGreeting); // Pass displayGreeting as a callback
        });

    </script>
    
</body>
</html>