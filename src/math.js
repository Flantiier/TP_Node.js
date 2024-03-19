import chalk from "chalk";

const add = (a, b) => {
    const result = a + b;
    const message = "Le résultat de l'addition est : " + result;
    if(result >= 0){
        console.log(chalk.green(message));
    }
    else{
        console.log(chalk.red(message));
    }
}

export default {add}