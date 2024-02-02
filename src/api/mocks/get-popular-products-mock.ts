import { http, HttpResponse } from 'msw'

import { GetPopularProductsResponse } from '../get-popular-products'

export const getPopularProductsMock = http.get<
  never,
  never,
  GetPopularProductsResponse
>('/metrics/popular-products', () => {
  return HttpResponse.json([
    { product: 'Pepperoni', amount: 40 },
    { product: 'Mussarela', amount: 30 },
    { product: 'Margherita', amount: 50 },
    { product: '4 Queijos', amount: 16 },
    { product: 'Calabresa com queijo', amount: 26 },
  ])
})
