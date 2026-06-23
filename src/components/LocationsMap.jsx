export default function LocationsMap({ stateCode }) {
  const paths = {
    VIC: 'M52 102 L82 74 L128 79 L157 108 L143 146 L90 154 L55 134 Z',
    SA: 'M72 40 L135 46 L153 132 L119 163 L69 146 L48 88 Z',
    QLD: 'M77 24 L131 45 L157 104 L135 160 L83 141 L47 84 Z',
  }
  const dots = {
    VIC: [[92, 133], [113, 104], [73, 120]],
    SA: [[97, 135], [111, 112], [83, 97]],
    QLD: [[93, 116], [106, 138], [121, 78]],
  }
  return (
    <svg viewBox="0 0 200 190" role="img" aria-label={`${stateCode} service map`} className="mx-auto h-52 w-full max-w-xs">
      <path d={paths[stateCode]} fill="rgba(176,141,122,0.06)" stroke="#B08D7A" strokeWidth="3" />
      {dots[stateCode].map(([cx, cy]) => (
        <g key={`${cx}-${cy}`}>
          <circle cx={cx} cy={cy} r="8" fill="rgba(176,141,122,0.18)">
            <animate attributeName="r" values="6;11;6" dur="1.8s" repeatCount="indefinite" />
          </circle>
          <circle cx={cx} cy={cy} r="3" fill="#C9A882" />
        </g>
      ))}
    </svg>
  )
}
