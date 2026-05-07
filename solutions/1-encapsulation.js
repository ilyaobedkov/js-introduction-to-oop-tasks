export const getMutualFriends = (user1, user2) => {
  const friends1 = user1.getFriends();  // получаем список друзей первого пользователя
  const friends2 = user2.getFriends();  // получаем список друзей второго пользователя
  // фильтруем друзей первого, оставляем только тех, кто есть и у второго
  return friends1.filter(friend1 => 
    friends2.some(friend2 => friend1.id === friend2.id)  // сравниваем по id
  );
};
export default ({ id = null, friends = [] } = {}) => ({
  friends,
  id,
  getFriends() {
    return this.friends.slice(); // возвращаем копию массива друзей
  },
});
