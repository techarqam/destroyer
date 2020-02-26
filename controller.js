const cmd = require('node-cmd');
const chalk = require('chalk');

exports.deleteAll = async function (req, res) {

    console.log(chalk.red('Starting Deletion'))
    cmd.get(
        `
        cd ..
        cd test
        git init
        `,
        function(err, data, stderr){
            if (!err) {
               console.log(chalk.red('Deletion Completed',data))
            } else {
               console.log('error', err)
            }
 
        }
    );

    await console.log(chalk.red("Deleted"))
    res.json({ status: 'Deleting' });

};
