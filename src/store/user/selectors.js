export const selectPlayers = (state) => {
  return state.user.players;
};

export const selectLoading = (state) => {
  return state.user.loading;
};
