'use client'

import { ApolloProvider } from '@apollo/client'
import { client } from 'lib/apollo'
import { ReactNode } from 'react'

interface ApolloProviderProps {
  children: ReactNode
}

export function ApolloContext({ children }: ApolloProviderProps) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
