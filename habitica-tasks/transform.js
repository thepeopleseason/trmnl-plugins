function transform(input) {
  input.IDX_0.data.forEach((x) => { delete x.history; delete x.group; } );
  delete input.IDX_0.notifications;
  input.IDX_1 = { 
    data: 
      { 
        'profile': input.IDX_1.data.profile,
        'auth': input.IDX_1.data.auth,
        'stats': input.IDX_1.data.stats,
      }
  };
  return input;
}