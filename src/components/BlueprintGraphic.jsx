export default function BlueprintGraphic() {
  return (
    <svg
      viewBox="0 0 480 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto max-w-[460px]"
      aria-hidden="true"
    >
      {/* Dot grid background */}
      <defs>
        <pattern id="dots" x="0" y="0" width="26" height="26" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="0.6" fill="#E5E7EB" />
        </pattern>
      </defs>
      <rect width="480" height="420" fill="url(#dots)" rx="12" />

      {/* ── API Gateway ── */}
      <rect x="180" y="32" width="120" height="34" rx="8" stroke="#1E3A8A" strokeWidth="0.8" fill="white" />
      <text x="240" y="53" textAnchor="middle" fill="#1E3A8A" fontSize="10.5" fontFamily="Inter" fontWeight="500">
        API Gateway
      </text>

      {/* Connectors down from gateway */}
      <line x1="210" y1="66" x2="130" y2="120" stroke="#D1D5DB" strokeWidth="0.6" strokeDasharray="4 4" />
      <line x1="240" y1="66" x2="240" y2="120" stroke="#D1D5DB" strokeWidth="0.6" strokeDasharray="4 4" />
      <line x1="270" y1="66" x2="350" y2="120" stroke="#D1D5DB" strokeWidth="0.6" strokeDasharray="4 4" />

      {/* ── Service Layer ── */}
      {/* Auth Service */}
      <rect x="76" y="120" width="108" height="32" rx="8" stroke="#D1D5DB" strokeWidth="0.6" fill="white" />
      <text x="130" y="140" textAnchor="middle" fill="#6B7280" fontSize="10" fontFamily="Inter" fontWeight="400">
        Auth Service
      </text>

      {/* FastAPI Core — accent */}
      <rect x="186" y="120" width="108" height="32" rx="8" stroke="#1E3A8A" strokeWidth="0.8" fill="#F8FAFF" />
      <text x="240" y="140" textAnchor="middle" fill="#1E3A8A" fontSize="10" fontFamily="Inter" fontWeight="500">
        FastAPI Core
      </text>

      {/* Analytics */}
      <rect x="296" y="120" width="108" height="32" rx="8" stroke="#D1D5DB" strokeWidth="0.6" fill="white" />
      <text x="350" y="140" textAnchor="middle" fill="#6B7280" fontSize="10" fontFamily="Inter" fontWeight="400">
        Analytics
      </text>

      {/* Connectors to data layer */}
      <line x1="130" y1="152" x2="130" y2="210" stroke="#E5E7EB" strokeWidth="0.5" />
      <line x1="240" y1="152" x2="240" y2="210" stroke="#D1D5DB" strokeWidth="0.6" strokeDasharray="4 4" />
      <line x1="350" y1="152" x2="350" y2="210" stroke="#E5E7EB" strokeWidth="0.5" />

      {/* ── Data / Processing Layer ── */}
      {/* PostgreSQL */}
      <ellipse cx="130" cy="226" rx="48" ry="14" stroke="#1E3A8A" strokeWidth="0.8" fill="white" />
      <text x="130" y="230" textAnchor="middle" fill="#1E3A8A" fontSize="9" fontFamily="Inter" fontWeight="500">
        PostgreSQL
      </text>

      {/* KPI Engine */}
      <rect x="198" y="212" width="84" height="28" rx="14" stroke="#D1D5DB" strokeWidth="0.6" fill="white" />
      <text x="240" y="230" textAnchor="middle" fill="#6B7280" fontSize="9" fontFamily="Inter" fontWeight="400">
        KPI Engine
      </text>

      {/* Queue */}
      <rect x="306" y="212" width="84" height="28" rx="8" stroke="#D1D5DB" strokeWidth="0.6" fill="white" />
      <text x="348" y="230" textAnchor="middle" fill="#6B7280" fontSize="9" fontFamily="Inter" fontWeight="400">
        Queue
      </text>

      {/* Connector KPI → Root Cause */}
      <line x1="240" y1="240" x2="240" y2="284" stroke="#D1D5DB" strokeWidth="0.6" strokeDasharray="4 4" />

      {/* ── Analysis Layer ── */}
      {/* Root Cause Analysis — accent */}
      <rect x="168" y="284" width="144" height="30" rx="8" stroke="#1E3A8A" strokeWidth="0.8" fill="#F8FAFF" />
      <text x="240" y="303" textAnchor="middle" fill="#1E3A8A" fontSize="10" fontFamily="Inter" fontWeight="500">
        Root Cause Analysis
      </text>

      {/* Connector → Report */}
      <line x1="240" y1="314" x2="240" y2="350" stroke="#D1D5DB" strokeWidth="0.6" strokeDasharray="4 4" />

      {/* Intelligence Report */}
      <rect x="174" y="350" width="132" height="28" rx="8" stroke="#D1D5DB" strokeWidth="0.6" fill="white" />
      <text x="240" y="368" textAnchor="middle" fill="#6B7280" fontSize="9.5" fontFamily="Inter" fontWeight="400">
        Intelligence Report
      </text>

      {/* ── Side decorations ── */}
      {/* Left data endpoint */}
      <line x1="82" y1="226" x2="48" y2="226" stroke="#E5E7EB" strokeWidth="0.5" />
      <circle cx="44" cy="226" r="2.5" fill="#E5E7EB" />

      {/* Right data endpoint */}
      <line x1="390" y1="226" x2="432" y2="226" stroke="#E5E7EB" strokeWidth="0.5" />
      <circle cx="436" cy="226" r="2.5" fill="#E5E7EB" />

      {/* ── Metric cards ── */}
      {/* Left metric */}
      <rect x="32" y="278" width="58" height="44" rx="8" stroke="#E5E7EB" strokeWidth="0.5" fill="white" />
      <text x="61" y="296" textAnchor="middle" fill="#1E3A8A" fontSize="13" fontFamily="Inter" fontWeight="600">
        97%
      </text>
      <text x="61" y="311" textAnchor="middle" fill="#B0B5BD" fontSize="7" fontFamily="Inter">
        Accuracy
      </text>

      {/* Right metric */}
      <rect x="390" y="278" width="58" height="44" rx="8" stroke="#E5E7EB" strokeWidth="0.5" fill="white" />
      <text x="419" y="296" textAnchor="middle" fill="#1E3A8A" fontSize="13" fontFamily="Inter" fontWeight="600">
        42ms
      </text>
      <text x="419" y="311" textAnchor="middle" fill="#B0B5BD" fontSize="7" fontFamily="Inter">
        Response
      </text>

      {/* ── Floating quote badge ── */}
      <rect x="332" y="40" width="126" height="26" rx="13" fill="white" stroke="#E5E7EB" strokeWidth="0.5" />
      <text x="395" y="57" textAnchor="middle" fill="#1E3A8A" fontSize="9" fontFamily="Inter" fontWeight="500" fontStyle="italic">
        Design. Build. Scale.
      </text>
    </svg>
  );
}
