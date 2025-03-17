
import React, { useRef, useEffect } from 'react';
import { cn } from "@/lib/utils";

interface VideoContainerProps {
  className?: string;
  stream: MediaStream | null;
  muted?: boolean;
}

const VideoContainer = ({ className, stream, muted = false }: VideoContainerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);
  
  return (
    <div className={cn(
      "relative w-full h-full overflow-hidden rounded-lg bg-muted/30",
      className
    )}>
      {stream ? (
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted={muted}
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-muted/40">
          <div className="text-muted-foreground text-sm">No video</div>
        </div>
      )}
    </div>
  );
};

export default VideoContainer;
