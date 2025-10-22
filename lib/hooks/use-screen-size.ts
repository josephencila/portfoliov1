import { useState, useEffect } from 'react';
import { IUseScreenSize } from '@/lib/hooks/_types';

const useScreenSize = (): IUseScreenSize => {
    const [screenSize, setScreenSize] = useState<IUseScreenSize>({
        width: 0,
        height: 0,
    });

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleResize = () => {
                setScreenSize({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
            };

            handleResize();

            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }
    }, []);

    return screenSize;
};

export default useScreenSize