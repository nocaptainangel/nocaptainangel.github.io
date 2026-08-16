"use client";

import { useEffect, useRef } from "react";

export type WalkthroughVideoProps = {
  src: string;
};

export default function WalkthroughVideo(props: WalkthroughVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          void video.play();
        } else {
          video.pause();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  return <video ref={videoRef} src={props.src} muted loop playsInline />;
}
