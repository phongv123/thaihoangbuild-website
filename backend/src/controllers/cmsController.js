import {
    SiteConfig,
    BannerCMS,
    Page,
    Service,
    Partner,
} from '../models/cms.js'

// ==============================
// SITE CONFIG
// ==============================

export const getSiteConfig = async (_req, res) => {
    const config = await SiteConfig
        .findOne({ key: 'default' })
        .lean()

    res.json(
        config || {
            key: 'default',
        }
    )
}

export const updateSiteConfig = async (req, res) => {
    const config = await SiteConfig.findOneAndUpdate(
        { key: 'default' },
        {
            ...req.body,
            key: 'default',
        },
        {
            new: true,
            upsert: true,
            setDefaultsOnInsert: true,
        }
    )

    res.json(config)
}

// ==============================
// BANNERS
// ==============================

export const listBanners = async (_req, res) => {
    const items = await BannerCMS
        .find({
            isActive: true,
        })
        .sort({
            order: 1,
            createdAt: -1,
        })
        .lean()

    res.json({
        items,
    })
}

export const adminListBanners = async (_req, res) => {
    const items = await BannerCMS
        .find()
        .sort({
            order: 1,
            createdAt: -1,
        })
        .lean()

    res.json(items)
}

export const createBanner = async (req, res) => {
    const item = await BannerCMS.create(req.body)

    res.status(201).json(item)
}

export const updateBanner = async (req, res) => {
    const item = await BannerCMS.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true,
            runValidators: true,
        }
    )

    if (!item) {
        return res.status(404).json({
            error: 'Không tìm thấy banner',
        })
    }

    res.json(item)
}

export const deleteBanner = async (req, res) => {
    const item = await BannerCMS.findByIdAndDelete(
        req.params.id
    )

    if (!item) {
        return res.status(404).json({
            error: 'Không tìm thấy banner',
        })
    }

    res.json({
        ok: true,
    })
}

// ==============================
// PAGES
// ==============================

export const getPage = async (req, res) => {
    const item = await Page.findOne({
        slug: req.params.slug,
        isPublished: true,
    }).lean()

    if (!item) {
        return res.status(404).json({
            error: 'Page not found',
        })
    }

    res.json(item)
}

export const adminListPages = async (_req, res) => {
    const items = await Page
        .find()
        .sort({
            updatedAt: -1,
        })
        .lean()

    res.json(items)
}

export const createPage = async (req, res) => {
    const item = await Page.create(req.body)

    res.status(201).json(item)
}

export const updatePage = async (req, res) => {
    const item = await Page.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true,
            runValidators: true,
        }
    )

    if (!item) {
        return res.status(404).json({
            error: 'Không tìm thấy page',
        })
    }

    res.json(item)
}

export const deletePage = async (req, res) => {
    await Page.findByIdAndDelete(req.params.id)

    res.json({
        ok: true,
    })
}

// ==============================
// SERVICES
// ==============================

export const listServices = async (_req, res) => {
    const items = await Service
        .find({
            isActive: true,
        })
        .sort({
            order: 1,
            createdAt: -1,
        })
        .lean()

    res.json({
        items,
    })
}

export const adminListServices = async (_req, res) => {
    const items = await Service
        .find()
        .sort({
            order: 1,
            createdAt: -1,
        })
        .lean()

    res.json(items)
}

export const createService = async (req, res) => {
    const item = await Service.create(req.body)

    res.status(201).json(item)
}

export const updateService = async (req, res) => {
    const item = await Service.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true,
            runValidators: true,
        }
    )

    if (!item) {
        return res.status(404).json({
            error: 'Không tìm thấy dịch vụ',
        })
    }

    res.json(item)
}

export const deleteService = async (req, res) => {
    await Service.findByIdAndDelete(req.params.id)

    res.json({
        ok: true,
    })
}

// ==============================
// PARTNERS
// ==============================

export const listPartners = async (_req, res) => {
    const items = await Partner
        .find({
            isActive: true,
        })
        .sort({
            order: 1,
            createdAt: -1,
        })
        .lean()

    res.json({
        items,
    })
}

export const adminListPartners = async (_req, res) => {
    const items = await Partner
        .find()
        .sort({
            order: 1,
            createdAt: -1,
        })
        .lean()

    res.json(items)
}

export const createPartner = async (req, res) => {
    const item = await Partner.create(req.body)

    res.status(201).json(item)
}

export const updatePartner = async (req, res) => {
    const item = await Partner.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true,
            runValidators: true,
        }
    )

    if (!item) {
        return res.status(404).json({
            error: 'Không tìm thấy đối tác',
        })
    }

    res.json(item)
}

export const deletePartner = async (req, res) => {
    await Partner.findByIdAndDelete(req.params.id)

    res.json({
        ok: true,
    })
}