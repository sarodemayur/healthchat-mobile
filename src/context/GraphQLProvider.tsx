import React, { useMemo } from 'react';
import { Client, Provider, cacheExchange, fetchExchange, subscriptionExchange } from 'urql';
import { createClient as createWSClient } from 'graphql-ws';
import { HASURA_GRAPHQL_ENDPOINT, HASURA_WS_ENDPOINT } from '../utils/config';
import { useAuth } from './AuthContext';

export function GraphQLProvider({ children }: { children: React.ReactNode }) {
  const { jwtToken } = useAuth();

  const client = useMemo(() => {
    const wsClient = createWSClient({
      url: HASURA_WS_ENDPOINT,
      connectionParams: jwtToken
        ? { headers: { Authorization: `Bearer ${jwtToken}` } }
        : undefined,
    });

    return new Client({
      url: HASURA_GRAPHQL_ENDPOINT,
      preferGetMethod: false,
      fetchOptions: (): RequestInit => ({
        headers: {
          'Content-Type': 'application/json',
          ...(jwtToken ? { Authorization: `Bearer ${jwtToken}` } : {}),
        },
      }),
      exchanges: [
        cacheExchange,
        fetchExchange,
        subscriptionExchange({
          forwardSubscription: (request) => ({
            subscribe: (sink) => ({
              unsubscribe: wsClient.subscribe(
                { query: request.query ?? '', variables: request.variables },
                sink,
              ),
            }),
          }),
        }),
      ],
    });
  }, [jwtToken]);

  return <Provider value={client}>{children}</Provider>;
}
