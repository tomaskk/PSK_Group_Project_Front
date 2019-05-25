/* eslint-disable prettier/prettier */
import uuid from 'uuid';

const initialData = {
  users: [
    {
      id: uuid.v4(),
      pic: 'https://www.w3schools.com/howto/img_avatar2.png',
      name: 'Yasaman',
      surname: 'Foroutan',
      topic: 'Functional Testing',
      date: '2019-02-02',
      hours: '7.5h',
      activity: 'Active'
    },
    {
      id: uuid.v4(),
      pic: 'https://www.w3schools.com/howto/img_avatar.png',
      name: 'Iraj',
      surname: 'Pirdoost',
      topic: '.NET Core',
      date: '2019-02-03',
      hours: '7.5h',
      activity: 'Active'
    },
    {
      id: uuid.v4(),
      pic: 'https://www.w3schools.com/howto/img_avatar.png',
      name: 'Jozef',
      surname: 'Kondratovich',
      topic: 'AngularJS',
      date: '2019-02-04',
      hours: '8h',
      activity: 'Inactive'
    },
    {
      id: uuid.v4(),
      pic: 'https://www.w3schools.com/howto/img_avatar2.png',
      name: 'Emiliya',
      surname: 'Perevalova',
      topic: 'React.js',
      date: '2019-02-04',
      hours: '8h',
      activity: 'Active'
    },
    {
      id: uuid.v4(),
      pic: 'https://www.w3schools.com/howto/img_avatar2.png',
      name: 'Patricia',
      surname: 'Ribeiro',
      topic: 'Functional Testing',
      date: '2019-02-04',
      hours: '4h',
      activity: 'Inactive'
    },
    {
      id: uuid.v4(),
      pic: 'https://www.w3schools.com/howto/img_avatar.png',
      name: 'Tao',
      surname: 'Yi',
      topic: 'React.js',
      date: '2019-02-05',
      hours: '8h',
      activity: 'Active'
    },
    {
      id: uuid.v4(),
      pic: 'https://www.w3schools.com/howto/img_avatar.png',
      name: 'Crap',
      surname: 'Pirdoostinio',
      topic: '.NET Core',
      date: '2019-02-06',
      hours: '2.5h',
      activity: 'Active'
    }
  ]
};

export default initialData;
