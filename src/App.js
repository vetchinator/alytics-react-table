import './App.css';
import { services, total } from './store';
import Table from './components/Table/Table';

const App = () => {
    return (
        <Table services={services} total={total} />
    )
}

export default App;
