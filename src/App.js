import { createContext, useContext, useReducer } from 'react'
import { Switch, Route } from 'react-router-dom';

import Login from './components/Login';
import Home from './components/Home';
import Audio from './components/sample';

export const initialState = {
  token: '',
  user: null,
  playlists: [],
  playing: false,
  item: null,
  tracks: [],
  playerState: false,
  currentPlaying: null,
  selectedPlaylistId: '',
  track: {
    id: '4vX7VKZYx1wGAq5DKBTfAF',
    previewUrl: 'https://p.scdn.co/mp3-preview/80bcc01a73fb09cd8cc7535bffbd93e2acf742f4?cid=c3cac9a72abc48cbbcb20fc2de8673b6',
  },
}

export const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_TOKEN':
      return { ...state, token: action.token }
    case 'SET_USER':
      return { ...state, user: action.user }
    case 'SET_PLAYLISTS':
      return { ...state, playlists: action.playlists }
    case 'CURRENT_PLAYLIST':
      return { ...state, selectedPlaylist: action.currentPlaylist }
    case 'SET_TRACKS':
      return { ...state, tracks: action.tracks }
    case 'SET_TRACK':
      return { ...state, track: action.track }
    case 'SET_PLAYERSTATE':
      return { ...state, playerState: action.playerState }
    default:
      return state;
  }
}

export const DataLayerContext = createContext()

const App = () => {
  return (
    <div>
      <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/audio" component={Audio} />
          <Route path="/login" component={Login} />
        </Switch>
      </DataLayerContext.Provider>
    </div>
  );
}

export default App;
