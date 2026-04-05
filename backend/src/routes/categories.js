import { Router } from 'express'
import { getCategories, createCategory } from '../controllers/categoryController.js'

const r = Router()

r.get('/', getCategories)
r.post('/', createCategory)

export default r
