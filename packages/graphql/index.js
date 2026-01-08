import express from 'express';
import { createHandler } from 'graphql-http/lib/use/express';
import { ruruHTML } from 'ruru/server';
import cors from 'cors';

import schema from './schema/index.js';

const app = express();

const corsOptions = {
  origin: 'http://localhost:5173',
};

app.use(cors(corsOptions));

app.all('/graphql', createHandler({ schema}));

app.get('/', (_req, res) => {
  res.type('html');
  res.end(ruruHTML({ endpoint: '/graphql' }));
});

app.listen(4000);
