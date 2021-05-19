import './App.scss';
import Description from './components/Description';
import Generator from './components/Generator';
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
            <Generator />
        </div>
    );
};

export default App;
