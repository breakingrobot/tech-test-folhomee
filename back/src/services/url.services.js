import Url from '../models/url.model'
import { Op } from 'sequelize'

/**
 * Fetch all URLs and paginate it
 * @param limit
 * @param skip
 * @returns {Promise<{rows: Url[]; count: number}>}
 */
const findAll = async ({ limit, skip }) => {
  try {
    return await Url.findAndCountAll({ limit: limit, offset: skip })
  } catch (e) {
    throw Error('Error while fetching URL')
  }
}

/**
 * Find an URL by it primary key.
 * @param {int} id
 * @returns {Promise<Url>}
 */
const find = async (id) => {
  try {
    return await Url.findOne({
      where: {
        id: {
          [Op.eq]: id
        }
      }
    })
  } catch (e) {
    throw Error('Error while fetching URL')
  }
}

/**
 * Find or Create an URL Entity based on its URL
 * @param {string} sentUrl
 * @returns {Promise<Url>}
 */
const findOrCreateByUrl = async ({ sentUrl }) => {
  if (!sentUrl) {
    throw new Error('Sent URL should not be null')
  }
  try {
    const query = {
      where: {
        url: {
          [Op.eq]: sentUrl
        }
      }
    }
    return await Url.findOne(query) || await Url.create({ url: sentUrl })
  } catch (e) {
    throw Error(e)
  }
}

export default { findAll, find, findOrCreateByUrl }
