export default function BlueprintGraphic() {
  return (
    <svg
      viewBox="0 0 480 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto max-w-md"
      aria-hidden="true"
    >
      {/* Grid dots background */}
      <defs>
        <pattern id="dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="0.8" fill="#E5E7EB" />
        </pattern>
      </defs>
      <rect width="480" height="400" fill="url(#dots)" rx="12" />

      {/* API Gateway Node */}
      <rect x="180" y="28" width="120" height="36" rx="6" stroke="#1E3A8A" strokeWidth="1.2" fill="white" />
      <text x="240" y="51" textAnchor="middle" fill="#1E3A8A" fontSize="11" fontFamily="Inter" fontWeight="500">
        API Gateway
      </text>

      {/* Arrows down from gateway */}
      <line x1="210" y1="64" x2="130" y2="110" stroke="#D1D5DB" strokeWidth="1" strokeDasharray="4 3" />
      <line x1="240" y1="64" x2="240" y2="110" stroke="#D1D5DB" strokeWidth="1" strokeDasharray="4 3" />
      <line x1="270" y1="64" x2="350" y2="110" stroke="#D1D5DB" strokeWidth="1" strokeDasharray="4 3" />

      {/* Service Node 1 — Auth */}
      <rect x="80" y="110" width="100" height="34" rx="6" stroke="#6B7280" strokeWidth="1" fill="white" />
      <text x="130" y="131" textAnchor="middle" fill="#374151" fontSize="10" fontFamily="Inter" fontWeight="400">
        Auth Service
      </text>

      {/* Service Node 2 — FastAPI */}
      <rect x="190" y="110" width="100" height="34" rx="6" stroke="#1E3A8A" strokeWidth="1.2" fill="#F0F4FF" />
      <text x="240" y="131" textAnchor="middle" fill="#1E3A8A" fontSize="10" fontFamily="Inter" fontWeight="500">
        FastAPI Core
      </text>

      {/* Service Node 3 — Analytics */}
      <rect x="300" y="110" width="100" height="34" rx="6" stroke="#6B7280" strokeWidth="1" fill="white" />
      <text x="350" y="131" textAnchor="middle" fill="#374151" fontSize="10" fontFamily="Inter" fontWeight="400">
        Analytics
      </text>

      {/* Connector lines to data layer */}
      <line x1="130" y1="144" x2="130" y2="195" stroke="#E5E7EB" strokeWidth="1" />
      <line x1="240" y1="144" x2="240" y2="195" stroke="#D1D5DB" strokeWidth="1" strokeDasharray="4 3" />
      <line x1="350" y1="144" x2="350" y2="195" stroke="#E5E7EB" strokeWidth="1" />

      {/* Database node */}
      <ellipse cx="130" cy="210" rx="46" ry="14" stroke="#1E3A8A" strokeWidth="1" fill="white" />
      <text x="130" y="214" textAnchor="middle" fill="#1E3A8A" fontSize="9" fontFamily="Inter" fontWeight="500">
        PostgreSQL
      </text>

      {/* Processing node */}
      <rect x="200" y="196" width="80" height="28" rx="14" stroke="#6B7280" strokeWidth="1" fill="white" />
      <text x="240" y="214" textAnchor="middle" fill="#374151" fontSize="9" fontFamily="Inter" fontWeight="400">
        KPI Engine
      </text>

      {/* Cache / Queue node */}
      <rect x="310" y="196" width="80" height="28" rx="6" stroke="#6B7280" strokeWidth="1" fill="white" />
      <text x="350" y="214" textAnchor="middle" fill="#374151" fontSize="9" fontFamily="Inter" fontWeight="400">
        Queue
      </text>

      {/* Arrow from KPI Engine down to Root Cause */}
      <line x1="240" y1="224" x2="240" y2="264" stroke="#D1D5DB" strokeWidth="1" strokeDasharray="4 3" />

      {/* Root Cause Analysis */}
      <rect x="170" y="264" width="140" height="32" rx="6" stroke="#1E3A8A" strokeWidth="1.2" fill="#F0F4FF" />
      <text x="240" y="284" textAnchor="middle" fill="#1E3A8A" fontSize="10" fontFamily="Inter" fontWeight="500">
        Root Cause Analysis
      </text>

      {/* Arrow down to report */}
      <line x1="240" y1="296" x2="240" y2="328" stroke="#D1D5DB" strokeWidth="1" strokeDasharray="4 3" />

      {/* Executive Report node */}
      <rect x="175" y="328" width="130" height="30" rx="6" stroke="#6B7280" strokeWidth="1" fill="white" />
      <text x="240" y="347" textAnchor="middle" fill="#374151" fontSize="9.5" fontFamily="Inter" fontWeight="400">
        Intelligence Report
      </text>

      {/* Small data flow arrows on the sides */}
      <line x1="84" y1="210" x2="48" y2="210" stroke="#E5E7EB" strokeWidth="1" />
      <circle cx="44" cy="210" r="3" fill="#E5E7EB" />

      <line x1="390" y1="210" x2="430" y2="210" stroke="#E5E7EB" strokeWidth="1" />
      <circle cx="434" cy="210" r="3" fill="#E5E7EB" />

      {/* Small metric indicators */}
      <rect x="36" y="260" width="56" height="44" rx="6" stroke="#E5E7EB" strokeWidth="1" fill="white" />
      <text x="64" y="278" textAnchor="middle" fill="#1E3A8A" fontSize="13" fontFamily="Inter" fontWeight="600">
        97%
      </text>
      <text x="64" y="293" textAnchor="middle" fill="#9CA3AF" fontSize="7.5" fontFamily="Inter">
        Accuracy
      </text>

      <rect x="388" y="260" width="56" height="44" rx="6" stroke="#E5E7EB" strokeWidth="1" fill="white" />
      <text x="416" y="278" textAnchor="middle" fill="#1E3A8A" fontSize="13" fontFamily="Inter" fontWeight="600">
        42ms
      </text>
      <text x="416" y="293" textAnchor="middle" fill="#9CA3AF" fontSize="7.5" fontFamily="Inter">
        Response
      </text>

      {/* Floating quote badge */}
      <rect x="330" y="38" width="130" height="28" rx="14" fill="white" stroke="#E5E7EB" strokeWidth="1" />
      <text x="395" y="56" textAnchor="middle" fill="#1E3A8A" fontSize="9.5" fontFamily="Inter" fontWeight="500" fontStyle="italic">
        Design. Build. Scale.
      </text>
    </svg>
  );
}
