import app from './app';
import chalk from 'chalk';

const server = app.listen(app.get('port'), () => {
    console.log(`\nServer started ! ${chalk.green('✓')}`);
    console.log(
        `App is running at ${chalk.magenta('http://localhost:%d')} in %s mode`,
        app.get('port'),
        app.get('env')
    );
});

export default server;
