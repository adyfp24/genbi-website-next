import React, { useEffect, useRef, useState, ReactNode } from 'react';
import { LottieRefCurrentProps } from 'lottie-react';

interface AnimationObserverProps {
    children: ReactNode;
    threshold?: number; 
}

const AnimationObserver: React.FC<AnimationObserverProps> = ({ children, threshold = 0.6 }) => {
    const [isInView, setIsInView] = useState(false);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const animationInstanceRef = useRef<LottieRefCurrentProps | null>(null);  

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    setIsInView(entry.isIntersecting);
                });
            },
            { threshold }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, [threshold]);

    useEffect(() => {
        if (animationInstanceRef.current) {
            if (isInView) {
                animationInstanceRef.current.play(); 
            } else {
                animationInstanceRef.current.stop(); 
            }
        }
    }, [isInView]);

    const clonedChild = React.cloneElement(children as React.ReactElement<any>, { 
        lottieRef: animationInstanceRef 
    });

    return <div ref={containerRef}>{clonedChild}</div>;
};

export default AnimationObserver;
