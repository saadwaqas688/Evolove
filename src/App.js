// import ErrorPage from './Components/UI/ErrorPage/ErrorPage';
import { SnackbarProvider } from 'notistack';
import ApplicationRoutes from './Routes/ApplicationRoutes';

function App() {
  return (
    <SnackbarProvider>

    <ApplicationRoutes/>

    </SnackbarProvider>


 
  );
}

export default App;
