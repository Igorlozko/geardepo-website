import {Router} from 'express'

import {createGear} from '../controllers/gear.js'
import auth from '../middleware/auth.js';


const gearRouter = Router()
gearRouter.post('/',auth, createGear);

export default gearRouter;