type Props = {
  className?: string;
  width?: number | string;
  height?: number | string;
};

// Simple video-based logo animation from /public/animation
// Works without client JS; autoplay requires muted+playsInline
export default function VideoLogo({ className, width = 640, height = "auto" }: Props) {
  return (
    <video
      className={className}
      src="/animation/Animation_Logo.mp4"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-label="Logo animé Doctolib (vidéo)"
      style={{ width, height, maxWidth: "100%" }}
    />
  );
}


