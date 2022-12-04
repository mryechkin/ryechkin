import { useState } from 'react';
import { StarIcon } from '@heroicons/react/solid';
import { motion, useCycle } from 'framer-motion';

import { useInterval } from 'src/lib/hooks';
import { generateArray } from 'src/lib/utils';

export default function AnimatedPath({ delay = 100 }) {
  const x = generateArray(1000, 1, -15, 15);
  const y = x.map((i) => Math.cos(i * i));
  const [isActive, setIsActive] = useState(null);

  const [xy, cycleXY] = useCycle(
    ...x.map((val, i) => {
      return { x: val * 10, y: y[i] * 20 };
    })
  );

  useInterval(
    () => {
      cycleXY();
    },
    isActive ? delay : null
  );

  return (
    <div className="mx-auto flex h-screen w-full flex-col items-center justify-center overflow-hidden md:max-w-3xl">
      <motion.div
        className="h-12 w-12 p-2 font-bold text-cyan-300"
        initial={false}
        animate={{ ...xy }}
      >
        <StarIcon />
      </motion.div>
      {xy && (
        <div className="mt-12 flex w-full flex-col items-start justify-center p-8 text-2xl">
          <div>
            <strong>X</strong>: <span className="accent mr-4">{xy.x}</span>
          </div>
          <div>
            <strong>Y</strong>: <span className="accent">{xy.y}</span>
          </div>
        </div>
      )}
      <div className="py-8 text-3xl font-medium tracking-wider text-gray-700 dark:text-white">
        y = cos(x<sup>2</sup>)
      </div>
      <button
        type="button"
        onClick={() => {
          setIsActive(!isActive);
        }}
      >
        {isActive ? 'Stop' : 'Animate'}
      </button>
    </div>
  );
}
