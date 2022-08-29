const checkData = (setIsSubmitted) => {
  if (localStorage.getItem('token') !== null) {
    setIsSubmitted(true);
    const user = localStorage.getItem('user_id');
    window.location.href = `/users/${user}`;
  } else {
    setIsSubmitted(false);
  }
};

const removeToken = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user_id');
  localStorage.removeItem('user_name');
};

const getUserName = () => {
  const userName = localStorage.getItem('user_name');
  return userName;
};

export default { checkData, removeToken, getUserName };
