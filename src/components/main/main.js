import ToDo from '../todo/todo';
import Header from '../header/header';
import Settings from '../../context/settings.js';
import Login from '../../context/login';
export default function Main(props) {
  return (
    <>
      <Settings>
        <Login>
          <div id='main'>
            <Header />
            <ToDo />
          </div>
        </Login>
      </Settings>
    </>
  );
}
