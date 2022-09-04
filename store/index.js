import axios from 'axios'



async function getUser(user) {
    try {
        const iuser = await axios.get(`https://api.github.com/users/${user}`);
        console.log(iuser.data);
        return iuser.data;
    } catch {
        console.warn('Não foi possível encontrar o usuário.');
    }
} 

export const state = () => ({
    user: {
        name: 'Manoel Júnior',
        username: 'mjrdev'
    }
})

export const mutations = () => ({
    
})