// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transitionProperty: {
        'width': 'width',
        
       },
      backgroundColor: theme => ({
        'AuthHero': 'rgb(6 8 24)'
      }),
      backgroundImage: theme => ({
        'Auth': "url('shield.webp')",

      }),
      backgroundSize: {
        '3/4':'75%'
      },
      screens: {
        'Auth':'992px'
      },
      fontSize:{
        'Login':'2.5rem'
      },
      textColor: {
        'indigoish':'#4361ee'
     },
     scale:{
       "104":"1.04"
     },
     colors:{
      'indigoish':'#4361ee',
      'grayish':'#3b3f5c',
      'blueish':'rgb(33, 150, 243)',
      'greenish':'rgb(26, 188, 156)',
      'yellowish':'rgb(226, 160, 63)',
      'navColor':'rgb(14, 23, 38)'
      
     },
     spacing:{
       '97.1485':'24.287125rem',
       '148.8985':'37.224625rem',
       '2.8715':'0.717875rem',
       '11.4285':'2.85714375rem',
       '2.75':'0.6875rem',
       '6.25':'1.5625rem',
       '12.5':'3.125rem',
       '1.75':'0.4375rem',
       '5':'1.25rem',
       '3.5':'0.875rem',
       '4.5':'1.125rem',
       '8.75':'2.1875rem',
       '3.74':'0.9375rem',
       '85.5':'21.375rem',
       '13.45':'3.361325rem'
     },
     fontFamily:{
       'body':['Nunito', 'sans-serif' ]
      
      
      
     },
     boxShadow : {
       'light' : 'rgb(67, 97, 238) 0px 10px 20px -10px' 
     }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}