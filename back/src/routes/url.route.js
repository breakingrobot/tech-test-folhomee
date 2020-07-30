import { Router } from 'express'
import urlController from '../controllers/url.controller'
import saveUrlRequest from '../middlewares/validators/url.validator'
const router = Router()

/* GET home page. */
router.get('/', urlController.indexUrl)
router.get('/:hash', urlController.getUrl)
router.post('/', saveUrlRequest, urlController.saveUrl)

export default router
