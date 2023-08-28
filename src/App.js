import logo from './logo.svg';
import './App.css';
import Body from './Components/Body';
import { Provider } from 'react-redux';
import store from './utils/store';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Error from './Components/Error';
import Login from './Components/Login';
import Test from './Components/Test';
import TodoForm from './Components/TodoForm';

const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<Body/>,
  },
  {
    path:'/login',
    element:<Login/>
  },{
    path:'/task',
    element:<TodoForm/>
  }
]);

function App() {
  return (
     <div>
      <Provider store={store}>
      <RouterProvider router={appRouter}/>
      </Provider>
    </div>
  );
}

export default App;
