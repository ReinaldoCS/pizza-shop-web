import { http, HttpResponse } from 'msw'

import { GetProfileResponse } from '../get-profile'

export const getProfileMock = http.get<never, never, GetProfileResponse>(
  '/me',
  () => {
    return HttpResponse.json({
      id: 'custome-user-id',
      name: 'John Doe',
      email: 'johndoe@example.com',
      phone: '0123456789',
      role: 'manager',
      createdAt: new Date(),
      updatedAt: null,
    })
  },
)
