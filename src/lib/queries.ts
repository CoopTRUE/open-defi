import CHAIN_TVL from './constants/chaints'
import type { Pool, Protocol } from './types'
import { createQuery } from '@tanstack/svelte-query'
import axios from 'axios'

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
    select: ({ protocols }) => protocols.slice(0, 100),
  })
  return query
}

export function createChainsQuery() {
  const query = createQuery({
    queryKey: ['chains'],
    queryFn: () => CHAIN_TVL,
    select: (chains) => chains.slice(0, 100),
  })
  return query
}

interface YieldsResponse {
  pools: Pool[]
  chainList: string[]
  projectList: string[]
  categoryList: string[]
  tokenNameMapping: Record<string, string>
  tokenSymbolsList: string[]
}

export function createYieldsQuery() {
  const query = createQuery({
    queryKey: ['yields'],
    queryFn: createReq<YieldsResponse>('/api/yields'),
  })
  return query
}
