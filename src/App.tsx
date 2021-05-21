import './App.scss';
import Footer from './components/Footer';
import Generator from './components/Generator';
import Header from './components/Header';

const App = () => {
    return (
        <div className='App'>
            <Header label='Lorem Gen' />
            <Generator />
            <Footer />
        </div>
    );
};

export default App;
