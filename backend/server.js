import express from 'express';
import cors from 'cors';
import { readFile } from 'node:fs/promises';
const app = express();
app.use(cors());
app.get('/api/diagnostics', async (_req, res) => {
  try {
    const json = await readFile(new URL('./data/events.json', import.meta.url), 'utf8');
    res.json(JSON.parse(json));
  } catch { res.status(500).json({error:'Demo data unavailable'}); }
});
app.get('/api/health', (_req,res)=>res.json({status:'ok'}));
const port = Number(process.env.PORT || 3001);
if (process.env.NODE_ENV !== 'test') app.listen(port, () => console.log(`Demo API: http://localhost:${port}/api/diagnostics`));
export default app;
