export default function BlueprintGraphic() {
  return (
    <svg
      viewBox="0 0 520 460"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto max-w-[480px] select-none"
      aria-hidden="true"
    >
      <defs>
        {/* Subtle architectural dot grid */}
        <pattern id="arch-grid-dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="0.65" fill="#CBD5E1" opacity="0.65" />
        </pattern>

        {/* Linear isometric hatch pattern for technical shading */}
        <pattern id="iso-hatch" width="8" height="8" patternTransform="rotate(30 0 0)" patternUnits="userSpaceOnUse">
          <line x1="0" y1="0" x2="0" y2="8" stroke="#94A3B8" strokeWidth="0.5" opacity="0.3" />
        </pattern>
      </defs>

      {/* ── Background Card with Border and Corner Registration Marks ── */}
      <rect x="8" y="8" width="504" height="444" rx="16" fill="#FAFCFF" stroke="#E2E8F0" strokeWidth="1" />
      <rect x="8" y="8" width="504" height="444" rx="16" fill="url(#arch-grid-dots)" />

      {/* Precision corner crop/registration marks */}
      <path d="M 20 30 L 20 20 L 30 20" stroke="#94A3B8" strokeWidth="1" fill="none" />
      <path d="M 500 30 L 500 20 L 490 20" stroke="#94A3B8" strokeWidth="1" fill="none" />
      <path d="M 20 430 L 20 440 L 30 440" stroke="#94A3B8" strokeWidth="1" fill="none" />
      <path d="M 500 430 L 500 440 L 490 440" stroke="#94A3B8" strokeWidth="1" fill="none" />

      {/* Top Ruler Measurement Ticks */}
      <line x1="160" y1="18" x2="360" y2="18" stroke="#CBD5E1" strokeWidth="0.75" />
      <line x1="160" y1="14" x2="160" y2="22" stroke="#94A3B8" strokeWidth="0.75" />
      <line x1="210" y1="16" x2="210" y2="20" stroke="#CBD5E1" strokeWidth="0.5" />
      <line x1="260" y1="14" x2="260" y2="22" stroke="#475569" strokeWidth="0.75" />
      <line x1="310" y1="16" x2="310" y2="20" stroke="#CBD5E1" strokeWidth="0.5" />
      <line x1="360" y1="14" x2="360" y2="22" stroke="#94A3B8" strokeWidth="0.75" />
      <text x="260" y="29" textAnchor="middle" fill="#94A3B8" fontSize="6.5" fontFamily="monospace" letterSpacing="1">
        200.00 mm
      </text>

      {/* ── Technical Blueprint Header / Schema Stamp ── */}
      <g opacity="0.85">
        <text x="32" y="38" fill="#334155" fontSize="8" fontFamily="monospace" fontWeight="600" letterSpacing="1.5">
          FIG. 01 — SYSTEM ARCHITECTURE
        </text>
        <text x="32" y="48" fill="#94A3B8" fontSize="6.5" fontFamily="monospace" letterSpacing="0.8">
          SCALE: 1:1 · STRUCTURAL COMPOSITION
        </text>
        <text x="488" y="38" textAnchor="end" fill="#94A3B8" fontSize="7" fontFamily="monospace" letterSpacing="1">
          AXIS [X · Y · Z]
        </text>
      </g>

      {/* ── Background Geometric & Compass Construction Lines ── */}
      <g stroke="#E2E8F0" strokeWidth="0.75">
        {/* Infinite axis guides */}
        <line x1="260" y1="45" x2="260" y2="415" strokeDasharray="3 3" stroke="#CBD5E1" />
        <line x1="35" y1="230" x2="485" y2="230" strokeDasharray="3 3" stroke="#CBD5E1" />

        {/* Axonometric projection rays (30-degree construction lines) */}
        <line x1="85" y1="130" x2="435" y2="330" strokeDasharray="4 4" stroke="#E2E8F0" />
        <line x1="85" y1="330" x2="435" y2="130" strokeDasharray="4 4" stroke="#E2E8F0" />

        {/* Primary Radial Construction Circles (Compass Drafting Rings) */}
        <circle cx="260" cy="230" r="160" stroke="#E2E8F0" strokeWidth="0.75" />
        <circle cx="260" cy="230" r="120" stroke="#CBD5E1" strokeWidth="0.75" strokeDasharray="4 4" />
        <circle cx="260" cy="230" r="60" stroke="#E2E8F0" strokeWidth="0.75" />
      </g>

      {/* Radial Angle Compass & Degree Ticks */}
      <g stroke="#94A3B8" strokeWidth="0.75">
        {/* Angle arc for 45 degrees */}
        <path d="M 330 230 A 70 70 0 0 0 310 180" fill="none" stroke="#475569" strokeWidth="0.85" strokeDasharray="2 2" />
        <text x="332" y="195" fill="#475569" fontSize="7" fontFamily="monospace" fontWeight="500">
          θ = 45.00°
        </text>
        {/* Cardinal tick marks on the 160r circle */}
        <line x1="260" y1="67" x2="260" y2="73" stroke="#64748B" />
        <line x1="260" y1="387" x2="260" y2="393" stroke="#64748B" />
        <line x1="97" y1="230" x2="103" y2="230" stroke="#64748B" />
        <line x1="417" y1="230" x2="423" y2="230" stroke="#64748B" />
      </g>

      {/* ── Main Architectural Geometry: Isometric Wireframe System ── */}

      {/* 1. Base Isometric Foundation Plane */}
      <polygon
        points="260,375 390,300 260,225 130,300"
        fill="#FFFFFF"
        stroke="#CBD5E1"
        strokeWidth="1"
        opacity="0.8"
      />
      <polygon
        points="260,375 390,300 260,225 130,300"
        fill="url(#iso-hatch)"
      />

      {/* 2. Stepped Structural Wireframe (Bottom Left Modular Base) */}
      <polygon
        points="175,275 225,246 225,290 175,319"
        fill="#F8FAFC"
        stroke="#94A3B8"
        strokeWidth="0.9"
      />
      <polygon
        points="225,246 275,275 275,319 225,290"
        fill="#F1F5F9"
        stroke="#64748B"
        strokeWidth="0.9"
      />
      <polygon
        points="175,275 225,246 275,275 225,304"
        fill="#FFFFFF"
        stroke="#475569"
        strokeWidth="1"
      />

      {/* 3. Central Core Block — Primary Axonometric Form */}
      {/* Hidden wireframe construction lines inside cube */}
      <line x1="260" y1="210" x2="260" y2="130" stroke="#94A3B8" strokeWidth="0.75" strokeDasharray="3 3" />
      <line x1="190" y1="170" x2="260" y2="130" stroke="#94A3B8" strokeWidth="0.75" strokeDasharray="3 3" />
      <line x1="330" y1="170" x2="260" y2="130" stroke="#94A3B8" strokeWidth="0.75" strokeDasharray="3 3" />

      {/* Left Face */}
      <polygon
        points="190,170 260,210 260,285 190,245"
        fill="#F8FAFC"
        stroke="#334155"
        strokeWidth="1.2"
      />
      {/* Right Face */}
      <polygon
        points="260,210 330,170 330,245 260,285"
        fill="#F1F5F9"
        stroke="#1E293B"
        strokeWidth="1.2"
      />
      {/* Top Face */}
      <polygon
        points="260,135 330,170 260,210 190,170"
        fill="#FFFFFF"
        stroke="#0F172A"
        strokeWidth="1.3"
      />

      {/* Precision center cross on top face */}
      <line x1="225" y1="152.5" x2="295" y2="190" stroke="#94A3B8" strokeWidth="0.7" strokeDasharray="2 2" />
      <line x1="295" y1="152.5" x2="225" y2="190" stroke="#94A3B8" strokeWidth="0.7" strokeDasharray="2 2" />
      <circle cx="260" cy="172.5" r="2" fill="#0F172A" />

      {/* 4. Floating Ascending Planar Layer (Design Exploration Plane) */}
      <g>
        {/* Vertical projection rays from core */}
        <line x1="190" y1="170" x2="190" y2="115" stroke="#64748B" strokeWidth="0.7" strokeDasharray="2 2" />
        <line x1="330" y1="170" x2="330" y2="115" stroke="#64748B" strokeWidth="0.7" strokeDasharray="2 2" />
        <line x1="260" y1="135" x2="260" y2="80" stroke="#64748B" strokeWidth="0.7" strokeDasharray="2 2" />
        <line x1="260" y1="210" x2="260" y2="155" stroke="#64748B" strokeWidth="0.7" strokeDasharray="2 2" />

        {/* Elevated Diamond/Polygon Plane */}
        <polygon
          points="260,80 330,115 260,155 190,115"
          fill="#FFFFFF"
          fillOpacity="0.92"
          stroke="#0F172A"
          strokeWidth="1.1"
        />

        {/* Inscribed concentric curve inside floating plane */}
        <path
          d="M 225 135 C 240 105, 280 105, 295 135"
          fill="none"
          stroke="#3B82F6"
          strokeWidth="0.9"
          strokeDasharray="2 2"
        />
        <circle cx="260" cy="117.5" r="2.5" fill="#3B82F6" />
      </g>

      {/* ── Technical Dimension Leaders & Measurements ── */}
      {/* Right side vertical dimension bar */}
      <g stroke="#64748B" strokeWidth="0.75">
        <line x1="365" y1="135" x2="375" y2="135" />
        <line x1="365" y1="285" x2="375" y2="285" />
        <line x1="370" y1="135" x2="370" y2="285" />
        {/* Dimension ticks */}
        <line x1="367" y1="138" x2="373" y2="132" strokeWidth="1" stroke="#334155" />
        <line x1="367" y1="288" x2="373" y2="282" strokeWidth="1" stroke="#334155" />
        <text
          x="382"
          y="214"
          fill="#475569"
          fontSize="7"
          fontFamily="monospace"
          fontWeight="500"
          transform="rotate(90 382 214)"
          textAnchor="middle"
          letterSpacing="1"
        >
          H: 150.00
        </text>
      </g>

      {/* Radial Diameter Callout with Leader Line */}
      <g>
        <line x1="175" y1="117" x2="115" y2="85" stroke="#64748B" strokeWidth="0.75" />
        <line x1="115" y1="85" x2="70" y2="85" stroke="#64748B" strokeWidth="0.75" />
        <circle cx="175" cy="117" r="1.5" fill="#334155" />
        <text x="70" y="80" fill="#475569" fontSize="6.5" fontFamily="monospace" fontWeight="500">
          Ø 240.0 [PRIMARY ARC]
        </text>
      </g>

      {/* ── Subtly Integrated Concept Annotations: DESIGN · BUILD · LEARN · SCALE ── */}

      {/* 1. DESIGN — Top Left Architectural Node */}
      <g transform="translate(42, 130)">
        <circle cx="0" cy="0" r="11" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="0.75" />
        <line x1="-5" y1="0" x2="5" y2="0" stroke="#64748B" strokeWidth="0.75" />
        <line x1="0" y1="-5" x2="0" y2="5" stroke="#64748B" strokeWidth="0.75" />
        <text x="18" y="-3" fill="#0F172A" fontSize="9" fontFamily="monospace" fontWeight="600" letterSpacing="1.2">
          DESIGN
        </text>
        <text x="18" y="7" fill="#94A3B8" fontSize="6.5" fontFamily="monospace" letterSpacing="0.5">
          01 // ARCHITECTURE &amp; FORM
        </text>
      </g>

      {/* 2. BUILD — Top Right Construction Node */}
      <g transform="translate(375, 105)">
        <circle cx="0" cy="0" r="11" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="0.75" />
        <rect x="-4" y="-4" width="8" height="8" fill="none" stroke="#64748B" strokeWidth="0.75" />
        <text x="18" y="-3" fill="#0F172A" fontSize="9" fontFamily="monospace" fontWeight="600" letterSpacing="1.2">
          BUILD
        </text>
        <text x="18" y="7" fill="#94A3B8" fontSize="6.5" fontFamily="monospace" letterSpacing="0.5">
          02 // MODULAR SYNTHESIS
        </text>
      </g>

      {/* 3. SCALE — Bottom Right Vector Node */}
      <g transform="translate(365, 345)">
        <circle cx="0" cy="0" r="11" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="0.75" />
        <path d="M -4 2 L 0 -3 L 4 2" fill="none" stroke="#64748B" strokeWidth="0.75" />
        <text x="18" y="-3" fill="#0F172A" fontSize="9" fontFamily="monospace" fontWeight="600" letterSpacing="1.2">
          SCALE
        </text>
        <text x="18" y="7" fill="#94A3B8" fontSize="6.5" fontFamily="monospace" letterSpacing="0.5">
          03 // SYSTEM EQUILIBRIUM
        </text>
      </g>

      {/* 4. LEARN — Bottom Left Iteration Node */}
      <g transform="translate(65, 340)">
        <circle cx="0" cy="0" r="11" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="0.75" />
        <path d="M -3.5 0 A 3.5 3.5 0 1 1 3 2" fill="none" stroke="#64748B" strokeWidth="0.75" />
        <text x="18" y="-3" fill="#0F172A" fontSize="9" fontFamily="monospace" fontWeight="600" letterSpacing="1.2">
          LEARN
        </text>
        <text x="18" y="7" fill="#94A3B8" fontSize="6.5" fontFamily="monospace" letterSpacing="0.5">
          04 // CONTINUOUS ITERATION
        </text>
      </g>

      {/* ── Technical Calibration & Scale Bar at Bottom ── */}
      <g transform="translate(32, 412)" opacity="0.8">
        <line x1="0" y1="0" x2="80" y2="0" stroke="#475569" strokeWidth="1" />
        <line x1="0" y1="-3" x2="0" y2="3" stroke="#475569" strokeWidth="1" />
        <line x1="20" y1="-2" x2="20" y2="2" stroke="#94A3B8" strokeWidth="0.75" />
        <line x1="40" y1="-2" x2="40" y2="2" stroke="#94A3B8" strokeWidth="0.75" />
        <line x1="60" y1="-2" x2="60" y2="2" stroke="#94A3B8" strokeWidth="0.75" />
        <line x1="80" y1="-3" x2="80" y2="3" stroke="#475569" strokeWidth="1" />
        <text x="0" y="9" fill="#94A3B8" fontSize="6" fontFamily="monospace">0</text>
        <text x="36" y="9" fill="#94A3B8" fontSize="6" fontFamily="monospace">50</text>
        <text x="72" y="9" fill="#94A3B8" fontSize="6" fontFamily="monospace">100mm</text>
      </g>

      {/* Technical Revision / Spec Stamp Bottom Right */}
      <g transform="translate(488, 420)" opacity="0.75">
        <text x="0" y="0" textAnchor="end" fill="#64748B" fontSize="6.5" fontFamily="monospace" letterSpacing="1">
          SPEC: SE-SYSTEMS-V4.2 // 2026
        </text>
      </g>
    </svg>
  );
}
