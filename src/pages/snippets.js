import { useEffect, useState } from 'react';
import { motion, useAnimation, useCycle } from 'framer-motion';

export default function Snippets() {
  const x = [0, 1, 2, 3, 4, 5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5, -4, -3, -2, -1];
  const sinX = x.map((i) => Math.sin(i));
  // const [x, cycleX] = useCycle(...values);
  // const [y, cycleY] = useCycle(...sinX);

  const [xy, cycleXY] = useCycle(
    ...x.map((val, i) => {
      return { x: val * 30, y: sinX[i] * 30 };
    })
  );

  return (
    <div className="flex items-center justify-center h-full min-h-screen">
      <motion.button
        type="button"
        className="px-4 py-2 text-green-900 text-lg font-black bg-green-400 rounded-lg"
        animate={{ ...xy }}
        initial={false}
        onClick={() => {
          setInterval(() => {
            cycleXY();
          }, 100);
        }}
      >
        Click Me
      </motion.button>
    </div>
  );
}
