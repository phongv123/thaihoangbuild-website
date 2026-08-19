import { Router } from 'express'

import {
    getPage,
    listServices,
    listPartners,
} from '../controllers/cmsController.js'

const router = Router()

router.get('/pages/:slug', getPage)

router.get('/services', listServices)

router.get('/partners', listPartners)

export default router