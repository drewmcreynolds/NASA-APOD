import Axios from 'axios'
import { AppState } from '../AppState.js'
import { baseURL } from '../env.js'
import { logger } from '../utils/Logger.js'

const apiKey = 'api_key=8xI67ZaOW7IvUZ7daSAs5uQ4hqKLdcNwFMVF1xba'
export const nasaApi = Axios.create({
  baseURL: 'https://api.nasa.gov/planetary/apod'
})

class NasaService {
  async findPictureByDate(query) {
    const res = await nasaApi.get(`?${apiKey}&date=${query}`)
    logger.log('the res', res.data)
    AppState.apod = res.data
    AppState.desc = res.data.explanation
  }
}

export const nasaService = new NasaService()
