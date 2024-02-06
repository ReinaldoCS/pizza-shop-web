import { http, HttpResponse } from 'msw'

import {
  GetOrderDetailsParams,
  GetOrderDetailsResponse,
} from '../get-order-details'

export const getOrderDetailsMock = http.get<
  GetOrderDetailsParams,
  never,
  GetOrderDetailsResponse
>('/orders/:orderId', async ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    createdAt: new Date().toISOString(),
    status: 'pending',
    totalInCents: (10 + 24) * 100,
    customer: {
      name: 'John Doe',
      email: 'johndoe@example.com',
      phone: '0123456789',
    },
    orderItems: [
      {
        id: 'order-item-1',
        priceInCents: 10 * 100,
        quantity: 1,
        product: { name: 'Product 1' },
      },
      {
        id: 'order-item-2',
        priceInCents: 12 * 100,
        quantity: 2,
        product: { name: 'Product 2' },
      },
    ],
  })
})
