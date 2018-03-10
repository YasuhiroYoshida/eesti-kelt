let hostAddress;

const currentHost = window && window.location && window.location.hostname;

if (currentHost == 'localhost') {
  hostAddress = 'http://localhost:3333';
} else {
  hostAddress = 'https://en-ee-dictionary-api.herokuapp.com';
}

export const SERVER_ADDRESS = hostAddress;
