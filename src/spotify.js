export const authEndPoint = 'https://accounts.spotify.com/authorize'
const clientId = 'c3cac9a72abc48cbbcb20fc2de8673b6'
const redirectUri = "http://localhost:3000/"
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const loginUrl = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;