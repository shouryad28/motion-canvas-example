// Total duration: 45.4
import { Layout, Rect, Circle, Txt, makeScene2D, Ray, Line } from '@motion-canvas/2d';
import { createRef, all, loop, createSignal, map, sequence, chain, Vector2, waitFor } from '@motion-canvas/core';

export default makeScene2D(function* (view) {
  // Setup background color
  view.fill('#050623');

  // Define colors from design scheme
  const bgColor = '#050623';
  const primaryColor = '#F8E81C';
  const secondaryColor = '#11B5E4';
  const accentColor = '#FF5370';
  const textColor = '#FFFFFF';

  // Create refs for all visual elements
  const questionText = createRef<Txt>();
  const blackHole = createRef<Circle>();
  const accretionDisk = createRef<Circle>();
  const blackHoleGroup = createRef<Layout>();
  const extremeText = createRef<Txt>();
  const lightRaysGroup = createRef<Layout>();
  const lightText = createRef<Txt>();
  const eventHorizon = createRef<Circle>();
  const eventHorizonText = createRef<Txt>();
  const pointOfNoReturnText = createRef<Txt>();
  const starGroup = createRef<Layout>();
  const star = createRef<Circle>();
  const massiveStarsText = createRef<Txt>();
  const einsteinText = createRef<Txt>();

  // Add all elements to the scene
  view.add(
    <>
      {/* Element 0: Question text */}
      <Txt
        ref={questionText}
        text="What exactly is a black hole?"
        fontSize={36}
        fill={primaryColor}
        fontWeight={700}
        opacity={0}
      />

      {/* Element 1: Black hole with accretion disk */}
      <Layout ref={blackHoleGroup} scale={0}>
        <Circle
          ref={accretionDisk}
          size={300}
          stroke={primaryColor}
          lineWidth={20}
          opacity={0.6}
          lineDash={[10, 5]}
        />
        <Circle
          ref={blackHole}
          size={150}
          fill={'black'}
          shadowBlur={30}
          shadowColor={primaryColor}
        />
      </Layout>

      {/* Element 2: "incredibly extreme" text */}
      <Txt
        ref={extremeText}
        text="incredibly extreme"
        fontSize={28}
        fill={accentColor}
        fontWeight={700}
        opacity={0}
        y={-200}
      />

      {/* Element 3: Light rays being bent into black hole */}
      <Layout ref={lightRaysGroup} opacity={0}>
        {/* Create multiple light rays */}
        {[...Array(8)].map((_, i) => {
          const angle = (i * 45 * Math.PI) / 180;
          const startX = Math.cos(angle) * 400;
          const startY = Math.sin(angle) * 400;
          
          return (
            <Ray
              key={'ray' + i}
              from={[startX, startY]}
              to={[0, 0]}
              endArrow
              arrowSize={8}
              stroke={secondaryColor}
              lineWidth={3}
              opacity={0.8}
              lineDash={[10, 5]}
            />
          );
        })}
      </Layout>

      {/* Element 4: "Not even light itself" text */}
      <Txt
        ref={lightText}
        text="Not even light itself"
        fontSize={26}
        fill={secondaryColor}
        fontWeight={700}
        opacity={0}
        y={-200}
      />

      {/* Element 5: Event horizon (dashed circle) */}
      <Circle
        ref={eventHorizon}
        size={250}
        stroke={primaryColor}
        lineWidth={5}
        opacity={0}
        lineDash={[15, 10]}
      />

      {/* Element 6: "event horizon" label */}
      <Txt
        ref={eventHorizonText}
        text="event horizon"
        fontSize={28}
        fill={primaryColor}
        fontWeight={700}
        opacity={0}
        x={200}
      />

      {/* Element 7: "point of no return" text */}
      <Txt
        ref={pointOfNoReturnText}
        text="point of no return"
        fontSize={26}
        fill={accentColor}
        fontWeight={700}
        opacity={0}
        y={250}
      />

      {/* Element 8: Star collapsing animation */}
      <Layout ref={starGroup} x={-300} scale={0} opacity={0}>
        <Circle
          ref={star}
          size={200}
          fill={secondaryColor}
          shadowBlur={30}
          shadowColor={secondaryColor}
        />
      </Layout>

      {/* Element 9: "massive stars" text */}
      <Txt
        ref={massiveStarsText}
        text="massive stars"
        fontSize={26}
        fill={secondaryColor}
        fontWeight={700}
        opacity={0}
        x={-300}
        y={-150}
      />

      {/* Element 10: "Einstein's theory" text */}
      <Txt
        ref={einsteinText}
        text="Einstein's theory"
        fontSize={26}
        fill={primaryColor}
        fontWeight={700}
        opacity={0}
        y={250}
      />
    </>
  );

  // Start animations based on timing from storyboard
  
  // Wait for narration to start (0.75s)
  yield* waitFor(0.75);

  // Animation 0: Fade in question text (0.8s)
  yield* questionText().opacity(1, 0.8);
  
  // Wait before fading out (until 3.5s)
  yield* waitFor(1.95);
  
  // Animation 1: Fade out question text (0.4s)
  yield* questionText().opacity(0, 0.4);
  
  // Wait for black hole appearance (until 4.2s)
  yield* waitFor(0.3);
  
  // Animation 2: Scale in black hole shape (0.8s)
  yield* blackHoleGroup().scale(1, 0.8);
  
  // Start subtle rotation of accretion disk while other animations continue
  yield loop(
    () => accretionDisk().rotation(360, 12).to(0, 0)
  );
  
  // Wait before "incredibly extreme" text (until 8.98s)
  yield* waitFor(3.98);
  
  // Animation 3: Fade in "incredibly extreme" (0.5s)
  yield* extremeText().opacity(1, 0.5);
  
  // Wait before fading out (until 10.1s)
  yield* waitFor(0.62);
  
  // Animation 4: Fade out "incredibly extreme" (0.4s)
  yield* extremeText().opacity(0, 0.4);
  
  // Wait for light rays section (until 13.9s)
  yield* waitFor(3.4);
  
  // Animation 5 & 6: Fade in light rays and "Not even light itself" text simultaneously (0.7s)
  yield* all(
    lightRaysGroup().opacity(1, 0.7),
    lightText().opacity(1, 0.7)
  );
  
  // Wait before fading out light text (until 16.8s)
  yield* waitFor(2.2);
  
  // Animation 7: Fade out "Not even light itself" (0.7s)
  yield* lightText().opacity(0, 0.7);
  
  // Wait before event horizon appears (until 18.95s)
  yield* waitFor(1.45);
  
  // Animation 9: Draw event horizon circle (1.2s)
  yield* eventHorizon().opacity(1, 1.2);
  
  // Animation 8: Fade out light rays (0.7s) - happens at 20.0s
  yield* all(
    waitFor(0.25),
    lightRaysGroup().opacity(0, 0.7)
  );
  
  // Star collapse animation starts at 22.0s
  yield* waitFor(1.05);
  
  // Animation 10 & 11: Show star and scale it in (0.5s)
  yield* all(
    starGroup().opacity(1, 0.5),
    starGroup().scale(1, 0.5)
  );
  
  // Wait before showing "massive stars" text (until 23.2s)
  yield* waitFor(0.7);
  
  // Animation 12: Fade in "massive stars" (0.5s)
  yield* massiveStarsText().opacity(1, 0.5);
  
  // Animation 13: Collapse star to singularity (2.4s) - happens concurrently
  yield* all(
    star().scale(0.08, 2.4),
    sequence(0.8,
      massiveStarsText().opacity(0, 0.4) // Fade out at 24.5s
    )
  );
  
  // Wait before fading out star (until 27.0s)
  yield* waitFor(2.1);
  
  // Animation 15: Fade out star (0.8s)
  yield* starGroup().opacity(0, 0.8);
  
  // Wait for event horizon label (until 33.2s)
  yield* waitFor(5.4);
  
  // Animation 16: Fade in "event horizon" label (0.6s)
  yield* eventHorizonText().opacity(1, 0.6);
  
  // Wait before fading out (until 34.8s)
  yield* waitFor(1.0);
  
  // Animation 17: Fade out "event horizon" label (0.5s)
  yield* eventHorizonText().opacity(0, 0.5);
  
  // Wait for "point of no return" (until 36.4s)
  yield* waitFor(1.1);
  
  // Animation 18: Fade in "point of no return" (0.7s)
  yield* pointOfNoReturnText().opacity(1, 0.7);
  
  // Wait before fading out (until 38.0s)
  yield* waitFor(0.9);
  
  // Animation 19: Fade out "point of no return" (0.4s)
  yield* pointOfNoReturnText().opacity(0, 0.4);
  
  // Wait for Einstein's theory (until 43.1s)
  yield* waitFor(4.7);
  
  // Animation 20: Fade in "Einstein's theory" (0.6s)
  yield* einsteinText().opacity(1, 0.6);
  
  // Wait before fading out (until 44.3s)
  yield* waitFor(0.6);
  
  // Animation 21: Fade out "Einstein's theory" (0.6s)
  yield* einsteinText().opacity(0, 0.6);
  
  // Wait for scene end
  yield* waitFor(0.5);
});