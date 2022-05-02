import { useEffect, useState } from 'react';

export default function useConfetti() {
  const [confetti, setConfetti] = useState(false);

  useEffect(() => {
    if (confetti) setConfetti(false);
  }, [confetti]);

  return [confetti, setConfetti];
}
