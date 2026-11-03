export function PandaMascot({ small = false }: { small?: boolean }) {
  return (
    <svg className={small ? "panda-svg small" : "panda-svg"} viewBox="0 0 360 380" role="img" aria-label="Smiling Lucky Panda mascot holding a red packet" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="panda-white" cx="42%" cy="24%" r="80%">
          <stop stopColor="#fffdf2" />
          <stop offset="1" stopColor="#d9d3be" />
        </radialGradient>
        <linearGradient id="panda-red" x1="0" x2="1" y1="0" y2="1">
          <stop stopColor="#f2534b" />
          <stop offset="1" stopColor="#a61629" />
        </linearGradient>
      </defs>
      <ellipse cx="179" cy="353" rx="117" ry="19" fill="#000" opacity=".16"/>
      <ellipse cx="114" cy="105" rx="38" ry="45" fill="#222a2a" transform="rotate(-22 114 105)"/>
      <ellipse cx="243" cy="105" rx="38" ry="45" fill="#222a2a" transform="rotate(22 243 105)"/>
      <ellipse cx="180" cy="280" rx="96" ry="93" fill="#252b2c" />
      <ellipse cx="180" cy="289" rx="69" ry="72" fill="url(#panda-white)"/>
      <ellipse cx="180" cy="155" rx="118" ry="108" fill="url(#panda-white)" />
      <ellipse cx="123" cy="152" rx="31" ry="43" fill="#2c3333" transform="rotate(18 123 152)"/>
      <ellipse cx="237" cy="152" rx="31" ry="43" fill="#2c3333" transform="rotate(-18 237 152)"/>
      <ellipse cx="129" cy="151" rx="8" ry="11" fill="#fff"/>
      <ellipse cx="231" cy="151" rx="8" ry="11" fill="#fff"/>
      <circle cx="131" cy="147" r="4" fill="#182122"/>
      <circle cx="229" cy="147" r="4" fill="#182122"/>
      <ellipse cx="180" cy="193" rx="20" ry="14" fill="#2c3333" />
      <path d="M180 205 Q165 227 150 208 M180 205 Q195 227 210 208" stroke="#2c3333" strokeWidth="6" fill="none" strokeLinecap="round"/>
      <ellipse cx="89" cy="194" rx="22" ry="10" fill="#f8a7a1" opacity=".64"/>
      <ellipse cx="268" cy="194" rx="22" ry="10" fill="#f8a7a1" opacity=".64"/>
      <ellipse cx="100" cy="261" rx="30" ry="49" fill="#252b2c" transform="rotate(36 100 261)"/>
      <ellipse cx="258" cy="262" rx="30" ry="49" fill="#252b2c" transform="rotate(-36 258 262)"/>
      <rect x="125" y="237" width="110" height="92" rx="12" fill="url(#panda-red)" stroke="#fac45e" strokeWidth="4"/>
      <path d="M127 252 L180 294 L233 252" fill="none" stroke="#f5ad54" strokeWidth="4"/>
      <circle cx="180" cy="289" r="20" fill="#f6bd58"/>
      <text x="180" y="299" fontSize="24" textAnchor="middle" fill="#7e261c">福</text>
      <ellipse cx="122" cy="345" rx="37" ry="18" fill="#252b2c" transform="rotate(-8 122 345)"/>
      <ellipse cx="237" cy="345" rx="37" ry="18" fill="#252b2c" transform="rotate(8 237 345)"/>
      <path d="M282 114 l7 -23 8 23 23 8 -23 8 -8 22 -7 -22 -23 -8z" fill="#f7c268"/>
      <circle cx="70" cy="82" r="5" fill="#f7c268"/>
    </svg>
  );
}
