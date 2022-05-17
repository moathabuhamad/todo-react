import ToDo from '../todo/todo';
import Header from '../header/header';
import DisplaySettings from '../../context/display';
import ItemsNumSettings from '../../context/itemsNum';
import SortSettings from '../../context/sort';
import ItemsCompletedSettings from '../../context/itemsCompleted';

export default function Main(props) {
  return (
    <>
      <DisplaySettings>
        <ItemsNumSettings>
          <SortSettings>
            <ItemsCompletedSettings>
              <div id='main'>
                <Header />
                <ToDo />
              </div>
            </ItemsCompletedSettings>
          </SortSettings>
        </ItemsNumSettings>
      </DisplaySettings>
    </>
  );
}
