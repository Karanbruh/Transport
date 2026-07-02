import { useEffect, useRef, useState } from "react";

const VIDEO_SRC = "/assets/FOUNDER%20SPEECH.mp4";

export default function FounderSpeechVideo() {
    const videoRef = useRef(null);
    const [isMuted, setIsMuted] = useState(true);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        video.muted = true;
        video.play().catch(() => {});
    }, []);

    const toggleMute = () => {
        const video = videoRef.current;
        if (!video) return;

        const nextMuted = !isMuted;
        video.muted = nextMuted;
        setIsMuted(nextMuted);

        if (!nextMuted) {
            video.play().catch(() => {});
        }
    };

    return (
        <div className="box-founder-video">
            <video
                ref={videoRef}
                className="img-main"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
            >
                <source src={VIDEO_SRC} type="video/mp4" />
            </video>
            <button
                type="button"
                className={`btn-founder-video-sound${isMuted ? " is-muted" : ""}`}
                onClick={toggleMute}
                aria-label={isMuted ? "Unmute founder speech" : "Mute founder speech"}
            >
                {isMuted ? (
                    <>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5L6 9H3v6h3l5 4V5z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.54 8.46a5 5 0 010 7.07M19.07 4.93a10 10 0 010 14.14" />
                        </svg>
                        <span>Unmute</span>
                    </>
                ) : (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5L6 9H3v6h3l5 4V5z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M23 9l-6 6M17 9l6 6" />
                    </svg>
                )}
            </button>
        </div>
    );
}
