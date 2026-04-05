import { Router } from 'express'
import { Product } from '../../models/common.js'
import adminAuth from './auth.js'
const r = Router()

r.use(adminAuth)

r.get('/', async (req,res)=> res.json(await Product.find().sort({createdAt:-1})))
r.post('/', async (req,res)=> res.status(201).json(await Product.create(req.body)))
r.put('/:id', async (req,res)=> res.json(await Product.findByIdAndUpdate(req.params.id, req.body, {new:true})))
r.delete('/:id', async (req,res)=> { await Product.findByIdAndDelete(req.params.id); res.json({ok:true}) })

export default r
