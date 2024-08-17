// External.
import { createRouterMiddleware, ReduxRouter } from '@lagunovsky/redux-react-router'
import { createHashHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { thunk } from 'redux-thunk';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import {
	persistStore,
	persistCombineReducers,
} from 'redux-persist';
import storage from 'redux-persist-indexeddb-storage';

// Internal
import Root from './components/root';
import reducers from './reducers';

function App() {
  const history = createHashHistory();
  const persistenceConfig = {
    key: 'primary',
    storage: storage( 'syncbible' ),
    blacklist: [ 'data' ],
  };
  const persistedReducer = persistCombineReducers(
    persistenceConfig,
    reducers( history )
  );

  const routerMiddleware = createRouterMiddleware(history);
  const store = createStore( persistedReducer, compose(applyMiddleware(routerMiddleware, thunk)));
  let persistor = persistStore( store );

  return (
    <Provider store={ store }>
      <PersistGate loading={ null } persistor={ persistor }>
      	<ReduxRouter
					history={ history }
				>
          <Root />
        </ReduxRouter>
        </PersistGate>
      </Provider>
  )
}

export default App
