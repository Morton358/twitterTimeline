import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import cluster from 'cluster';
import os from 'os';
import router from './routes/index';

const numCPUs = os.cpus().length;
const PORT = process.env.PORT || 5000;
dotenv.config();

// Multi-process to utilize all CPU cores.
if (cluster.isMaster) {
    console.error(`Node cluster master ${process.pid} is running`);

    // Fork workers.
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.error(
            `Node cluster worker ${
                worker.process.pid
            } exited: code ${code}, signal ${signal}`
        );
    });
} else {
    const app = express();

    // Priority serve any static files.
    app.use(express.static(path.resolve(__dirname, 'client/build')));

    app.use(function(req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header(
            'Access-Control-Allow-Headers',
            'Origin, X-Requested-With, Content-Type, Accept'
        );
        next();
    });

    // Answer API requests.
    app.use('/', router);

    // All remaining requests return the React app, so it can handle routing.
    app.get('*', function(request, response) {
        response.sendFile(
            path.resolve(__dirname, 'client/build', 'index.html')
        );
    });

    app.listen(PORT, function() {
        console.error(
            `Node cluster worker ${process.pid}: listening on port ${PORT}`
        );
    });
}
