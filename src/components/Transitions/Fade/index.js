import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const Fade = ({ children, isVisible, delay = 0 }) => {
    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: delay * 0.3, duration: 0.5 }}>
                    {children}
                </motion.div>
            )}

        </AnimatePresence>
    );
};

export default Fade;
