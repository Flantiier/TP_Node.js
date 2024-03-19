import readline from "readline-sync";

const consoleReadine = (consoleMessage) => {
    return readline.question(consoleMessage);
}

export default {consoleReadine}