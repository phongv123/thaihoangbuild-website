import { Router } from 'express'
import { getBanners, createBanner } from '../controllers/bannerController.js'

const r = Router()

r.get('/', getBanners)
r.post('/', createBanner)

export default r
