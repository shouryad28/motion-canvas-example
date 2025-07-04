import {makeScene2D, Circle, Txt, Rect, Gradient} from '@motion-canvas/2d';
import {all, createRef, chain, waitFor, easeInOutCubic, easeInOutSine, linear} from '@motion-canvas/core';

export default makeScene2D(function* (view) {
  // Set background color
  view.fill('#050623');

  // References for all visual elements
  const blackHoleOutline = createRef<Circle>();
  const singularity = createRef<Circle>();
  const singularityLabel = createRef<Txt>();
  const eventHorizon = createRef<Circle>();
  const eventHorizonLabel = createRef<Txt>();
  const schwarzschildRadius = createRef<Circle>();
  const schwarzschildLabel = createRef<Txt>();
  const accretionDisk = createRef<Rect>();
  const accretionDiskLabel = createRef<Txt>();
  const extremePhysicsLabel = createRef<Txt>();

  // Element 0: Black hole outline
  view.add(
    <Circle
      ref={blackHoleOutline}
      size={440}
      stroke={'#F8E81C'}
      lineWidth={8}
      fill={'#070822'}
      opacity={0}
    />
  );

  // Element 1: Singularity point
  view.add(
    <Circle
      ref={singularity}
      size={20}
      fill={'#FFFFFF'}
      opacity={0}
    />
  );

  // Element 2: Singularity label
  view.add(
    <Txt
      ref={singularityLabel}
      text={'Singularity'}
      fontSize={26}
      fill={'#F8E81C'}
      fontWeight={700}
      opacity={0}
    />
  );

  // Element 3: Event horizon ring
  view.add(
    <Circle
      ref={eventHorizon}
      size={320}
      stroke={'#F8E81C'}
      lineWidth={12}
      opacity={0}
    />
  );

  // Element 4: Event Horizon label
  view.add(
    <Txt
      ref={eventHorizonLabel}
      text={'Event Horizon'}
      fontSize={24}
      fill={'#F8E81C'}
      fontWeight={700}
      opacity={0}
      y={300}
    />
  );

  // Element 5: Schwarzschild radius dashed circle
  view.add(
    <Circle
      ref={schwarzschildRadius}
      size={350}
      stroke={'#11B5E4'}
      lineWidth={3}
      lineDash={[10, 8]}
      opacity={0}
    />
  );

  // Element 6: Schwarzschild Radius label
  view.add(
    <Txt
      ref={schwarzschildLabel}
      text={'Schwarzschild Radius'}
      fontSize={22}
      fill={'#11B5E4'}
      fontWeight={700}
      opacity={0}
      y={-350}
    />
  );

  // Element 7: Accretion disk
  view.add(
    <Rect
      ref={accretionDisk}
      width={400}
      height={30}
      fill={new Gradient({
        type: 'linear',
        from: [-200, 0],
        to: [200, 0],
        stops: [
          {offset: 0, color: '#FF5370'},
          {offset: 0.5, color: '#F8E81C'},
          {offset: 1, color: '#11B5E4'}
        ]
      })}
      opacity={0}
      shadowColor={'#FF5370'}
      shadowBlur={16}
    />
  );

  // Element 8: Accretion Disk label
  view.add(
    <Txt
      ref={accretionDiskLabel}
      text={'Accretion Disk'}
      fontSize={22}
      fill={'#FF5370'}
      fontWeight={700}
      opacity={0}
      y={-250}
    />
  );

  // Element 9: Extreme Physics label
  view.add(
    <Txt
      ref={extremePhysicsLabel}
      text={'Extreme Physics'}
      fontSize={28}
      fill={'#FF5370'}
      fontWeight={700}
      opacity={0}
      x={300}
      y={300}
      shadowColor={'#F8E81C'}
      shadowBlur={20}
    />
  );

  // Animation sequence
  
  // Wait for narration to start (0.3s)
  yield* waitFor(0.3);
  
  // Animation 0: Fade in black hole outline
  yield* blackHoleOutline().opacity(1, 1.0, easeInOutCubic);
  
  // Wait until singularity appears (6.5s - 1.3s = 5.2s)
  yield* waitFor(5.2);
  
  // Animation 1: Fade in singularity point
  yield* singularity().opacity(1, 0.8, easeInOutCubic);
  
  // Wait for singularity label (8.3s - 7.3s = 1.0s)
  yield* waitFor(1.0);
  
  // Animation 2: Fade in and pulse Singularity label
  yield* all(
    singularityLabel().opacity(1, 0.5, easeInOutCubic),
    chain(
      singularityLabel().fontSize(32, 0.24, easeInOutSine),
      singularityLabel().fontSize(26, 0.36, easeInOutSine)
    )
  );
  
  // Wait for infinite density animation (10.14s - 8.9s = 1.24s)
  yield* waitFor(1.24);
  
  // Animation 3-4: Pulse and contract singularity for "infinite density"
  yield* chain(
    singularity().size(36, 0.7, easeInOutCubic),
    singularity().size(4, 0.8, easeInOutCubic)
  );
  
  // Wait for event horizon (14.8s - 12.34s = 2.46s)
  yield* waitFor(2.46);
  
  // Animation 5: Fade in event horizon
  yield* eventHorizon().opacity(1, 0.8, easeInOutCubic);
  
  // Wait for event horizon label (16.0s - 15.6s = 0.4s)
  yield* waitFor(0.4);
  
  // Animation 6-7: Fade in and emphasize Event Horizon label
  yield* all(
    eventHorizonLabel().opacity(1, 0.5, easeInOutCubic),
    chain(
      eventHorizonLabel().fontSize(30, 0.28, easeInOutSine),
      eventHorizonLabel().fontSize(24, 0.5, easeInOutSine)
    )
  );
  
  // Wait for "point of no return" (18.2s - 16.78s = 1.42s)
  yield* waitFor(1.42);
  
  // Animation 8-9: Pulsate event horizon for "point of no return"
  yield* chain(
    eventHorizon().lineWidth(18, 1.2, easeInOutSine),
    eventHorizon().lineWidth(12, 0.5, easeInOutSine)
  );
  
  // Wait for light escape animation (22.1s - 20.7s = 1.4s)
  yield* waitFor(1.4);
  
  // Animation 10: Flash effect for "light can't escape"
  yield* eventHorizon().stroke('#FFFFFF', 0.6, linear);
  
  // Wait for Schwarzschild radius (25.5s - 22.7s = 2.8s)
  yield* waitFor(2.8);
  
  // Animation 11-12: Fade in and expand Schwarzschild radius
  yield* all(
    schwarzschildRadius().opacity(1, 1.0, easeInOutCubic),
    (function* () {
      yield* waitFor(0.64);
      yield* schwarzschildRadius().size(420, 1.2, easeInOutCubic);
    })()
  );
  
  // Wait for Schwarzschild label (27.3s - 26.5s = 0.8s)
  yield* waitFor(0.8);
  
  // Animation 13-15: Fade in and emphasize Schwarzschild Radius label
  yield* all(
    schwarzschildLabel().opacity(1, 0.7, easeInOutCubic),
    chain(
      schwarzschildLabel().fontSize(28, 0.22, easeInOutSine),
      schwarzschildLabel().fontSize(22, 0.6, easeInOutSine)
    )
  );
  
  // Wait for accretion disk (34.8s - 28.5s = 6.3s)
  yield* waitFor(6.3);
  
  // Animation 16: Fade in accretion disk
  yield* accretionDisk().opacity(1, 1.0, easeInOutCubic);
  
  // Wait for accretion disk label (35.4s - 35.8s = 0.6s)
  yield* waitFor(0.6);
  
  // Animation 17-19: Fade in and emphasize Accretion Disk label, with rotation
  yield* all(
    accretionDiskLabel().opacity(1, 0.4, easeInOutCubic),
    chain(
      accretionDiskLabel().fontSize(28, 0.2, easeInOutSine),
      accretionDiskLabel().fontSize(22, 0.5, easeInOutSine)
    ),
    (function* () {
      yield* waitFor(0.1);
      yield* accretionDisk().rotation(60, 4.0, linear);
    })()
  );
  
  // Wait for extreme physics label (44.1s - 36.1s = 8.0s)
  yield* waitFor(8.0);
  
  // Animation 20-22: Fade in and emphasize Extreme Physics label
  yield* all(
    extremePhysicsLabel().opacity(1, 0.7, easeInOutCubic),
    chain(
      extremePhysicsLabel().fontSize(34, 0.6, easeInOutSine),
      extremePhysicsLabel().fontSize(28, 0.7, easeInOutSine)
    )
  );
  
  // Wait for scene end
  yield* waitFor(1.5);
});