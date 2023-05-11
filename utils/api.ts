import useSWR from 'swr'

import { ENDPOINTS } from './endpoints';

const fetcher = (...args) => fetch(...args).then(res => res.json())

export function useGetAccounts() {
  const { data, error, isLoading } = useSWR(ENDPOINTS.ACCOUNTS, fetcher, { refreshInterval: 0 })

  return {
    accounts: data,
    isLoading,
    isError: error
  }
}

export function useGetAccount(id: string | null) {
  const { data, error, isLoading } = useSWR(() => id ? ENDPOINTS.ACCOUNT(id) : null, fetcher, { refreshInterval: 0 })

  return {
    account: data,
    isLoading,
    isError: error
  }
}

export function useGetAccountHistory(id: string | null) {
  const { data, error, isLoading } = useSWR(() => id ? ENDPOINTS.ACCOUNT_HISTORY(id) : null, fetcher, { refreshInterval: 0 })

  return {
    accountHistory: data,
    isLoading,
    isError: error
  }
}