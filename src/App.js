import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from './redux/actions/userAction';
import { useEffect } from 'react';

function App() {
  const data = useSelector(state => state.users.data)
  const requesting = useSelector(state => state.users.requesting)
  console.log(data, requesting)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, [])
  
  return (
    <div className="App">
      {
        !data ?
        <p>Không có data</p>
        :
        <div>
          <ul>
            {data.map(item => <li key={item?.id}>{item.fullname}</li>)}
          </ul>
        </div>
      }
    </div>
  );
}

export default App;
