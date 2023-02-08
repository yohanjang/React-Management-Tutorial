import './App.css';
import Custormer from './components/Customer';
import CustormerProps from './components/Customer_props';
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'

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
  // console.log('this >>> '+ JSON.stringify(this));
  // console.log('styles >>> '+ JSON.stringify(styles2));
  // var { classes } = this;
  return (
    // <Paper className={classes.root}>
    //   <Table className={classes.table}>
    <Paper className='cssRoot'>
      <Table className='cssTable'>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customers.map(c => {
            return (
              <Custormer
              key={c.id}  // map으로 반복할 때 중복되지 않는 값으로 필수임.
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
          {customers.map(c => {
            return (
              <CustormerProps
              key={c.id}  // map으로 반복할 때 중복되지 않는 값으로 필수임.
              p={c}
              />
              )
            })
          }
        </TableBody>
      </Table>
    </Paper>
  );
}

export default App;
