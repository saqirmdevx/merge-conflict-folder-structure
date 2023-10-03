// Create simple backend server
const app = express();
const port = 3002;
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from backend' });
});
app.listen(port, () => {
  console.log(`[BACKEND]: listening on port ${port}`);
});

app.get('/test', (req, res) => {
  res.json({ message: 'Hello from backend' });
});
