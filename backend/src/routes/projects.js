// routes/projects.js
import { Router } from 'express'
import { getProjects, createProject } from '../controllers/projectController.js'

const r = Router()

r.get('/', getProjects)
r.post('/', createProject)

export default r
