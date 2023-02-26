// іменований експорт

const tetchAllUsers = () => {
    console.log('tetchAllUsers');
}
const tetchUserById = () => {
    console.log('tetchUserById');
}
const updateUserById = () => {
    console.log('updateUserById ');
} 

export default {
    tetchAllUsers, tetchUserById, updateUserById
};

export const x = 5;
export const y = 10;