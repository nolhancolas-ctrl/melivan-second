"use client";

import { useRef } from "react";
import { useAnimate } from "framer-motion";
import { Cormorant_Garamond } from "next/font/google";
import clsx from "clsx";

const titleFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["600", "700"],
});

const letters = "MELIVAN".split("");

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

type Props = {
  className?: string;
};

export default function MelivanAnimatedTitle({ className }: Props) {
  const [scope, animate] = useAnimate();

  const runningRef = useRef(false);
  const runIdRef = useRef(0);
  const activeAnimationsRef = useRef<any[]>([]);

  // -----------------------------
  // HELPERS
  // -----------------------------
  function trackedAnimate(selector: string, keyframes: any, options: any) {
    const controls = animate(selector, keyframes, options);
    activeAnimationsRef.current.push(controls);
    return controls;
  }

  function stopActiveAnimations() {
    activeAnimationsRef.current.forEach((c) => c?.stop?.());
    activeAnimationsRef.current = [];
  }

  function getAngle(index: number) {
    const el = scope.current?.querySelector(
      `[data-letter="${index}"]`
    ) as HTMLElement;
    if (!el) return 0;

    const transform = getComputedStyle(el).transform;
    if (!transform || transform === "none") return 0;

    const m = new DOMMatrixReadOnly(transform);
    const angle = Math.atan2(m.m12, m.m11) * (180 / Math.PI);
    return ((angle % 360) + 360) % 360;
  }

  function getSpinProgress(index: 0 | 6) {
    const angle = getAngle(index);
    return index === 0 ? (angle === 0 ? 0 : 360 - angle) : angle;
  }

  // -----------------------------
  // RESET INTELLIGENT
  // -----------------------------
  async function resetToOriginFast(runId: number) {
    stopActiveAnimations();

    const normal = [1, 2, 3, 4, 5]; // E L I V A

    const mProgress = getSpinProgress(0);
    const nProgress = getSpinProgress(6);

    const mTarget = mProgress > 180 ? -360 : 0;
    const nTarget = nProgress > 180 ? 360 : 0;

    // 🔥 RESET COMPLET POSITION + ROTATION
    await Promise.all([
      ...normal.map((i) =>
        trackedAnimate(
          `[data-letter="${i}"]`,
          {
            x: 0,
            y: 0,
            rotate: 0,
            rotateZ: 0,
            rotateY: 0,
            scale: 1,
            scaleY: 1,
          },
          {
            duration: 0.24,
            ease: [0.22, 1, 0.36, 1],
          }
        )
      ),

      // M
      trackedAnimate(
        `[data-letter="0"]`,
        {
          x: 0,
          y: 0,
          rotate: 0,
          rotateZ: mTarget,
          rotateY: 0,
          scale: 1,
          scaleY: 1,
        },
        {
          duration: 0.24,
          ease: [0.22, 1, 0.36, 1],
        }
      ),

      // N
      trackedAnimate(
        `[data-letter="6"]`,
        {
          x: 0,
          y: 0,
          rotate: 0,
          rotateZ: nTarget,
          rotateY: 0,
          scale: 1,
          scaleY: 1,
        },
        {
          duration: 0.24,
          ease: [0.22, 1, 0.36, 1],
        }
      ),
    ]);

    if (runId !== runIdRef.current) return;

    // 🔥 HARD RESET FINAL (évite tout drift résiduel)
    stopActiveAnimations();

    await Promise.all(
      letters.map((_, i) =>
        animate(
          `[data-letter="${i}"]`,
          {
            x: 0,
            y: 0,
            rotate: 0,
            rotateZ: 0,
            rotateY: 0,
            scale: 1,
            scaleY: 1,
          },
          {
            duration: 0.001,
          }
        )
      )
    );
  }

  // -----------------------------
  // ANIMATION
  // -----------------------------
  async function playAnimation() {
    const id = ++runIdRef.current;

    if (runningRef.current) {
      await resetToOriginFast(id);
      if (id !== runIdRef.current) return;
    } else {
      runningRef.current = true;
    }

    // PHASE 1
    const phase1 = Promise.all([
      trackedAnimate(`[data-letter="0"]`, {
        x: [0, -54, 10, 0],
        rotateZ: [0, -360, -332, -360],
      }, { duration: 0.78 }),

      trackedAnimate(`[data-letter="1"]`, {
        x: [0, -30, 8, 0],
        rotateZ: [0, -28, 12, 0],
      }, { duration: 0.78 }),

      trackedAnimate(`[data-letter="2"]`, {
        x: [0, -16, 6, 0],
        rotateZ: [0, -16, 7, 0],
      }, { duration: 0.78 }),
    ]);

    await wait(200);

    const firstI = trackedAnimate(`[data-letter="3"]`, {
      y: [0, -3, 0],
    }, { duration: 0.16 });

    await wait(40);

    // PHASE 2
    const phase2 = Promise.all([
      trackedAnimate(`[data-letter="4"]`, {
        x: [0, 16, -6, 0],
      }, { duration: 0.78 }),

      trackedAnimate(`[data-letter="5"]`, {
        x: [0, 30, -8, 0],
      }, { duration: 0.78 }),

      trackedAnimate(`[data-letter="6"]`, {
        x: [0, 54, -10, 0],
        rotateZ: [0, 360, 332, 360],
      }, { duration: 0.78 }),
    ]);

    await phase1;
    await firstI;

    await wait(20); // réglable

    const secondI = trackedAnimate(`[data-letter="3"]`, {
      y: [0, -4, 0],
    }, { duration: 0.2 });

    await secondI;

    await wait(700);

    // VAGUE
    await Promise.all(
      letters.map((_, i) =>
        trackedAnimate(
          `[data-letter="${i}"]`,
          { y: [0, -10, 3, -5, 0] },
          { duration: 0.46, delay: i * 0.045 }
        )
      )
    );

    runningRef.current = false;
  }

  return (
    <div className={clsx("flex justify-center", className)}>
      <div
        ref={scope}
        onMouseEnter={playAnimation}
        className="inline-block"
      >
        <h1
          className={[
            titleFont.className,
            "inline-flex cursor-pointer tracking-[0.08em]",
            "text-[clamp(3.2rem,8vw,7rem)]",
            "lg:text-[clamp(4rem,7vw,6.2rem)]",
          ].join(" ")}
        >
          {letters.map((l, i) => (
            <span key={i} data-letter={i} className="inline-block">
              {l}
            </span>
          ))}
        </h1>
      </div>
    </div>
  );
}