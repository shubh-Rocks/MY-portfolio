"use client";

import { useEffect, useRef } from "react";
import Matter from "matter-js";
import MatterAttractors from "matter-attractors";
import MatterWrap from "matter-wrap";

export default function MatterBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Register plugins
    Matter.use(MatterAttractors);
    Matter.use(MatterWrap);

    const { Engine, Runner, Render, World, Body, Common, Bodies } = Matter;

    const dimensions = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    const engine = Engine.create();
    engine.world.gravity.scale = 0;

    const render = Render.create({
      canvas: canvasRef.current,
      engine: engine,
      options: {
        width: dimensions.width,
        height: dimensions.height,
        wireframes: false,
        background: "transparent",
      },
    });

    const runner = Runner.create();
    Runner.run(runner, engine);
    Render.run(render);

    // 1. ORIGINAL ATTRACTOR (The Big Black Circle)
    const attractiveBody = Bodies.circle(
      dimensions.width / 1,
      dimensions.height / 1,
      Math.max(dimensions.width / 25, dimensions.height / 25) / 2,
      {
        isStatic: true,
        render: { fillStyle: "#000", strokeStyle: "#000", lineWidth: 0 },
        plugin: {
          attractors: [
            function (bodyA, bodyB) {
              return {
                x: (bodyA.position.x - bodyB.position.x) * 1e-6,
                y: (bodyA.position.y - bodyB.position.y) * 1e-6,
              };
            },
          ],
        },
      },
    );
    World.add(engine.world, attractiveBody);

    // 2. ORIGINAL PARTICLE GENERATION (All your circles are back)
    for (let i = 0; i < 60; i++) {
      let x = Common.random(0, dimensions.width);
      let y = Common.random(0, dimensions.height);
      let s =
        Common.random() > 0.6 ? Common.random(10, 80) : Common.random(4, 60);
      let polygonNumber = Common.random(3, 6);

      // Main Polygons
      World.add(
        engine.world,
        Bodies.polygon(x, y, polygonNumber, s, {
          mass: s / 20,
          frictionAir: 0.02,
          render: {
            fillStyle: "#222222",
            strokeStyle: "#000000",
            lineWidth: 2,
          },
        }),
      );

      let r = Common.random(0, 1);

      // Small Circles (The ones you were missing)
      World.add(
        engine.world,
        Bodies.circle(x, y, Common.random(2, 8), {
          mass: 0.1,
          frictionAir: 0.1,
          render: {
            fillStyle: r > 0.3 ? "#27292d" : "#444444",
            strokeStyle: "#000000",
            lineWidth: 2,
          },
        }),
      );

      // Medium Circles
      World.add(
        engine.world,
        Bodies.circle(x, y, Common.random(2, 20), {
          mass: 6,
          frictionAir: 0,
          render: {
            fillStyle: r > 0.3 ? "#334443" : "#222222",
            strokeStyle: "#111111",
            lineWidth: 4,
          },
        }),
      );

      // Large High-Friction Circles
      World.add(
        engine.world,
        Bodies.circle(x, y, Common.random(2, 30), {
          mass: 0.2,
          friction: 0.3,
          frictionAir: 0.7,
          render: {
            fillStyle: "#191919",
            strokeStyle: "#111111",
            lineWidth: 3,
          },
        }),
      );
    }

    // --- 3. THE FIXED INTERACTION LOGIC ---
    // Using a window listener so text/logo doesn't block it
    const handleMouseMove = (e) => {
      // Only interact if we are at the top of the page (Section 1)
      const isVisible = window.scrollY < 100;
      const isInside = e.clientY < dimensions.height;

      if (isVisible && isInside) {
        Body.setPosition(attractiveBody, {
          x: e.clientX,
          y: e.clientY,
        });
      } else {
        // Teleport attractor away in Section 2 so particles stop following
        Body.setPosition(attractiveBody, { x: -5000, y: -5000 });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    const handleResize = () => {
      render.canvas.width = window.innerWidth;
      render.canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      Render.stop(render);
      Runner.stop(runner);
      Engine.clear(engine);
    };
  }, []);

  return (
    <canvas className="hidden md:block"
      ref={canvasRef}
      style={{
        position: "absolute", // Keeps it as a background for Section 1
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none", // Let's clicks pass through to your buttons
      }}
    />
  );
}
