import { Router } from 'express'

import adminAuth from './auth.js'

import {
    updateSiteConfig,

    adminListBanners,
    createBanner,
    updateBanner,
    deleteBanner,

    adminListPages,
    createPage,
    updatePage,
    deletePage,

    adminListServices,
    createService,
    updateService,
    deleteService,

    adminListPartners,
    createPartner,
    updatePartner,
    deletePartner,
} from '../../controllers/cmsController.js'

const router = Router()

router.use(adminAuth)

// Site Config
router.put(
    '/site-config',
    updateSiteConfig
)

// Banners
router.get(
    '/banners',
    adminListBanners
)

router.post(
    '/banners',
    createBanner
)

router.put(
    '/banners/:id',
    updateBanner
)

router.delete(
    '/banners/:id',
    deleteBanner
)

// Pages
router.get(
    '/pages',
    adminListPages
)

router.post(
    '/pages',
    createPage
)

router.put(
    '/pages/:id',
    updatePage
)

router.delete(
    '/pages/:id',
    deletePage
)

// Services
router.get(
    '/services',
    adminListServices
)

router.post(
    '/services',
    createService
)

router.put(
    '/services/:id',
    updateService
)

router.delete(
    '/services/:id',
    deleteService
)

// Partners
router.get(
    '/partners',
    adminListPartners
)

router.post(
    '/partners',
    createPartner
)

router.put(
    '/partners/:id',
    updatePartner
)

router.delete(
    '/partners/:id',
    deletePartner
)

export default router