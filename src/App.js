import './App.css';
import AlbumFeature from './features/Album';
import TodoFeature from './features/Todo';

function App() {
  const age = 18;
  const name = 'Cuc'
  const isMale = true;
  const student = {
    name: 'Lio'
  }
  const colorList = ['red', 'green', 'blue']

  return (
    <div className="App">
      <header className="App-header">
        <img src="https://scontent.fsgn5-2.fna.fbcdn.net/v/t1.0-9/123704076_2774667432813726_7469186402713983878_n.jpg?_nc_cat=107&ccb=2&_nc_sid=8bfeb9&_nc_ohc=BJztLEcc4owAX-F8DI2&_nc_ht=scontent.fsgn5-2.fna&oh=38ed676272a20e81403d77a11b279a10&oe=5FD14919" className="App-logo" alt="logo" />
        <TodoFeature />
        <AlbumFeature />
      </header>
    </div>
  );
}

export default App;
