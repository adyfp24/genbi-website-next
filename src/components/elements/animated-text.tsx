import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className }) => {
  const words = text.split(" ");

  // Variants untuk animasi partikel debu
  const dustVariants = {
    initial: { 
      opacity: 0,
      scale: 0.5,
      x: -5,
    },
    animate: { 
      opacity: [0, 0.8, 0],
      scale: [0.5, 1, 0],
      x: [-5, 5, 10],
      y: [0, -3, 0],
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <h1 className={className}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-2 relative overflow-visible"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ 
            duration: 0.4,
            delay: index * 0.05, // Percepatan delay antar kata
            ease: "easeInOut",
          }}
        >
          {/* Partikel debu */}
          {[...Array(2)].map((_, dustIndex) => (
            <motion.span
              key={`dust-${dustIndex}`}
              className="absolute inset-0 pointer-events-none"
              variants={dustVariants}
              initial="initial"
              animate="animate"
              transition={{
                duration: 0.5,
                delay: index * 0.05 + dustIndex * 0.03, // Percepatan delay debu
                ease: "easeInOut",
              }}
            >
              <span
                className="absolute w-1 h-1 bg-white/30 rounded-full blur-[1px]"
                style={{
                  left: `${dustIndex * 30}%`,
                  top: `${(dustIndex % 2) * 50}%`,
                }}
              />
            </motion.span>
          ))}

          {word}
          <motion.span
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 1.5,
              delay: index * 0.05 + 0.1, // Percepatan gradient
              ease: "easeInOut",
            }}
            style={{
              width: '50%',
              maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
            }}
          />
        </motion.span>
      ))}
    </h1>
  );
};

export default AnimatedText;
