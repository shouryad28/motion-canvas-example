import {makeScene2D, Circle, Txt, Line, Rect} from '@motion-canvas/2d';
import {all, createRef, createSignal, easeInOutCubic, linear, waitFor} from '@motion-canvas/core';
import {Vector2} from '@motion-canvas/core';

export default makeScene2D(function* (view) {
  // Set background color
  view.fill('#050623');
  
  // Create references for all elements
  const blackHole = createRef<Circle>();
  const extremePhysicsText = createRef<Txt>();
  const stephenHawkingText = createRef<Txt>();
  const evaporateText = createRef<Txt>();
  const virtualParticle1 = createRef<Circle>();
  const virtualParticle2 = createRef<Circle>();
  const emissionArrow = createRef<Line>();
  const hawkingRadiationText = createRef<Txt>();
  const slowlyShrinkText = createRef<Txt>();
  const informationParadoxText = createRef<Txt>();
  const mysteriesText = createRef<Txt>();

  // Create signals for animation
  const blackHoleSize = createSignal(340); // diameter
  const particle1Position = createSignal(new Vector2(170, 0));
  const particle2Position = createSignal(new Vector2(190, 0));
  
  // Add black hole
  view.add(
    <Circle
      ref={blackHole}
      size={blackHoleSize}
      fill={'#111218'}
      shadowBlur={40}
      shadowColor={'#F8E81C'}
      opacity={1}
    />
  );
  
  // Add text elements
  view.add(
    <>
      <Txt
        ref={extremePhysicsText}
        text={'Extreme physics'}
        fontSize={30}
        fill={'#F8E81C'}
        fontWeight={700}
        opacity={0}
        y={-250}
      />
      <Txt
        ref={stephenHawkingText}
        text={'Stephen Hawking'}
        fontSize={25}
        fill={'#FFFFFF'}
        fontWeight={400}
        opacity={0}
        x={-300}
        y={200}
      />
      <Txt
        ref={evaporateText}
        text={'Black holes evaporate'}
        fontSize={30}
        fill={'#FF5370'}
        fontWeight={700}
        opacity={0}
        y={-250}
      />
      <Txt
        ref={hawkingRadiationText}
        text={'Hawking Radiation'}
        fontSize={28}
        fill={'#11B5E4'}
        fontWeight={700}
        opacity={0}
        y={-250}
      />
      <Txt
        ref={slowlyShrinkText}
        text={'slowly shrink'}
        fontSize={27}
        fill={'#FF5370'}
        fontWeight={700}
        opacity={0}
        scale={1}
      />
      <Txt
        ref={informationParadoxText}
        text={'Information Paradox'}
        fontSize={28}
        fill={'#FFC107'}
        fontWeight={700}
        opacity={0}
        y={250}
      />
      <Txt
        ref={mysteriesText}
        text={"physics' greatest mysteries"}
        fontSize={24}
        fill={'#FFFFFF'}
        fontWeight={400}
        opacity={0}
        y={290}
      />
    </>
  );
  
  // Add virtual particles (initially hidden)
  view.add(
    <>
      <Circle
        ref={virtualParticle1}
        size={20}
        fill={'#11B5E4'}
        opacity={0}
        position={particle1Position}
        shadowBlur={15}
        shadowColor={'#11B5E4'}
      />
      <Circle
        ref={virtualParticle2}
        size={20}
        fill={'#FF5370'}
        opacity={0}
        position={particle2Position}
        shadowBlur={15}
        shadowColor={'#FF5370'}
      />
    </>
  );
  
  // Add emission arrow (initially hidden)
  view.add(
    <Line
      ref={emissionArrow}
      points={[Vector2.zero, Vector2.right.scale(80)]}
      stroke={'#FF5370'}
      lineWidth={6}
      opacity={0}
      x={200}
      endArrow
      arrowSize={12}
    />
  );
  
  // Animation sequence
  
  // 0.28s - Extreme physics fade in
  yield* waitFor(0.28);
  yield* extremePhysicsText().opacity(1, 0.4, easeInOutCubic);
  
  // 1.2s - Extreme physics fade out
  yield* waitFor(0.92);
  yield* extremePhysicsText().opacity(0, 0.3, easeInOutCubic);
  
  // 2.52s - Stephen Hawking fade in
  yield* waitFor(1.32);
  yield* stephenHawkingText().opacity(1, 0.4, easeInOutCubic);
  
  // 4.3s - Stephen Hawking fade out
  yield* waitFor(1.78);
  yield* stephenHawkingText().opacity(0, 0.2, easeInOutCubic);
  
  // 4.5s - Black holes evaporate fade in
  yield* waitFor(0.2);
  yield* evaporateText().opacity(1, 0.5, easeInOutCubic);
  
  // 7.0s - Black holes evaporate fade out
  yield* waitFor(2.5);
  yield* evaporateText().opacity(0, 0.3, easeInOutCubic);
  
  // 7.22s - Virtual particles pop in
  yield* waitFor(0.22);
  yield* virtualParticle1().opacity(1, 0.3, easeInOutCubic);
  yield* waitFor(0.1);
  yield* virtualParticle2().opacity(1, 0.3, easeInOutCubic);
  
  // 10.12s - Particles move and arrow appears
  yield* waitFor(2.8);
  yield* all(
    // Particle 1 escapes outward
    particle1Position(new Vector2(350, -50), 1.2, linear),
    virtualParticle1().position(particle1Position, 1.2),
    // Particle 2 falls into black hole
    particle2Position(Vector2.zero, 1.2, linear),
    virtualParticle2().position(particle2Position, 1.2),
    // Arrow fades in
    emissionArrow().opacity(1, 1.0, easeInOutCubic)
  );
  
  // 10.36s - Hawking Radiation text
  yield* waitFor(0.24);
  yield* hawkingRadiationText().opacity(1, 0.6, easeInOutCubic);
  
  // 11.2s - Black hole shrinks and "slowly shrink" appears with pulse
  yield* waitFor(0.84);
  yield* all(
    blackHoleSize(200, 1.2, linear),
    slowlyShrinkText().opacity(1, 0.7, easeInOutCubic),
    slowlyShrinkText().scale(1.2, 1.0, easeInOutCubic)
  );
  
  // 12.6s - "slowly shrink" fade out
  yield* waitFor(1.4);
  yield* slowlyShrinkText().opacity(0, 0.2, easeInOutCubic);
  
  // 13.0s - Hawking Radiation fade out
  yield* waitFor(0.4);
  yield* hawkingRadiationText().opacity(0, 0.3, easeInOutCubic);
  
  // 13.64s - Information Paradox fade in
  yield* waitFor(0.64);
  yield* informationParadoxText().opacity(1, 0.4, easeInOutCubic);
  
  // 15.48s - Physics' greatest mysteries fade in
  yield* waitFor(1.84);
  yield* mysteriesText().opacity(1, 0.5, easeInOutCubic);
  
  // 16.4s - Information Paradox fade out
  yield* waitFor(0.92);
  yield* informationParadoxText().opacity(0, 0.2, easeInOutCubic);
  
  // Wait until scene end
  yield* waitFor(0.6);
});