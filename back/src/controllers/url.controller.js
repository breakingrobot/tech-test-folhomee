import HashID from '../utils/hashid'
import UrlService from '../services/url.services'
import { Op } from 'sequelize'

const getUrl = async (req, res, next) => {
  const { hash } = req
  try {
    const url = await UrlService.getUrl({
      where: {
        id: {
          [Op.eq]: HashID.decode(hash)
        }
      }
    })
    return res.status(200).json({ status: 200, data: { url: url }, message: url })
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message })
  }
}

const saveUrl = async (req, res, next) => {
  const { url } = req.body
  try {
    const hashedUrl = await UrlService.saveUrl({ url: url, redirectCount: 0 })
    const data = {
      ...hashedUrl,
      hash: HashID.encode(hashedUrl.id)
    }
    return res.status(200).json({ status: 200, data: data, message: hashedUrl })
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message })
  }
}

export default { getUrl, saveUrl }
