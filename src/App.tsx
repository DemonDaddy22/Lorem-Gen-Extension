import './App.scss';
import Generator from './components/Generator';
import Header from './components/Header';

const App = () => {
    return (
        <div className='App'>
            <Header label='Lorem Gen' />
            <Generator />
        </div>
    );
};

export default App;
