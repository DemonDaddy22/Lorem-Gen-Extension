import './App.scss';
import AppError from './components/AppError';
import Description from './components/Description';
import Header from './components/Header';

const App = () => {
    return (
        <div className='App'>
            <Header label='Lorem Gen' />
            <Description>
                Quickly generate lorem ipsum text to bootstrap your content!
                <br />
                It's <em className='pitch'>fast</em>, <em className='pitch'>meaningless</em> and <em className='pitch'>not-so-boring</em>!
            </Description>
            <AppError label='Something went wrong!' />
        </div>
    );
};

export default App;
