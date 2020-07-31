import baseApi from './index'

const getAll = async (params = {}) => {
  const response = await baseApi.get('url', {
    params
  })
  return response.data
}

const save = async (url) => {
  const response = await baseApi.post('url', { url })
  return response.data
}

export default {
  getAll,
  save
}
