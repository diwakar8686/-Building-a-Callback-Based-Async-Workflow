function simulateAsyncTask(taskName, success, callback) {
    setTimeout(() => {
        if (success) {
            console.log(`${taskName} completed successfully.`);
            callback(null);
        } else {
            callback(`${taskName} failed.`);
        }
    }, 1000);
}
function registerUser(callback) {
    console.log("Starting user registration...");
    simulateAsyncTask("registerUser", true, callback); 
}
function sendVerification(callback) {
    console.log("Sending verification email...");
    simulateAsyncTask("sendVerification", true, callback); 
}
function loginUser(callback) {
    console.log("Logging user in...");
    simulateAsyncTask("loginUser", true, callback); 
}
function displayWelcomeMessage(callback) {
    console.log("Displaying welcome message...");
    simulateAsyncTask("displayWelcomeMessage", true, callback); 
}
registerUser((error) => {
    if (error) {
        console.error(`Error: ${error}`);
        return;
    }
    sendVerification((error) => {
        if (error) {
            console.error(`Error: ${error}`);
            return;
        }
        loginUser((error) => {
            if (error) {
                console.error(`Error: ${error}`);
                return;
            }
            displayWelcomeMessage((error) => {
                if (error) {
                    console.error(`Error: ${error}`);
                    return;
                }
                console.log("Workflow completed successfully.");
            });
        });
    });
});
