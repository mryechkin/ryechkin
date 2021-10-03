import { useState } from 'react';
import { StarIcon } from '@heroicons/react/solid';
import { motion, useCycle } from 'framer-motion';
import { Button } from 'wtf-design-system';

import { useInterval } from '@/lib/hooks';
import { generateArray } from '@/lib/utils';

export default function Snippets({ delay = 100 }) {
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
    <div className="flex flex-col items-center justify-center mx-auto w-full h-screen overflow-hidden md:max-w-3xl">
      <motion.div
        className="p-2 w-12 h-12 text-cyan-300 font-bold"
        initial={false}
        animate={{ ...xy }}
      >
        <StarIcon />
      </motion.div>
      {xy && (
        <div className="flex flex-col items-start justify-center mt-12 p-8 w-full text-2xl">
          <div>
            <strong>X</strong>: <span className="accent mr-4">{xy.x}</span>
          </div>
          <div>
            <strong>Y</strong>: <span className="accent">{xy.y}</span>
          </div>
        </div>
      )}
      <div className="accent-no-bg py-8 text-3xl font-light tracking-wider">
        y = cos(x<sup>2</sup>)
      </div>
      <Button
        css={{
          marginTop: '$8',
        }}
        onClick={() => {
          setIsActive(!isActive);
        }}
      >
        {isActive ? 'Stop' : 'Animate'}
      </Button>
    </div>
  );
}
