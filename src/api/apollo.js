import { ApolloClient, InMemoryCache } from "@apollo/client";
import { setContext } from 'apollo-link-context'
import { HttpLink } from 'apollo-link-http'

const httpLink = new HttpLink({ uri: 'https://api.github.com/graphql' })

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${
        process.env.REACT_APP_GITHUB_API_TOKEN
      }`
    }
  }
})

const link = authLink.concat(httpLink)

export const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache()
})