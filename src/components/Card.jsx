import React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function Card({ className, children, delay = 0, ...props }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ duration: 0.5, type: "spring", bounce: 0.4, delay: delay }}
      className={cn(
        "glass-panel rounded-2xl p-6 transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.15)] hover:border-blue-200/50",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
