import Url from '../models/url.model'

const getUrl = async (query) => {
  try {
    return await Url.findOne(query)
  } catch (e) {
    throw Error('Error while fetching URL')
  }
}

const saveUrl = async (values) => {
  try {
    return await Url.create(values)
  } catch (e) {
    throw Error('Error while creating URL')
  }
}

export default { getUrl, saveUrl }
