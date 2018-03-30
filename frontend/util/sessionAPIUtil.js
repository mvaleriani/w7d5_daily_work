
export const signUp = (user) => {
  return $.ajax({
    url: '/api/users',
    method: 'POST',
    dataType: 'JSON',
    data: {user}
  });
};

export const login = (user) => {
  return $.ajax({
    url: '/api/session',
    method: 'POST',
    dataType: 'JSON',
    data: {user}
  });
};

export const logout = () => {
  return $.ajax({
    url: '/api/session',
    method: 'DELETE',
    dataType: 'JSON'
  });
};
