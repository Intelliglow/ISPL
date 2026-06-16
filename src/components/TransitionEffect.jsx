import { motion } from 'framer-motion';

const TransitionEffect = ({ children }) => {
  const nbColumns = 20;
  const nbRows = 12;
  
  const transition = {
    duration: 0.8,
    ease: [0.76, 0, 0.24, 1],
  };

  const expand = {
    initial: {
      scale: 1,
      opacity: 1,
      display: "block",
    },
    enter: (i) => ({
      scale: 0,
      opacity: 0,
      transition: {
        ...transition,
        delay: 0.05 * i,
      },
      transitionEnd: { display: "none" }
    })
  };

  return (
    <div className="page-transition-container">
      <div className="transition-overlay-grid">
        {[...Array(nbColumns * nbRows)].map((_, i) => {
          const column = i % nbColumns;
          const row = Math.floor(i / nbColumns);
          
          // Calculate distance from center
          const centerX = (nbColumns - 1) / 2;
          const centerY = (nbRows - 1) / 2;
          const distance = Math.sqrt(
            Math.pow(column - centerX, 2) + Math.pow(row - centerY, 2)
          );
          
          return (
            <motion.div
              key={i}
              custom={distance}
              variants={expand}
              initial="initial"
              animate="enter"
              className="transition-block"
            />
          );
        })}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default TransitionEffect;
