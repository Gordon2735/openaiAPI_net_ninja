'use strict';

import chalk from 'chalk';
import util from 'util';

const chalkOpenAI = {
    info: (arg, ...args) =>
        console.log(
            chalk.blue(
                util.inspect(arg, ...args, { colors: true, depth: null })
            )
        ),
    error: (arg, ...args) =>
        console.log(
            chalk.red(util.inspect(arg, ...args, { colors: true, depth: null }))
        ),
    success: (arg, ...args) =>
        console.log(
            chalk.green(
                util.inspect(arg, ...args, { colors: true, depth: null })
            )
        ),
    warning: (arg, ...args) =>
        console.log(
            chalk.yellow(
                util.inspect(arg, ...args, { colors: true, depth: null })
            )
        ),
    log: (arg, ...args) =>
        console.log(
            chalk.magenta(
                util.inspect(arg, ...args, { colors: true, depth: null })
            )
        )
};

export { chalkOpenAI };
