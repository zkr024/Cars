const checkData = (setIsSubmitted) => {
  if (localStorage.getItem('token') !== null) {
    setIsSubmitted(true);
    const user = localStorage.getItem('user_id');
    window.location.href = `/users/${user}`;
  } else {
    setIsSubmitted(false);
  }
};

export default checkData;
