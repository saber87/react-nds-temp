import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';

const customers = [
  {
    'id':'S9B5757',
    'image': 'https://wise.sbs.co.kr/wise/GetPhoto.do?COCD=S&EMP_NO=9B5757',
    'name': '이세영',
    'birthday': '881205',
    'gender': '여자',
    'job': '기자'
  },
  {
    'id':'S9B5484',
    'image': 'https://wise.sbs.co.kr/wise/GetPhoto.do?COCD=S&EMP_NO=9B5484',
    'name': '김병문',
    'birthday': '870402',
    'gender': '남자',
    'job': '기술'
  },
  {
  'id':'S9B3435',
  'image': 'https://wise.sbs.co.kr/wise/GetPhoto.do?COCD=S&EMP_NO=9B3435',
  'name': '장철',
  'birthday': '881205',
  'gender': '남자',
  'job': '종편'
  }
]

class App extends Component {
  render() {
    return (
      <div>
        {customers.map(c => {
          return (
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
              /> ); }) }
     </div>
    );
  }  
}

export default App;
