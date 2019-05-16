const initialState = {
  userInfo: {
    id: 'U01234500',
    name: 'Dominik',
    surname: 'Doundndy',
    email: 'Dominik.Doundndy@email.com'
  },
  specialistTabItems: [
    {
      id: 1,
      knowTechName: 'C++',
      stars: 2
    },
    {
      id: 2,
      knowTechName: 'Pascal',
      stars: 3
    },
    {
      id: 3,
      knowTechName: 'React',
      stars: 1
    }
  ],

  learnTabItems: [
    {
      id: 1,
      learnTechName: 'Kubernetes',
      learnComment: "This technology is crazy popular. Can't wait to learn it"
    },
    {
      id: 2,
      learnTechName:
        'Cillum ad nulla anim fugiat veniam officia aliqua amet non.',
      learnComment:
        'Lorem ipsum nostrud adipisicing minim pariatur laboris ea. Ad veniam dolore nulla ullamco consectetur commodo consectetur proident ex commodo ex exercitation. Labore Lorem amet eiusmod laboris esse sunt magna consequat laboris sit ea. Non commodo sint ea nisi minim Lorem ullamco et aliqua.'
    }
  ]
};

export default (state = initialState, action) => {
  // /console.log(state);
  return { ...state };
};
