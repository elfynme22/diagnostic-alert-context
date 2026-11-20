import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
const read = async () => JSON.parse(await readFile(new URL('../data/events.json',import.meta.url),'utf8'));
test('diagnostic data has unique events and temporal context',async()=>{const data=await read();assert.equal(new Set(data.alerts.map(a=>a.id)).size,data.alerts.length);for(const a of data.alerts){assert.ok(a.time);assert.ok(['critical','warning','info'].includes(a.severity));assert.ok(['active','resolved','historical'].includes(a.status));for(const rel of a.related) assert.ok(data.alerts.some(x=>x.id===rel));}});
test('resolved critical event keeps critical severity',async()=>{const data=await read();const voltage=data.alerts.find(a=>a.id==='voltage');assert.equal(voltage.status,'resolved');assert.equal(voltage.severity,'critical');assert.ok(voltage.resolvedAt);});
