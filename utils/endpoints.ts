export const BASE_URL = 'https://hiring.tailwarden.com/v1'

export const ENDPOINTS = {
  ACCOUNTS: BASE_URL + '/accounts',
  ACCOUNT: (id: string) => `${BASE_URL}/accounts/${id}` as const,
  ACCOUNT_HISTORY: (id: string) => `${BASE_URL}/accounts/${id}/history` as const,
}