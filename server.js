const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/customers', (req, res) => {
    res.send([
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
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
