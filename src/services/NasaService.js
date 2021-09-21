import Axios from 'axios'
import { AppState } from '../AppState.js'
import { baseURL } from '../env'

const apiKey = 'api_key=8xI67ZaOW7IvUZ7daSAs5uQ4hqKLdcNwFMVF1xba'
export const nasaApi = Axios.create({
  baseURL: 'https://api.nasa.gov/planetary/apod'
})

class NasaService {
  async findPictureByQuery(query, page = 1) {
    const res = await nasaApi.get(`?query=${query}&page=${page}&${apiKey}`)
    // RULE dont ever return from the service
    logger.log('the res', res)
}

export const nasaService = new NasaService()
