
import * as express from 'express';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './../pages/app';
/*import './../pages/index.css';*/

const router = express.Router();

router.get('/:name', async (req, res) => {
  ReactDOM.render(<App />, document.getElementById('root'));
});

export default router;
