// TODO: Render the `App` component to the DOM
import App from './components/App.js';

ReactDOM.render(
  <App />,

  document.getElementById('app'),

  () => console.log('app is rendered')
);
