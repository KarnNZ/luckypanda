"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

/**
 * Owner-approved 6-second image-to-video animation, stored locally at /brand/.
 * Initially renders an accessible static poster and only enables video after
 * verifying that the visitor has not requested reduced motion.
 *
 * No audio, external player, tracking, cookie or additional API dependency.
 */
export function HeroPandaAnimation() {
  const [motionAllowed, setMotionAllowed] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setMotionAllowed(!media.matches);
    update();
    if (typeof media.addEventListener === "function") {
      media.addEventListener("change", update);
      return () => media.removeEventListener("change", update);
    }
    media.addListener(update);
    return () => media.removeListener(update);
  }, []);

  return (
    <div
      className="hero-scene hero-scene-motion"
      role="img"
      aria-label="Lucky Panda celebrates with floating red packets against a warm red and golden background."
    >
      {motionAllowed && !videoFailed ? (
        <video
          className="hero-motion-video"
          muted
          autoPlay
          loop
          playsInline
          preload="metadata"
          poster="/brand/lucky-panda-hero-poster.webp"
          aria-hidden="true"
          onError={() => setVideoFailed(true)}
        >
          <source src="/brand/lucky-panda-hero.mp4" type="video/mp4" />
        </video>
      ) : (
        <Image
          className="hero-motion-poster"
          src="/brand/lucky-panda-hero-poster.webp"
          width={512}
          height={512}
          sizes="(max-width: 760px) 90vw, 520px"
          priority
          alt=""
          aria-hidden="true"
        />
      )}
    </div>
  );
}
