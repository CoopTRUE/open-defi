import type { Protocol } from './types'
import { createQuery } from '@tanstack/svelte-query'
import axios, { AxiosError } from 'axios'

function createReq<T>(url: string) {
  return () => axios.get<T>(url).then(({ data }) => data)
}

interface ProtocolsResponse {
  protocols: Protocol[]
}
export function createProtocolsQuery() {
  const query = createQuery({
    queryKey: ['protocols'],
    queryFn: createReq<ProtocolsResponse>('https://api.llama.fi/lite/protocols2?b=2'),
    // select only first 50 protocols
    select: ({ protocols }) => protocols.slice(0, 200),
  })
  return query
}
