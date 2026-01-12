'use client';

import { motion } from 'framer-motion';

interface MenuIconProps {
  isOpen: boolean;
  onClick: () => void;
}

export function MenuIcon({ isOpen, onClick }: MenuIconProps) {
  return (
    <button
      onClick={onClick}
      className="relative z-50 p-2 -mr-2 focus:outline-none"
      aria-label="Toggle menu"
    >
      <svg
        viewBox="0 0 24 24"
        width="24"
        height="24"
        className="text-foreground"
      >
        {/* Top line */}
        <motion.line
          x1="4"
          y1="6"
          x2="20"
          y2="6"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          initial={false}
          animate={{
            rotate: isOpen ? 45 : 0,
            y: isOpen ? 6 : 0,
          }}
          style={{ originX: '50%', originY: '50%' }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        />
        {/* Middle line */}
        <motion.line
          x1="4"
          y1="12"
          x2="20"
          y2="12"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          initial={false}
          animate={{
            opacity: isOpen ? 0 : 1,
            x: isOpen ? -10 : 0,
          }}
          transition={{ duration: 0.2 }}
        />
        {/* Bottom line */}
        <motion.line
          x1="4"
          y1="18"
          x2="20"
          y2="18"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          initial={false}
          animate={{
            rotate: isOpen ? -45 : 0,
            y: isOpen ? -6 : 0,
          }}
          style={{ originX: '50%', originY: '50%' }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        />
      </svg>
    </button>
  );
}
