const cmd = require('node-cmd');
const chalk = require('chalk');

exports.deleteAll = async function (req, res) {
    await cmd.run("cls");
    await cmd.run("node -v");
    await console.log(chalk.red("Deleted"))
    res.json({ status: 'Deleting' });

};
