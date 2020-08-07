const express = require('express');

const cors = require('cors');

const app = express();

const authorization_key = process.env.KEY;

app.use(cors());

app.get('/:key', async (request, response, next) => {
    let key_to_check = request.params.key;

    console.log(`Got request ====> /${key_to_check}`);

    if (key_to_check === authorization_key) {
        response.status(200).send();
    } else {
        response.status(401).send();
    }

    next();
});

app.listen(process.env.PORT);