const checkData = (setIsSubmitted, handleClick) => {
  if (localStorage.getItem('user_id') !== null) {
    setIsSubmitted(true);
    handleClick(true);
    const user = localStorage.getItem('user_id');
    window.location.href = `/users/${user}/list`;
  } else {
    setIsSubmitted(false);
    handleClick(false);
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
