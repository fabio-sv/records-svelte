import { config } from 'dotenv'

export const authorizedFetch = (url, options) => {
  if (!options) {
    options = {}
  }

  if (!options.headers) {
    options.headers = {}
  }

  if (!options.headers['Content-Type']) {
    options.headers['Content-Type'] = 'application/json'
  }

  const { subscriptionKey } = config

  if (subscriptionKey) {
    options.headers['Ocp-Apim-Subscription-Key'] = config.subscriptionKey
  }

  return fetch(url, options)
}
