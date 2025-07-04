import {makeScene2D, Circle, Txt, Rect, Img, Line, Layout} from '@motion-canvas/2d';
import {all, createRef, waitFor, easeInOutQuad, linear, Vector2, createSignal} from '@motion-canvas/core';

export default makeScene2D(function* (view) {
  // Design scheme colors
  const backgroundColor = '#050623';
  const primaryColor = '#F8E81C';
  const secondaryColor = '#11B5E4';
  const accentColor = '#FF5370';
  const textColor = '#FFFFFF';

  // Set background
  view.fill(backgroundColor);

  // References for visual elements
  const blackHoleImage = createRef<Img>();
  const titleText = createRef<Txt>();
  const astronautShape = createRef<Circle>();
  const spacetimeGrid = createRef<Layout>();
  const timeDilationText = createRef<Txt>();
  const clocksLayout = createRef<Layout>();
  const spaghettificationText = createRef<Txt>();
  const stretchedAstronaut = createRef<Rect>();
  const spacetimeTextLayout = createRef<Layout>();
  const warpedGrid = createRef<Layout>();
  const quantumText = createRef<Txt>();

  // Signals for animations
  const astronautClock = createSignal(0);
  const observerClock = createSignal(0);

  // Add all visual elements
  view.add(
    <>
      {/* Black hole with event horizon and accretion disk */}
      <Img
        ref={blackHoleImage}
        src="src/scenes/06251928_blackholes/black_hole_accretion.png"
        width={800}
        height={800}
        scale={1.0}
        opacity={1}
      />

      {/* Title text */}
      <Txt
        ref={titleText}
        text="Extreme Physics Near Black Holes"
        fontSize={32}
        fontWeight={700}
        fill={primaryColor}
        opacity={0}
        y={-300}
      />

      {/* Falling astronaut */}
      <Circle
        ref={astronautShape}
        size={80}
        fill={secondaryColor}
        scale={0}
        x={300}
        y={-150}
      />

      {/* Spacetime grid */}
      <Layout ref={spacetimeGrid} opacity={0}>
        {/* Create grid lines */}
        {[...Array(11)].map((_, i) => (
          <Line
            key={'horizontal' + i}
            points={[[-400, -200 + i * 40], [400, -200 + i * 40]]}
            stroke={textColor}
            lineWidth={1}
            opacity={0.5}
          />
        ))}
        {[...Array(21)].map((_, i) => (
          <Line
            key={'vertical' + i}
            points={[[-400 + i * 40, -200], [-400 + i * 40, 200]]}
            stroke={textColor}
            lineWidth={1}
            opacity={0.5}
          />
        ))}
      </Layout>

      {/* Time Dilation text */}
      <Txt
        ref={timeDilationText}
        text="Time Dilation"
        fontSize={24}
        fontWeight={700}
        fill={primaryColor}
        opacity={0}
        x={-250}
        y={0}
      />

      {/* Clocks layout */}
      <Layout ref={clocksLayout} scale={0}>
        {/* Astronaut clock */}
        <Circle
          size={100}
          stroke={secondaryColor}
          lineWidth={3}
          x={-200}
          y={100}
        >
          <Line
            points={[[0, 0], [0, -35]]}
            stroke={secondaryColor}
            lineWidth={3}
            rotation={() => astronautClock()}
          />
          <Txt text="Near BH" fontSize={14} fill={textColor} y={70} />
        </Circle>

        {/* Observer clock */}
        <Circle
          size={100}
          stroke={textColor}
          lineWidth={3}
          x={200}
          y={100}
        >
          <Line
            points={[[0, 0], [0, -35]]}
            stroke={textColor}
            lineWidth={3}
            rotation={() => observerClock()}
          />
          <Txt text="Far Away" fontSize={14} fill={textColor} y={70} />
        </Circle>
      </Layout>

      {/* Spaghettification text */}
      <Txt
        ref={spaghettificationText}
        text="Spaghettification"
        fontSize={24}
        fontWeight={700}
        fill={accentColor}
        opacity={0}
        x={250}
        y={0}
      />

      {/* Astronaut being stretched */}
      <Rect
        ref={stretchedAstronaut}
        width={60}
        height={120}
        fill={secondaryColor}
        radius={30}
        x={250}
        y={0}
        scaleX={1.0}
        scaleY={1.0}
      />

      {/* Space Time text */}
      <Layout ref={spacetimeTextLayout} opacity={0} x={-300} y={200}>
        <Txt
          text="Space"
          fontSize={20}
          fontWeight={400}
          fill={secondaryColor}
          y={-15}
        />
        <Txt
          text="Time"
          fontSize={20}
          fontWeight={400}
          fill={secondaryColor}
          y={15}
        />
      </Layout>

      {/* Warped grid highlight */}
      <Layout ref={warpedGrid} opacity={0}>
        {/* Create warped grid lines */}
        {[...Array(11)].map((_, i) => (
          <Line
            key={'warped-h' + i}
            points={[[-400, -200 + i * 40], [400, -200 + i * 40]]}
            stroke={primaryColor}
            lineWidth={2}
            opacity={0.8}
          />
        ))}
        {[...Array(21)].map((_, i) => (
          <Line
            key={'warped-v' + i}
            points={[[-400 + i * 40, -200], [-400 + i * 40, 200]]}
            stroke={primaryColor}
            lineWidth={2}
            opacity={0.8}
          />
        ))}
      </Layout>

      {/* Quantum Mechanics text */}
      <Txt
        ref={quantumText}
        text="Quantum Mechanics"
        fontSize={22}
        fontWeight={700}
        fill={primaryColor}
        opacity={0}
        y={250}
      />
    </>
  );

  // Animation sequence
  yield* waitFor(0.2); // Start at 0.2s

  // Fade in title (0.2s - 1.7s)
  yield* titleText().opacity(1, 1.5, easeInOutQuad);

  yield* waitFor(0.7); // Wait until 2.4s

  // Fade out title (2.4s - 3.0s)
  yield* titleText().opacity(0, 0.6, easeInOutQuad);

  yield* waitFor(3.3); // Wait until 6.3s

  // Fade in spacetime grid (6.3s - 7.1s)
  yield* spacetimeGrid().opacity(1, 0.8, easeInOutQuad);

  yield* waitFor(0.2); // Small delay until 6.5s

  // Scale in astronaut (6.5s - 7.5s)
  yield* astronautShape().scale(1, 1.0, easeInOutQuad);

  yield* waitFor(2.7); // Wait until 10.2s

  // Fade in Time Dilation text and scale in clocks (10.2s)
  yield* all(
    timeDilationText().opacity(1, 0.6, easeInOutQuad),
    clocksLayout().scale(1, 0.7, easeInOutQuad)
  );

  yield* waitFor(3.6); // Wait until 13.8s

  // Animate clocks - astronaut clock moves slowly, observer clock spins fast (13.8s - 19.8s)
  yield* all(
    astronautClock(60, 6.0, linear), // Slow rotation for astronaut
    observerClock(720, 6.0, linear)  // Fast rotation for observer
  );

  yield* waitFor(1.2); // Wait until 21.0s

  // Fade out time dilation elements (21.0s - 21.6s)
  yield* all(
    timeDilationText().opacity(0, 0.5, easeInOutQuad),
    clocksLayout().scale(0, 0.6, easeInOutQuad)
  );

  yield* waitFor(1.3); // Wait until 22.9s

  // Fade in Spaghettification text (22.9s - 23.6s)
  yield* spaghettificationText().opacity(1, 0.7, easeInOutQuad);

  yield* waitFor(3.5); // Wait until 27.1s

  // Stretch and compress astronaut for spaghettification (27.1s - 29.6s)
  yield* all(
    stretchedAstronaut().scale([1.0, 3.0], 2.5, easeInOutQuad),
    stretchedAstronaut().scale([0.3, 1.0], 2.5, easeInOutQuad)
  );

  yield* waitFor(5.4); // Wait until 35.0s

  // Fade out spaghettification text (35.0s - 35.5s)
  yield* spaghettificationText().opacity(0, 0.5, easeInOutQuad);

  yield* waitFor(0.9); // Wait until 36.4s

  // Fade in Space Time text (36.4s - 36.9s)
  yield* spacetimeTextLayout().opacity(1, 0.5, easeInOutQuad);

  yield* waitFor(0.4); // Wait until 36.8s

  // Fade in warped grid highlight (36.8s - 39.1s)
  yield* warpedGrid().opacity(1, 2.3, easeInOutQuad);

  yield* waitFor(0.2); // Wait until 39.0s

  // Fade out warped grid (39.0s - 39.4s)
  yield* warpedGrid().opacity(0, 0.4, easeInOutQuad);

  yield* waitFor(5.7); // Wait until 45.1s

  // Fade in Quantum Mechanics text (45.1s - 46.1s)
  yield* quantumText().opacity(1, 1.0, easeInOutQuad);

  // Scene duration is 46 seconds total
});
