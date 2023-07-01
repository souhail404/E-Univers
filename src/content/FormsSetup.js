
const loginFormSetup = [
    {
        heading:'',
        input:[
          {
            id:1,
            name:'emailortel',
            label:'email or phone number',
            placeholder:'Enter you email or phone number...',
            type:'text'
          },
          {
            id:1,
            name:'password',
            label:'password',
            placeholder:'Enter your password...',
            type:'password'
          }
        ]
    }
];

const signUpFormSetup = [
    {
        heading:'Sign up infos',
        input:[
            {
              id:1,
              name:'email',
              label:'email',
              placeholder:'Enter you email...',
              type:'email'     
            },
            {
              id:2,
              name:'numberPhone',
              label:'Phone number',
              placeholder:'Enter you phone number...',
              type:'tel'     
            },
            {
              id:3,
              name:'password',
              label:'password',
              placeholder:'Enter a strong password...',
              type:'password'   
            },
            {
              id:4,
              name:'confirmpassword',
              label:'confirm password',
              placeholder:'Confirm your password...',
              type:'password'   
            }
        ]
    },
    {
        heading:'personal info',
        input:[
            {
                id:1,
                name:'fullname',
                label:'full name',
                placeholder:'Enter your full name...',
                type:'text'
            },
            {
                id:2,
                name:'username',
                label:'username',
                placeholder:'Enter a username...',
                type:'text'
            },
            {
                id:3,
                name:'birthday',
                label:'birthday',
                placeholder:'',
                type:'date'
            },
        ]
    },
    {
        heading:'other infos',
        input:[
            {
                id:1,
                name:'address',
                label:'adress',
                placeholder:'Enter you adress...',
                type:'text'     
            },
            {
                id:2, 
                name:'addresstwo',
                label:'adress 2',
                placeholder:'continue adress...',
                type:'text'     
            }
        ]
    }
];

export {loginFormSetup , signUpFormSetup}