import { api } from '@/lib/axios'

interface GetMonthCanceledOrderAmountResponse {
  amount: number
  diffFromLastMonth: number
}

export async function getMonthCanceledOrderAmount(): Promise<GetMonthCanceledOrderAmountResponse> {
  const response = await api.get<GetMonthCanceledOrderAmountResponse>(
    '/metrics/month-canceled-orders-amount',
  )

  return response.data
}
