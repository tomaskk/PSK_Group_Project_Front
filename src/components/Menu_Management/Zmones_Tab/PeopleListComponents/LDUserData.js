import uuid from 'uuid';

const initialData = {
  users: [
    {
      id: uuid.v4(),
      pic: 'https://www.w3schools.com/howto/img_avatar2.png',
      name: 'Yasaman Foroutan',
      topic: 'Functional Testing',
      date: '2019-02-02',
      hours: '7.5h'
    },
    {
      id: uuid.v4(),
      pic: 'https://www.w3schools.com/howto/img_avatar.png',
      name: 'Iraj Pirdoost',
      topic: '.NET Core',
      date: '2019-02-03',
      hours: '7.5h'
    },
    {
      id: uuid.v4(),
      pic: 'https://www.w3schools.com/howto/img_avatar.png',
      name: 'Jozef Kondratovich',
      topic: 'AngularJS',
      date: '2019-02-04',
      hours: '8h'
    },
    {
      id: uuid.v4(),
      pic: 'https://www.w3schools.com/howto/img_avatar2.png',
      name: 'Emiliya Perevalova',
      topic: 'React.js',
      date: '2019-02-04',
      hours: '8h'
    },
    {
      id: uuid.v4(),
      pic: 'https://www.w3schools.com/howto/img_avatar2.png',
      name: 'Patricia Ribeiro',
      topic: 'Functional Testing',
      date: '2019-02-04',
      hours: '4h'
    },
    {
      id: uuid.v4(),
      pic: 'https://www.w3schools.com/howto/img_avatar.png',
      name: 'Tao Yi',
      topic: 'React.js',
      date: '2019-02-05',
      hours: '8h'
    },
    {
      id: uuid.v4(),
      pic: 'https://www.w3schools.com/howto/img_avatar.png',
      name: 'Iraj Pirdoost',
      topic: '.NET Core',
      date: '2019-02-06',
      hours: '2.5h'
    }
  ]
};

export default initialData;
