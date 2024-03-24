app.use((req, res, next) => {
  res.status(405).send('Method Not Allowed');
});
