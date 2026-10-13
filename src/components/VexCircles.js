// Seeded so server and client render identical geometry
function parkMiller(seed) {
  let state = seed;
  return () => {
    state = (state * 16807) % 2147483647;
    return (state - 1) / 2147483646;
  };
}

const round = (n) => Math.round(n * 100) / 100;

const vars = (duration, delay, extra = {}) => ({
  '--vex-duration': `${duration}s`,
  '--vex-delay': `-${delay}s`,
  ...extra,
});

function generate(seed) {
  const rand = parkMiller(seed);
  const between = (min, max) => round(min + rand() * (max - min));

  const clusters = Array.from({ length: 5 }, (_, i) => {
    const cx = between(30, 300);
    const cy = round(90 + i * 175 + between(-40, 40));
    const base = between(18, 46);
    const rings = Array.from({ length: 2 + Math.floor(rand() * 3) }, (__, j) => {
      const r = round(base * (1 + j * between(0.45, 0.8)));
      const kind = Math.floor(rand() * 4);
      const circumference = 2 * Math.PI * r;
      return {
        r,
        rotate: between(0, 360),
        dash:
          kind === 1
            ? '1 6'
            : kind === 2
              ? `${round(circumference * between(0.25, 0.7))} ${round(circumference)}`
              : undefined,
        width: kind === 3 ? 5 : 1,
        tick: kind === 3,
        breathe: vars(between(6, 11), between(0, 11)),
        // Only broken rings spin, since a solid circle wouldn't show it
        spin:
          kind > 0
            ? {
                ...vars(between(50, 120), between(0, 120)),
                animationDirection: rand() > 0.5 ? 'normal' : 'reverse',
              }
            : null,
      };
    });
    const drift = vars(between(14, 24), between(0, 24), {
      '--vex-dx': `${between(-10, 10)}px`,
      '--vex-dy': `${between(-12, 12)}px`,
    });
    return { cx, cy, rings, core: rand() > 0.4, drift };
  });

  // Circuit-like links: horizontal run, then a 45° segment to the next cluster
  const links = clusters.slice(1).map((to, i) => {
    const from = clusters[i];
    const dy = to.cy - from.cy;
    const midX =
      to.cx -
      Math.sign(to.cx - from.cx || 1) * Math.min(Math.abs(dy), Math.abs(to.cx - from.cx));
    return `M${from.cx} ${from.cy} H${round(midX)} L${to.cx} ${to.cy}`;
  });

  const dots = Array.from({ length: 24 }, () => ({
    cx: between(8, 380),
    cy: between(10, 890),
    r: between(1, 2.6),
    pulse: vars(between(4, 9), between(0, 9)),
  }));

  return { clusters, links, dots };
}

const { clusters, dots, links } = generate(424242);

export default function VexCircles({ className }) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      className={className}
      viewBox="0 0 400 900"
      preserveAspectRatio="xMinYMid slice"
      fill="none"
      stroke="currentColor"
    >
      <circle
        cx="-120"
        cy="450"
        r="380"
        strokeWidth="1"
        className="vex-breathe"
        style={vars(16, 4)}
      />
      <circle
        cx="-120"
        cy="450"
        r="330"
        strokeWidth="1"
        strokeDasharray="2 10"
        className="vex-spin"
        style={vars(240, 0)}
      />
      {links.map((d) => (
        <path key={d} d={d} strokeWidth="1" strokeLinejoin="round" />
      ))}
      {clusters.map(({ core, cx, cy, drift, rings }) => (
        <g key={`${cx}-${cy}`} className="vex-drift" style={drift}>
          {rings.map(({ breathe, dash, r, rotate, spin, tick, width }) => (
            <g key={r} transform={`rotate(${rotate} ${cx} ${cy})`}>
              <g className={spin ? 'vex-spin' : undefined} style={spin ?? undefined}>
                <circle
                  cx={cx}
                  cy={cy}
                  r={r}
                  strokeWidth={width}
                  strokeDasharray={tick ? '1 7' : dash}
                  strokeLinecap={dash && !tick ? 'round' : 'butt'}
                  className="vex-breathe"
                  style={breathe}
                />
              </g>
            </g>
          ))}
          {core && <circle cx={cx} cy={cy} r="3" fill="currentColor" stroke="none" />}
        </g>
      ))}
      {dots.map(({ cx, cy, pulse, r }) => (
        <circle
          key={`${cx}-${cy}`}
          cx={cx}
          cy={cy}
          r={r}
          fill="currentColor"
          stroke="none"
          className="vex-pulse"
          style={pulse}
        />
      ))}
    </svg>
  );
}
