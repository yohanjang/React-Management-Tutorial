import './App.css';
import Custormer from './components/Customer';

const customers = [
{
  'id': 1,
  "image": 'https://placeimg.com/64/64/1',
  'name':'장요한',
  'birthday':'90.01.02',
  'gender':'남자',
  'job':'대학생'
},
{
  'id': 2,
  "image": 'https://placeimg.com/64/64/2',
  'name':'홍길동',
  'birthday':'92.01.02',
  'gender':'여자',
  'job':'프로그래머'
},
{
  'id': 3,
  "image": 'https://placeimg.com/64/64/3',
  'name':'김철수',
  'birthday':'85.01.02',
  'gender':'남자',
  'job':'세무사'
}
]

function App() {
  return (
    <div className="App">
      <Custormer
        id      ={customers[0].id}
        image   ={customers[0].image}
        name    ={customers[0].name}
        birthday={customers[0].birthday}
        gender  ={customers[0].gender}
        job     ={customers[0].job}
        />
      <Custormer
        id      ={customers[1].id}
        image   ={customers[1].image}
        name    ={customers[1].name}
        birthday={customers[1].birthday}
        gender  ={customers[1].gender}
        job     ={customers[1].job}
        />
      <Custormer
        id      ={customers[2].id}
        image   ={customers[2].image}
        name    ={customers[2].name}
        birthday={customers[2].birthday}
        gender  ={customers[2].gender}
        job     ={customers[2].job}
        />
    </div>
  );
}

export default App;
