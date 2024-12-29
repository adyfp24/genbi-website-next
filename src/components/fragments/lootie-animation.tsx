// lottie-animation.tsx
import dynamic from 'next/dynamic';
import { LottieRef } from 'lottie-react';

interface LootieAnimationProps {
   animationData: any;
   width?: string;
   height?: string; 
   play?: boolean;
   loop?: boolean;
   lottieRef?: LottieRef;
}

const DynamicLottie = dynamic(() => import('lottie-react'), {
   ssr: false
});

const LootieAnimation: React.FC<LootieAnimationProps> = ({
   animationData,
   width = '100%',
   height = '100%',
   play = true,
   loop = true, 
   lottieRef
}) => {
   return (
       <div style={{ width, height }}>
           <DynamicLottie
               animationData={animationData}
               loop={loop}
               autoplay={play}
               lottieRef={lottieRef}
           />
       </div>
   );
};

export default LootieAnimation;