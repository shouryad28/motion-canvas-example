import {makeScene2D, Circle, Txt, Rect, Node, Latex} from '@motion-canvas/2d';
import {all, createRef, waitFor, tween, easeInOutQuad, easeOutQuad, easeInQuad, linear} from '@motion-canvas/core';

export default makeScene2D(function* (view) {
  // Set background color
  view.fill('#050623');
  
  // Create references for all elements
  const einsteinText = createRef<Txt>();
  const fieldEquation = createRef<Latex>();
  const blackHoleIcon = createRef<Node>();
  const questionText = createRef<Txt>();
  const massiveStar = createRef<Circle>();
  const dramaticDeathText = createRef<Txt>();
  const massComparisonText = createRef<Txt>();
  const sunIcon = createRef<Circle>();
  const contractingCore = createRef<Circle>();
  const gravityArrow = createRef<Node>();
  const supernovaExplosion = createRef<Node>();
  const supernovaText = createRef<Txt>();
  const chandrasekharText = createRef<Txt>();
  const solarMassesText = createRef<Txt>();
  const collapsingCore = createRef<Circle>();
  const spacetimeGrid = createRef<Node>();
  const spacetimeCavesText = createRef<Txt>();
  const blackHole = createRef<Circle>();
  const anatomyText = createRef<Txt>();
  
  // Add all elements to the scene
  view.add(
    <>
      {/* Einstein's Equations text */}
      <Txt
        ref={einsteinText}
        text="Einstein's Equations"
        fontSize={28}
        fill={'#F8E81C'}
        opacity={0}
        y={-250}
      />
      
      {/* Field equations */}
      <Latex
        ref={fieldEquation}
        tex="G_{\mu\nu} = 8\pi T_{\mu\nu}"
        fontSize={24}
        fill={'#11B5E4'}
        opacity={0}
      />
      
      {/* Black hole icon */}
      <Node ref={blackHoleIcon} scale={0} opacity={0}>
        <Circle
          width={120}
          height={120}
          fill={'#FF5370'}
          stroke={'#F8E81C'}
          lineWidth={4}
        />
        <Circle
          width={140}
          height={20}
          fill={'#F8E81C'}
          y={0}
          opacity={0.6}
        />
      </Node>
      
      {/* Question text */}
      <Txt
        ref={questionText}
        text="How do black holes actually form?"
        fontSize={24}
        fontWeight={700}
        fill={'#FF5370'}
        opacity={0}
        y={250}
      />
      
      {/* Massive star */}
      <Circle
        ref={massiveStar}
        width={200}
        height={200}
        fill={'#11B5E4'}
        opacity={0}
        scale={0}
      />
      
      {/* Dramatic Death text */}
      <Txt
        ref={dramaticDeathText}
        text="Dramatic Death"
        fontSize={26}
        fontStyle={'italic'}
        fill={'#F8E81C'}
        opacity={0}
        y={-250}
      />
      
      {/* Mass comparison text */}
      <Txt
        ref={massComparisonText}
        text="≥ 20x Sun's Mass"
        fontSize={22}
        fill={'#11B5E4'}
        fontWeight={700}
        opacity={0}
        x={-300}
      />
      
      {/* Sun icon */}
      <Circle
        ref={sunIcon}
        width={30}
        height={30}
        fill={'#F8E81C'}
        opacity={0}
        x={-400}
        scale={0.7}
      />
      
      {/* Contracting core animation */}
      <Circle
        ref={contractingCore}
        width={200}
        height={200}
        fill={'#0A84FF'}
        opacity={0}
        scale={1}
      />
      
      {/* Gravity arrow */}
      <Node ref={gravityArrow} opacity={0}>
        <Rect
          width={4}
          height={100}
          fill={'#F8E81C'}
          rotation={45}
          x={-70}
          y={-70}
        />
        <Rect
          width={4}
          height={100}
          fill={'#F8E81C'}
          rotation={-45}
          x={70}
          y={-70}
        />
      </Node>
      
      {/* Supernova explosion */}
      <Node ref={supernovaExplosion} scale={0} opacity={0}>
        {[...Array(8)].map((_, i) => (
          <Rect
            key={'ray' + i}
            width={8}
            height={200}
            fill={'#FF5370'}
            rotation={i * 45}
            x={0}
            y={-100}
          />
        ))}
      </Node>
      
      {/* Supernova text */}
      <Txt
        ref={supernovaText}
        text="Supernova Explosion"
        fontSize={26}
        fontWeight={700}
        fill={'#FF5370'}
        opacity={0}
        y={250}
      />
      
      {/* Chandrasekhar Limit text */}
      <Txt
        ref={chandrasekharText}
        text="The Chandrasekhar Limit"
        fontSize={24}
        fontWeight={700}
        fill={'#11B5E4'}
        opacity={0}
        y={-250}
      />
      
      {/* Solar masses text */}
      <Txt
        ref={solarMassesText}
        text="≈ 3 Solar Masses"
        fontSize={20}
        fill={'#F8E81C'}
        opacity={0}
        y={-200}
      />
      
      {/* Collapsing core */}
      <Circle
        ref={collapsingCore}
        width={150}
        height={150}
        fill={'#0A84FF'}
        opacity={1}
        scale={1}
      />
      
      {/* Spacetime grid */}
      <Node ref={spacetimeGrid} opacity={0}>
        {[...Array(7)].map((_, i) => (
          <Rect
            key={'hline' + i}
            width={600}
            height={2}
            stroke={'#11B5E4'}
            y={(i - 3) * 80}
          />
        ))}
        {[...Array(7)].map((_, i) => (
          <Rect
            key={'vline' + i}
            width={2}
            height={600}
            stroke={'#11B5E4'}
            x={(i - 3) * 80}
          />
        ))}
      </Node>
      
      {/* Space-time caves in text */}
      <Txt
        ref={spacetimeCavesText}
        text="Space-time Caves In"
        fontSize={24}
        fontStyle={'italic'}
        fill={'#FFFFFF'}
        opacity={0}
        y={-250}
      />
      
      {/* Black hole */}
      <Circle
        ref={blackHole}
        width={150}
        height={150}
        fill={'#000000'}
        opacity={0}
        scale={0}
      />
      
      {/* Anatomy text */}
      <Txt
        ref={anatomyText}
        text="Anatomy of a Black Hole"
        fontSize={30}
        fontWeight={700}
        fill={'#F8E81C'}
        opacity={0}
      />
    </>
  );
  
  // Animation sequence
  
  // Wait for narration to start
  yield* waitFor(0.18);
  
  // Fade in Einstein's Equations (0.18 - 0.78)
  yield* tween(0.6, value => {
    einsteinText().opacity(value);
  });
  
  // Wait then fade in field equations (0.94 - 1.54)
  yield* waitFor(0.16);
  yield* tween(0.6, value => {
    fieldEquation().opacity(value);
  });
  
  // Wait then fade out both texts (2.0 - 2.7)
  yield* waitFor(0.46);
  yield* all(
    tween(0.7, value => {
      einsteinText().opacity(1 - value);
    }),
    tween(0.7, value => {
      fieldEquation().opacity(1 - value);
    })
  );
  
  // Wait then show black hole icon with scale and fade (3.08 - 3.52)
  yield* waitFor(0.38);
  yield* all(
    tween(0.44, value => {
      blackHoleIcon().scale(value * 1.1);
    }, easeOutQuad),
    tween(0.44, value => {
      blackHoleIcon().opacity(value);
    })
  );
  
  // Wait then fade in question text (4.18 - 4.58)
  yield* waitFor(0.66);
  yield* tween(0.4, value => {
    questionText().opacity(value);
  });
  
  // Pulse black hole icon (4.84 - 5.44)
  yield* waitFor(0.26);
  yield* tween(0.6, value => {
    const scale = 1.1 - (0.1 * Math.sin(value * Math.PI));
    blackHoleIcon().scale(scale);
  });
  
  // Fade out black hole icon and question (6.84 - 7.24)
  yield* waitFor(1.4);
  yield* all(
    tween(0.4, value => {
      blackHoleIcon().opacity(1 - value);
    }),
    tween(0.4, value => {
      questionText().opacity(1 - value);
    })
  );
  
  // Scale and fade in massive star (7.04 - 8.04)
  yield* all(
    tween(1.0, value => {
      massiveStar().scale(value);
    }, easeOutQuad),
    tween(1.0, value => {
      massiveStar().opacity(value);
    })
  );
  
  // Fade in Dramatic Death text (8.62 - 9.42)
  yield* waitFor(0.58);
  yield* tween(0.8, value => {
    dramaticDeathText().opacity(value);
  });
  
  // Fade out Dramatic Death text (9.08 - 9.48)
  yield* tween(0.4, value => {
    dramaticDeathText().opacity(1 - value);
  });
  
  // Fade in mass comparison text (12.12 - 12.62)
  yield* waitFor(2.64);
  yield* tween(0.5, value => {
    massComparisonText().opacity(value);
  });
  
  // Fade in Sun icon (13.22 - 13.62)
  yield* waitFor(0.6);
  yield* tween(0.4, value => {
    sunIcon().opacity(value);
  });
  
  // Star dims and contracts (14.52 - 17.72)
  yield* waitFor(0.9);
  yield* all(
    tween(3.2, value => {
      contractingCore().scale(1 - (0.5 * value));
    }, linear),
    tween(1.2, value => {
      contractingCore().opacity(value);
    })
  );
  
  // Fade in gravity arrow (18.14 - 19.14)
  yield* waitFor(0.42);
  yield* tween(1.0, value => {
    gravityArrow().opacity(value);
  });
  
  // Increase stroke width of gravity arrow (18.66 - 19.26)
  yield* waitFor(0.52);
  yield* tween(0.6, value => {
    gravityArrow().children().forEach(child => {
      if (child instanceof Rect) {
        child.width(4 + (4 * value));
      }
    });
  });
  
  // Fade out massive star (21.52 - 22.12)
  yield* waitFor(2.26);
  yield* tween(0.6, value => {
    massiveStar().opacity(1 - value);
  });
  
  // Supernova explosion animation (24.2 - 25.2)
  yield* waitFor(2.08);
  yield* tween(1.0, value => {
    supernovaExplosion().scale(value * 1.3);
  }, easeOutQuad);
  
  // Fade in supernova explosion and text (25.62 - 26.62)
  yield* waitFor(0.42);
  yield* all(
    tween(1.0, value => {
      supernovaExplosion().opacity(value);
    }),
    tween(0.7, value => {
      supernovaText().opacity(value);
    })
  );
  
  // Fade out supernova text (27.66 - 28.06)
  yield* waitFor(1.04);
  yield* tween(0.4, value => {
    supernovaText().opacity(1 - value);
  });
  
  // Fade in Chandrasekhar Limit text (29.2 - 30.2)
  yield* waitFor(1.14);
  yield* tween(1.0, value => {
    chandrasekharText().opacity(value);
  });
  
  // Fade in solar masses text (31.2 - 31.9)
  yield* waitFor(2.0);
  yield* tween(0.7, value => {
    solarMassesText().opacity(value);
  });
  
  // Rapid core collapse (33.08 - 34.78)
  yield* waitFor(1.18);
  yield* tween(1.7, value => {
    collapsingCore().scale(1 - (0.9 * value));
  }, easeInQuad);
  
  // Fade out Chandrasekhar text (33.56 - 34.16)
  yield* waitFor(0.48);
  yield* tween(0.6, value => {
    chandrasekharText().opacity(1 - value);
  });
  
  // Spacetime grid warps in (34.88 - 36.88)
  yield* waitFor(0.72);
  yield* tween(2.0, value => {
    spacetimeGrid().opacity(value);
    // Warp the grid towards center
    spacetimeGrid().children().forEach((child, i) => {
      if (child instanceof Rect) {
        const distortion = value * 0.3;
        child.scale([1 - distortion, 1 - distortion]);
      }
    });
  });
  
  // Fade in space-time caves text (35.4 - 36.2)
  yield* waitFor(0.52);
  yield* tween(0.8, value => {
    spacetimeCavesText().opacity(value);
  });
  
  // Black hole appears (37.44 - 38.44)
  yield* waitFor(1.24);
  yield* all(
    tween(1.0, value => {
      blackHole().scale(value);
    }, easeOutQuad),
    tween(1.0, value => {
      blackHole().opacity(value);
    })
  );
  
  // Fade in anatomy text (39.92 - 41.12)
  yield* waitFor(1.48);
  yield* tween(1.2, value => {
    anatomyText().opacity(value);
  });
  
  // Hold final frame
  yield* waitFor(0.88);
});