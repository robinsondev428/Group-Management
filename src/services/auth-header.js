export default function authHeader(){
  let user = JSON.parse(localstorage.getItem('user'));

  if(user && user.accessToken){
    return {Authorization: 'Bearer' + user.accessToken};
  }else {
    return {};
  }
}