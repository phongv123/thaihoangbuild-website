import { Router } from 'express'
import { getPosts, createPost } from '../controllers/postController.js'

const r = Router()

r.get('/', getPosts)
r.post('/', createPost)

export default r
