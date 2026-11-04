import test from 'node:test';
import assert from 'node:assert/strict';
import {FIGURES,PARTIES} from '../dist/politics.js';
import {POLITICAL_EVIDENCE,POLITICAL_SOURCES} from '../dist/political-evidence.js';
import {QUESTIONS} from '../dist/questions.js';
import {QUESTION_AUDIT,evidenceQuestionId} from '../dist/question-audit.js';
test('all questions have concepts and every known position has specific dated evidence',()=>{
 assert.equal(Object.keys(QUESTION_AUDIT).length,240);assert.equal(new Set(POLITICAL_EVIDENCE.map(r=>r.id)).size,POLITICAL_EVIDENCE.length);
 for(const f of [...FIGURES,...PARTIES]){assert.equal(Object.keys(f.positions).length,240);assert.ok(f.research.note&&f.research.period);
  for(const q of QUESTIONS){const p=f.positions[evidenceQuestionId(q)];if(p.status==='unknown'){assert.equal(p.position,null);assert.equal(p.confidence,'desconocida');assert.deepEqual(p.evidenceIds,[]);continue}
   assert.ok(Number.isInteger(p.position)&&p.position>=0&&p.position<=4);assert.ok(['alta','media','baja'].includes(p.confidence));
   for(const id of p.evidenceIds){const r=POLITICAL_EVIDENCE.find(r=>r.id===id),s=POLITICAL_SOURCES[r.source];assert.equal(r.positions[evidenceQuestionId(q)],p.position);assert.ok(r.note&&r.locator);assert.ok(s.date&&s.reviewedAt&&s.url.startsWith('https://'));assert.equal(r.person,FIGURES.includes(f)?f.id:'partido-'+f.id)}
  }
 }
});
test('party programs and formula companions never supply inherited personal evidence',()=>{
 for(const f of FIGURES)for(const p of Object.values(f.positions))for(const id of p.evidenceIds){const r=POLITICAL_EVIDENCE.find(r=>r.id===id);assert.notEqual(POLITICAL_SOURCES[r.source].kind,'party-platform')}
 const get=id=>FIGURES.find(f=>f.id===id);assert.notDeepEqual(get('mieres').positions,get('bottero').positions);assert.notDeepEqual(get('manini').positions,get('quintana').positions);assert.notDeepEqual(get('mujica').positions,get('astori').positions);
 assert.equal(get('salle').positions.a6q3.position,null);assert.equal(PARTIES.find(x=>x.id==='is').positions.a6q3.position,4);
});
