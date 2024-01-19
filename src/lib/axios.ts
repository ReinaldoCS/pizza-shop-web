import axios from 'axios'

import { env } from '@/env'

export const api = axios.create({
  url: env.VITE_API_URL,
})
