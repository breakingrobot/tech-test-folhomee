import paginate from 'express-paginate'
import HashID from '../utils/hashid'
import UrlService from '../services/url.services'

/**
 * Fetch all URLs and return them as a JSON response.
 * @param req
 * @param res
 * @param next
 * @returns {Promise<*|Json>}
 */
const indexUrl = async (req, res, next) => {
  const { limit, skip, page } = req.query
  try {
    const url = await UrlService.findAll({
      limit: limit,
      skip: skip
    })
    const urlCount = url.count
    const pageCount = Math.ceil(urlCount / limit)
    const metadata = {
      pageCount,
      urlCount,
      pages: paginate.getArrayPages(req)(3, pageCount, page)
    }
    return res.status(200).json({ status: 200, data: { url: url.rows }, metadata: metadata })
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message })
  }
}

/**
 * Fetch one URL by HashID and return the URL data as a JSON Response.
 * @param req
 * @param res
 * @param next
 * @returns {Promise<*|Json>}
 */
const getUrl = async (req, res, next) => {
  const { hash } = req
  try {
    const url = await UrlService.find(HashID.decode(hash))
    return res.status(200).json({ status: 200, data: { url: url } })
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message })
  }
}

/**
 * Save an URL based on POST data into the database and returns it as a JSON Response.
 * @param req
 * @param res
 * @param next
 * @returns {Promise<*|Json>}
 */
const saveUrl = async (req, res, next) => {
  const { url } = req.body
  try {
    const hashedUrl = await UrlService.findOrCreateByUrl({ sentUrl: url })
    const data = {
      ...hashedUrl,
      hash: HashID.encode(hashedUrl.id)
    }
    return res.status(200).json({ status: 200, data: data })
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message })
  }
}

export default { indexUrl, getUrl, saveUrl }
