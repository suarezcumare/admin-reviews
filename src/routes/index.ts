import * as express from 'express';
import * as healthcheck from 'express-healthcheck';
import test from './test';
import admin from './admin';

const router = express.Router();

router.use('/admin', admin);
router.use('/test', test);
router.use('/healthcheck', healthcheck());

export default router;
