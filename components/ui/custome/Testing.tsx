'use client';

import { useRef, useEffect, useState, ReactNode } from 'react';

interface TestingProps {
    componentA?: ReactNode;
    componentB?: ReactNode;
}

export default function Testing({ componentA, componentB }: TestingProps) {
    const componentARef = useRef<HTMLDivElement>(null);
    const componentBRef = useRef<HTMLDivElement>(null);
    const [heightB, setHeightB] = useState<number>(0);

    useEffect(() => {
        const observer = new ResizeObserver(() => {
            if (componentARef.current) {
                const heightA = componentARef.current.offsetHeight;
                setHeightB(window.innerHeight - heightA);
            }
        });

        if (componentARef.current) {
            observer.observe(componentARef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div>
            <div ref={componentARef} className="component-a h-150  border">
                {componentA || '/* Component A */'}
            </div>
            <div
                ref={componentBRef}
                style={{ height: `${heightB}px`, overflow: 'auto' }}
                className="component-b border"
            >
                {componentB || '/* Component B */'}
            </div>
        </div>
    );
}