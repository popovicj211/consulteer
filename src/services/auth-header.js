 const authHeader = () => {
    const foodsAuth = JSON.parse(localStorage.getItem('foods'));
    const token = 'zSx';
    if (foodsAuth && foods.accessToken) {
  //    return { Authorization: 'Bearer ' + user.accessToken }; 
  return { Authorization: 'Bearer ' + token}; 
  //    return { 'x-access-token': foods.accessToken };     
    } else {
      return {};
    }
}
    export default authHeader;