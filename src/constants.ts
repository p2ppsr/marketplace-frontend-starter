interface Constants {
  keyServer: string
}

// Local and Production URLs
const production = '' // TODO set to your live key-server URL
const local = 'http://localhost:3000'

let constants: Constants

if (window.location.host.startsWith('localhost')) {
  constants = {
    keyServer: local
  }
} else {
  // Production
  constants = {
    keyServer: production
  }
}

export default constants
