import mongoose from 'mongoose'

const opts = {
    timestamps: true,
}

const siteConfigSchema = new mongoose.Schema(
    {
        key: {
            type: String,
            unique: true,
            default: 'default',
        },

        companyName: {
            type: String,
            default: 'ThaiHoangBuild',
        },

        slogan: {
            type: String,
            default: '',
        },

        logo: {
            type: String,
            default: '',
        },

        hotline: {
            type: String,
            default: '',
        },

        hotlineSecondary: {
            type: String,
            default: '',
        },

        email: {
            type: String,
            default: '',
        },

        address: {
            type: String,
            default: '',
        },

        workingHours: {
            type: String,
            default: '',
        },

        zaloNumber: {
            type: String,
            default: '',
        },

        zaloUrl: {
            type: String,
            default: '',
        },

        facebookUrl: {
            type: String,
            default: '',
        },

        youtubeUrl: {
            type: String,
            default: '',
        },

        mapUrl: {
            type: String,
            default: '',
        },

        copyright: {
            type: String,
            default: '',
        },

        heroTitle: {
            type: String,
            default: '',
        },

        heroSubtitle: {
            type: String,
            default: '',
        },

        heroButtonText: {
            type: String,
            default: '',
        },

        heroButtonUrl: {
            type: String,
            default: '/contact',
        },

        quickContactText: {
            type: String,
            default: '',
        },
    },
    opts
)

const bannerSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            default: '',
        },

        subtitle: {
            type: String,
            default: '',
        },

        coverImage: {
            type: String,
            default: '',
        },

        buttonText: {
            type: String,
            default: '',
        },

        buttonUrl: {
            type: String,
            default: '',
        },

        order: {
            type: Number,
            default: 0,
        },

        isActive: {
            type: Boolean,
            default: true,
        },
    },
    opts
)

const pageSchema = new mongoose.Schema(
    {
        slug: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },

        title: {
            type: String,
            required: true,
        },

        excerpt: {
            type: String,
            default: '',
        },

        content: {
            type: String,
            default: '',
        },

        coverImage: {
            type: String,
            default: '',
        },

        seoTitle: {
            type: String,
            default: '',
        },

        seoDescription: {
            type: String,
            default: '',
        },

        isPublished: {
            type: Boolean,
            default: true,
        },
    },
    opts
)

const serviceSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },

        description: {
            type: String,
            default: '',
        },

        image: {
            type: String,
            default: '',
        },

        link: {
            type: String,
            default: '',
        },

        order: {
            type: Number,
            default: 0,
        },

        isActive: {
            type: Boolean,
            default: true,
        },
    },
    opts
)

const partnerSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },

        image: {
            type: String,
            default: '',
        },

        link: {
            type: String,
            default: '',
        },

        order: {
            type: Number,
            default: 0,
        },

        isActive: {
            type: Boolean,
            default: true,
        },
    },
    opts
)

export const SiteConfig = mongoose.model(
    'SiteConfig',
    siteConfigSchema
)

export const BannerCMS = mongoose.model(
    'BannerCMS',
    bannerSchema
)

export const Page = mongoose.model(
    'Page',
    pageSchema
)

export const Service = mongoose.model(
    'Service',
    serviceSchema
)

export const Partner = mongoose.model(
    'Partner',
    partnerSchema
)