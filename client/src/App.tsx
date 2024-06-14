import { Container } from 'react-bootstrap';
import { Navbar } from './components/navbar/navbar';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    return (
        <div>
            <Navbar />
            <Container>
                <Outlet />
            </Container>
            <Toaster position='top-right' />
        </div>
    );
}

export default App;
