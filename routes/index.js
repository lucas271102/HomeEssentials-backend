import express from 'express';
import authRouter from './auth.js'
import curriculumsRouter from './curriculums.js'
import categoryRouter from './categories.js'
import manufacturerRouter from './manufacturer.js'
import productRouter from './product.js'
import userRouter from './user.js'
import favoritesRouter from './favorites.js'
import carritoRouter from './cart.js'
import adminRouter from './admin.js'
import paymentRouter from '../controllers/payment/payment.js';
//const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Challenge',
    subtitle: 'Challenge final',
  });
});



router.use('/auth', authRouter)
router.use('/categories', categoryRouter)
router.use('/manufacturers', manufacturerRouter)
router.use('/products', productRouter)
router.use('/users', userRouter)
router.use('/curriculums', curriculumsRouter)
router.use('/favorites', favoritesRouter)
router.use('/cart', carritoRouter)
router.use('/admin', adminRouter)
router.use("/payment", paymentRouter)

export default router;