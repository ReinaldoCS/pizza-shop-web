import { api } from '@/lib/axios'

export type GetDailyRevenueInPeriodResponse = {
  date: string
  receipt: number
}[]

interface GetDailyRevenueInPeriodRequest {
  from?: Date
  to?: Date
}

export async function getDailyRevenueInPeriod({
  from,
  to,
}: GetDailyRevenueInPeriodRequest): Promise<GetDailyRevenueInPeriodResponse> {
  const response = await api.get<GetDailyRevenueInPeriodResponse>(
    '/metrics/daily-receipt-in-period',
    {
      params: {
        from: from?.toISOString(),
        to: to?.toISOString(),
      },
    },
  )

  return response.data
}
