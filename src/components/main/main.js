import ToDo from '../todo/todo';
import Header from '../header/header';

import Settings from '../../context/settings.js';

export default function Main(props) {
  return (
    <>
      <Settings>
        <div id='main'>
          <Header />
          <ToDo />
        </div>
      </Settings>
    </>
  );
}
