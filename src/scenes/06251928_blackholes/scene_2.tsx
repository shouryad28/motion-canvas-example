import {makeScene2D, Txt, Rect, Circle, Line, Img, Grid} from '@motion-canvas/2d';
import {all, chain, delay, waitFor, createRef, fadeTransition, Vector2, createSignal, linear, easeInOutCubic} from '@motion-canvas/core';

export default makeScene2D(function* (view) {
  // Design scheme colors
  const colors = {
    background: '#050623',
    primary: '#F8E81C',
    secondary: '#11B5E4',
    accent: '#FF5370',
    text: '#FFFFFF'
  };

  // Set background
  view.fill(colors.background);

  // Create references for all visual elements
  const blackHole = createRef<Circle>();
  const theoreticalText = createRef<Txt>();
  const einsteinText = createRef<Txt>();
  const einsteinPortrait = createRef<Circle>();
  const spacetimeGrid = createRef<Grid>();
  const yellowSphere = createRef<Circle>();
  const massEnergyText = createRef<Txt>();
  const fieldEquations = createRef<Txt>();
  const schwarzschildText = createRef<Txt>();
  const schwarzschildPortrait = createRef<Circle>();
  const collapsingSphere = createRef<Circle>();
  const escapeText = createRef<Txt>();
  const blackHolesText = createRef<Txt>();
  const nextSegmentText = createRef<Txt>();

  // Create distortion signal for spacetime curvature animation
  const gridDistortion = createSignal(0);
  const sphereDistortion = createSignal(0);

  // Visual element 0: Stylized black hole with accretion disk
  view.add(
    <Circle
      ref={blackHole}
      width={300}
      height={300}
      // fill={'radial-gradient(circle, #000000 30%, #F8E81C 50%, #FF5370 70%, transparent 100%)'}
      scale={1.0}
      opacity={1}
    />
  );

  // Visual element 1: Theoretical Foundation text
  view.add(
    <Txt
      ref={theoreticalText}
      text={'Theoretical Foundation'}
      fontSize={28}
      fill={colors.primary}
      fontWeight={700}
      y={-200}
      opacity={0}
    />
  );

  // Visual element 2: 1915 Albert Einstein text
  view.add(
    <Txt
      ref={einsteinText}
      text={'1915 Albert Einstein'}
      fontSize={24}
      fill={colors.text}
      x={-300}
      y={-100}
      opacity={0}
    />
  );

  // Visual element 3: Einstein portrait (simplified vector)
  view.add(
    <Circle
      ref={einsteinPortrait}
      width={120}
      height={120}
      fill={'#8B7355'}
      x={-300}
      y={50}
      scale={0}
      opacity={0}
    >
      <Circle
        width={80}
        height={80}
        fill={'#D2B48C'}
        y={-10}
      />
      <Circle
        width={20}
        height={30}
        fill={'#FFFFFF'}
        x={-15}
        y={-10}
      />
      <Circle
        width={20}
        height={30}
        fill={'#FFFFFF'}
        x={15}
        y={-10}
      />
    </Circle>
  );

  // Visual element 4: Spacetime grid
  view.add(
    <Grid
      ref={spacetimeGrid}
      width={800}
      height={600}
      spacing={40}
      stroke={colors.secondary}
      lineWidth={2}
      opacity={0}
      scale={1.0}
    />
  );

  // Visual element 5: Yellow sphere (sun-like mass)
  view.add(
    <Circle
      ref={yellowSphere}
      width={150}
      height={150}
      fill={colors.primary}
      opacity={0}
      scale={0.8}
      zIndex={10}
    />
  );

  // Visual element 6: Mass and Energy text
  view.add(
    <Txt
      ref={massEnergyText}
      text={'Mass and Energy'}
      fontSize={26}
      fill={colors.accent}
      fontWeight={700}
      y={250}
      opacity={0}
    />
  );

  // Visual element 7: Einstein's field equations (stylized)
  view.add(
    <Txt
      ref={fieldEquations}
      text={'Rμν - ½gμνR + Λgμν = 8πTμν'}
      fontSize={22}
      fill={colors.secondary}
      x={250}
      opacity={0}
    />
  );

  // Visual element 8: Karl Schwarzschild text
  view.add(
    <Txt
      ref={schwarzschildText}
      text={'Karl Schwarzschild'}
      fontSize={24}
      fill={colors.primary}
      fontWeight={700}
      x={300}
      y={-100}
      opacity={0}
    />
  );

  // Visual element 9: Schwarzschild portrait (simplified vector)
  view.add(
    <Circle
      ref={schwarzschildPortrait}
      width={120}
      height={120}
      fill={'#654321'}
      x={300}
      y={50}
      scale={0}
      opacity={0}
    >
      <Circle
        width={80}
        height={80}
        fill={'#8B7355'}
        y={-10}
      />
      <Rect
        width={40}
        height={20}
        fill={'#333333'}
        y={-20}
      />
    </Circle>
  );

  // Visual element 10: Collapsing sphere forming black hole
  view.add(
    <Circle
      ref={collapsingSphere}
      width={() => 200 - sphereDistortion() * 150}
      height={() => 200 - sphereDistortion() * 150}
      fill={colors.primary}
      opacity={0}
      zIndex={20}
    />
  );

  // Visual element 11: Nothing can escape text
  view.add(
    <Txt
      ref={escapeText}
      text={'Nothing can escape'}
      fontSize={28}
      fill={colors.accent}
      fontWeight={700}
      y={-200}
      opacity={0}
    />
  );

  // Visual element 12: Black Holes text
  view.add(
    <Txt
      ref={blackHolesText}
      text={'Black Holes'}
      fontSize={34}
      fill={colors.secondary}
      fontWeight={700}
      opacity={0}
    />
  );

  // Visual element 13: Next segment teaser
  view.add(
    <Txt
      ref={nextSegmentText}
      text={'How do black holes form in our universe?'}
      fontSize={22}
      fill={colors.text}
      y={250}
      opacity={0}
    />
  );

  // Start animation sequence
  yield* waitFor(0.2);

  // Animation 0: Pulse black hole shape
  yield* blackHole().scale(1.15, 1.5, easeInOutCubic);

  // Animation 1 & 2: Fade in and highlight Theoretical Foundation
  yield* waitFor(2.92 - 0.2 - 1.5);
  yield* theoreticalText().opacity(1, 0.7);
  
  yield* waitFor(3.54 - 2.92 - 0.7);
  yield* theoreticalText().shadowBlur(20, 0.4);

  // Animation 3: Fade out Theoretical Foundation
  yield* waitFor(7.1 - 3.54 - 0.4);
  yield* theoreticalText().opacity(0, 0.2);

  // Animation 4: Fade in Einstein text
  yield* waitFor(7.46 - 7.1 - 0.2);
  yield* einsteinText().opacity(1, 0.5);

  // Animation 5 & 6: Scale and fade in Einstein portrait
  yield* waitFor(8.4 - 7.46 - 0.5);
  yield* all(
    einsteinPortrait().scale(1, 0.6),
    einsteinPortrait().opacity(1, 0.6)
  );

  // Animation 7: Fade in spacetime grid
  yield* waitFor(14.34 - 8.4 - 0.6);
  yield* spacetimeGrid().opacity(0.8, 0.5);

  // Animation 8 & 9: Fade in yellow sphere and distort grid
  yield* waitFor(17.96 - 14.34 - 0.5);
  
  // Apply grid distortion effect by modifying grid position based on sphere
  yield* all(
    yellowSphere().opacity(1, 0.7),
    gridDistortion(1, 1.0),
    // Simulate mesh distortion by scaling and repositioning grid
    spacetimeGrid().scale(1.1, 1.0),
    spacetimeGrid().y(30, 1.0)
  );

  // Animation 10: Fade in Mass and Energy text
  yield* waitFor(25.34 - 17.96 - 1.0);
  yield* massEnergyText().opacity(1, 0.4);

  // Animation 11: Fade in field equations
  yield* waitFor(22.42 - 17.96 - 1.0);
  yield* fieldEquations().opacity(1, 0.8);

  // Animation 12: Fade in Schwarzschild text
  yield* waitFor(34.0 - 22.42 - 0.8);
  yield* schwarzschildText().opacity(1, 0.5);

  // Animation 13 & 14: Scale and fade in Schwarzschild portrait
  yield* waitFor(34.44 - 34.0 - 0.5);
  yield* all(
    schwarzschildPortrait().scale(1, 0.5),
    schwarzschildPortrait().opacity(1, 0.5)
  );

  // Animation 15: Fade in collapsing sphere
  yield* waitFor(40.36 - 34.44 - 0.5);
  yield* collapsingSphere().opacity(1, 0.6);

  // Animation 16: Animate sphere shrinking and extreme mesh distortion
  yield* waitFor(44.24 - 40.36 - 0.6);
  yield* all(
    sphereDistortion(1, 2.3),
    // Extreme grid distortion for black hole formation
    spacetimeGrid().scale(1.3, 2.3),
    spacetimeGrid().y(80, 2.3),
    spacetimeGrid().rotation(5, 2.3)
  );

  // Animation 17: Fade in Nothing can escape text
  yield* waitFor(51.26 - 44.24 - 2.3);
  yield* escapeText().opacity(1, 0.4);

  // Animation 18: Fade in Black Holes text
  yield* waitFor(58.3 - 51.26 - 0.4);
  yield* blackHolesText().opacity(1, 0.5);

  // Animation 19: Fade in next segment teaser
  yield* waitFor(62.18 - 58.3 - 0.5);
  yield* nextSegmentText().opacity(1, 0.7);

  // Wait until end of scene
  yield* waitFor(65.0 - 62.18 - 0.7);
});