import { Router } from 'express'
import urlController from '../controllers/url.controller'
const router = Router()

/* GET home page. */
router.get('/:hash', urlController.getUrl)
router.post('/', urlController.saveUrl)

export default router
