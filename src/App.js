import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import Main from './pages/Main';
import Post from './pages/Post';
import Page404 from './pages/Page404';

const AppWrapper = () => {
  let routes = useRoutes([
    { path: '/', element: <Main /> },
    { path: 'post/:id', element: <Post /> },
    { path: '*', element: <Page404 /> },
  ]);
  return routes;
};

function App() {
  return (
    <>
      <Router>
        <AppWrapper />
      </Router>
    </>
  );
}

export default App;
