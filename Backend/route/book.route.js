//for define route we need express

import express, { Router } from 'express';

import { getBook } from '../controller/book.controller.js';

const router = express.Router()

router.get("/",getBook)  // lets test the api when /book route mein jaye ,getbook function in book.modelmein aye should start then all data code in try should we get in response lets see in postman


export default router;