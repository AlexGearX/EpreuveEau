var myArgs = process.argv.slice(2);
var argEnStringsInverser = "";
for (let index = (myArgs.length - 1); 0 <= index; index--) {
    argEnStringsInverser += myArgs[index] + " ";
}
console.log(argEnStringsInverser);