import './App.css';
import Custormer from './components/Customer';

const customer = {
  'name':'장요한',
  'birthday':'90.01.02',
  'gender':'남자',
  'job':'대학생'
}

function App() {
  return (
    <div className="App">
      <Custormer
        name={customer.name}
        birthday={customer.birthday}
        gender={customer.gender}
        job={customer.job}
        />
    </div>
  );
}

export default App;
