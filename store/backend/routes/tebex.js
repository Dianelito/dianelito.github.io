router.post('/webhook', async (req, res) => {
  const { user_id, amount } = req.body;
  await User.findOneAndUpdate({ discordId: user_id }, { $inc: { balance: amount } });
  res.sendStatus(200);
});