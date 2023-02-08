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
    <div>
      {
        customers.map(c => {
          return (
            <Custormer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
          )
        })
      }
    </div>
  );
}

export default App;
