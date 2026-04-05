import { Router } from 'express'
import { Project } from '../../models/common.js'
import adminAuth from './auth.js'
const r = Router()

r.use(adminAuth)

r.get('/', async (req,res)=>{
  const items = await Project.find().sort({createdAt:-1})
  res.json(items)
})

r.post('/', async (req,res)=>{
  const it = await Project.create(req.body)
  res.status(201).json(it)
})

r.put('/:id', async (req,res)=>{
  const it = await Project.findByIdAndUpdate(req.params.id, req.body, {new:true})
  res.json(it)
})

r.delete('/:id', async (req,res)=>{
  await Project.findByIdAndDelete(req.params.id)
  res.json({ ok:true })
})

export default r
