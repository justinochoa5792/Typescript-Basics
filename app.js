var userInput;
var userName;
userInput = "Justin";
if (typeof userInput === "string") {
    userName = userInput;
    console.log(userName);
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError("An error occurred!", 500);
