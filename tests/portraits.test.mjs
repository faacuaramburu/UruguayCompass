import test from 'node:test';
import assert from 'node:assert/strict';
import {PHOTOS} from '../dist/photos.js';
import {portraitStyle,portraitRect,photoCredit} from '../dist/portrait.js';
test('portrait frames and PNG crops preserve the identified subject',()=>{
 for(const id of ['canoniero','gonzalo-martinez']){
  const p=PHOTOS[id],[x,y,w,h]=p.crop,[width,height]=p.dimensions;
  assert.ok(portraitStyle(p).includes('aspect-ratio:'+w+'/'+h));
  const [sx,sy,sw,sh]=portraitRect(p,width,height,320/390);
  assert.ok(sx>=x&&sy>=y&&sx+sw<=x+w+.001&&sy+sh<=y+h+.001);
  assert.ok(Math.abs(sw/sh-320/390)<.00001);
  assert.equal(photoCredit(p),p.author);assert.ok(!photoCredit(p).includes('null'));
 }
 assert.equal(portraitStyle(PHOTOS.bergara),'');assert.ok(photoCredit(PHOTOS.andrade).includes('CC BY-SA 4.0'));
});
