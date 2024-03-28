const axios = require('axios'); // node

const getData = async () => {
    const res = await axios({
        method: 'POST',
        url: 'https://2966d096-d44e-4e75-ad93-8e28d70089fd-00-19psv60nobluk.riker.replit.dev/users',
        data: {
            name: 'lasan',
            age: 10,
            email: 'lasan@mail.com'
          }
    });

    console.log(res.data)
}

getData()