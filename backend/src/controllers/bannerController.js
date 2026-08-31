import { Banner } from "../models/common.js";

// GET /api/banners
export const getBanners = async (req, res) => {
    try {
        const {
            page = "home",
            limit = 12,
        } = req.query;

        const items = await Banner.find({
            page,
        })
            .sort({
                order: 1,
                createdAt: -1,
            })
            .limit(Number(limit));

        res.json(items);
    } catch (err) {
        console.error(err);

        res.status(500).json({
            error: err.message,
        });
    }
};

// POST /api/banners
export const createBanner = async (req, res) => {
    try {
        const banner = await Banner.create({
            page: req.body.page || "home",
            title: req.body.title || "",
            subtitle: req.body.subtitle || "",
            cover: req.body.cover || "",
            buttonText:
                req.body.buttonText || "",
            link: req.body.link || "",
            order:
                Number(req.body.order) || 0,
            isActive:
                req.body.isActive !== false,
        });

        res.status(201).json(banner);
    } catch (err) {
        console.error(err);

        res.status(400).json({
            error: err.message,
        });
    }
};

// PUT /api/banners/:id
export const updateBanner = async (
    req,
    res
) => {
    try {
        const banner =
            await Banner.findByIdAndUpdate(
                req.params.id,
                {
                    page:
                        req.body.page ||
                        "home",

                    title:
                        req.body.title ||
                        "",

                    subtitle:
                        req.body.subtitle ||
                        "",

                    cover:
                        req.body.cover ||
                        "",

                    buttonText:
                        req.body.buttonText ||
                        "",

                    link:
                        req.body.link ||
                        "",

                    order:
                        Number(req.body.order) ||
                        0,

                    isActive:
                        req.body.isActive !== false,
                },
                {
                    new: true,
                    runValidators: true,
                }
            );

        if (!banner) {
            return res.status(404).json({
                error:
                    "Không tìm thấy banner.",
            });
        }

        res.json(banner);
    } catch (err) {
        console.error(err);

        res.status(400).json({
            error: err.message,
        });
    }
};

// DELETE /api/banners/:id
export const deleteBanner = async (
    req,
    res
) => {
    try {
        const banner =
            await Banner.findByIdAndDelete(
                req.params.id
            );

        if (!banner) {
            return res.status(404).json({
                error:
                    "Không tìm thấy banner.",
            });
        }

        res.status(204).send();
    } catch (err) {
        console.error(err);

        res.status(400).json({
            error: err.message,
        });
    }
};