import { Router } from 'express'
import { Category } from '../../models/common.js'
import adminAuth from './auth.js'
const r = Router()

r.use(adminAuth)

r.get('/', async (req,res)=> res.json(await Category.find().sort({name:1})))
r.post('/', async (req,res)=> res.status(201).json(await Category.create(req.body)))
r.put('/:id', async (req,res)=> res.json(await Category.findByIdAndUpdate(req.params.id, req.body, {new:true})))
r.delete('/:id', async (req,res)=> { await Category.findByIdAndDelete(req.params.id); res.json({ok:true}) })

export default r
