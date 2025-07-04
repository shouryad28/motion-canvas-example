import { makeProject } from '@motion-canvas/core';
import scene_1 from './scenes/06251928_blackholes/scene_1_synced?scene';
import scene_2 from './scenes/06251928_blackholes/scene_2?scene';
import scene_3 from './scenes/06251928_blackholes/scene_3?scene';
import scene_4 from './scenes/06251928_blackholes/scene_4?scene';
import scene_5 from './scenes/06251928_blackholes/scene_5?scene';
import scene_6 from './scenes/06251928_blackholes/scene_6?scene';
import audio from './scenes/06251928_blackholes/audio/scene_1.mp3';

export default makeProject({
  scenes: [scene_1, scene_2, scene_3, scene_4, scene_5, scene_6],
  audio: audio,
});
