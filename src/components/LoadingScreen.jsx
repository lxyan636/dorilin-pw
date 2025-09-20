import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
    // State to hold the current text being displayed
    const [text, setText] = useState("");
    // The text to display on the loading screen
    const fullText = "Loading...";

    useEffect(() => {
        const timer = setTimeout(() => {
            onComplete();
        }, 2000); // longer so user sees the effect

        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        // Fullscreen overlay with centered text and loading bar
        <div className="fixed inset-0 z-50 bg-[#D4D3B3] text-black-100 flex flex-col items-center justify-center">
            <div className="mb-4 text-4xl">
                {fullText.split("").map((letter, i) => (
                    <span
                        key={i}
                        className="inline-block"
                        style={{
                            animation: `jump 1s ease-in-out ${i * 0.1}s infinite`,
                        }}
                    >
                        {letter}
                    </span>
                ))}
            </div>
            <style>
                {`
          @keyframes jump {0%, 40%, 100% { transform: translateY(0); }
            20% { transform: translateY(-10px); }}`}
            </style>
            <div className="w-[200px] h-[2px] bg-[#8D926F] rounded relative overflow-hidden">
                <div className="w-[40%] h-full bg-white shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
            </div>
        </div>
    );
};