import uuid from 'uuid';

const storage = window.localStorage.getItem('usersWhoLeftData') || initialData;

const initialData = {
  users: [
    {
      id: uuid.v4(),
      pic: 'https://www.w3schools.com/howto/img_avatar2.png',
      name: 'Yasaman Foroutan',
      lastActive: '2019-02-02'
    },
    {
      id: uuid.v4(),
      pic: 'https://www.w3schools.com/howto/img_avatar.png',
      name: 'Iraj Pirdoost',
      lastActive: '2019-02-03'
    },
    {
      id: uuid.v4(),
      pic: 'https://www.w3schools.com/howto/img_avatar.png',
      name: 'Jozef Kondratovich',
      lastActive: '2019-02-04'
    },
    {
      id: uuid.v4(),
      pic: 'https://www.w3schools.com/howto/img_avatar2.png',
      name: 'Emiliya Perevalova',
      lastActive: '2019-02-04'
    },
    {
      id: uuid.v4(),
      pic: 'https://www.w3schools.com/howto/img_avatar2.png',
      name: 'Patricia Ribeiro',
      lastActive: '2019-02-04'
    },
    {
      id: uuid.v4(),
      pic: 'https://www.w3schools.com/howto/img_avatar.png',
      name: 'Tao Yi',
      lastActive: '2019-02-05'
    },
    {
      id: uuid.v4(),
      pic: 'https://www.w3schools.com/howto/img_avatar.png',
      name: 'Iraj Pirdoost',
      lastActive: '2019-02-06'
    }
  ]
};

if (typeof storage === String) {
  storage = JSON.parse(storage);
} else {
  window.localStorage.setItem('usersWhoLeftData', JSON.stringify(initialData));
}

export default storage;
