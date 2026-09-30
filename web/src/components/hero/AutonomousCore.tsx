'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { SOLUTIONS_LIST } from '@/shared';

interface NodeCoord {
  slug: string;
  title: string;
  layer: string;
  x: number;
  y: number;
}

export function AutonomousCore() {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);

  // 9 nodes distributed along an outer elliptical orbit (radius rx: 270, ry: 210) centered at (350, 300)
  const cx = 350;
  const cy = 300;
  const rx = 270;
  const ry = 210;

  const nodes: NodeCoord[] = SOLUTIONS_LIST.map((sol, index) => {
    const angle = (index * (2 * Math.PI)) / SOLUTIONS_LIST.length - Math.PI / 2;
    const x = Math.round(cx + rx * Math.cos(angle));
    const y = Math.round(cy + ry * Math.sin(angle));
    return {
      slug: sol.slug,
      title: sol.title,
      layer: sol.layer,
      x,
      y,
    };
  });

  const activeNode = nodes.find((n) => n.slug === activeSlug);

  return (
    <div className="relative w-full max-w-[720px] mx-auto aspect-square flex items-center justify-center select-none">
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-radial-glow pointer-events-none rounded-full blur-3xl opacity-70" />

      {/* SVG Vector Autonomous Core */}
      <svg
        viewBox="0 0 700 600"
        className="w-full h-full relative z-10 overflow-visible"
        aria-label="JSJ Autonomous Core Convergence Diagram - Interactive Visualization"
        role="region"
      >
        <defs>
          {/* Core Radial Gradients */}
          <radialGradient id="corePulseGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#16C7E8" stopOpacity="0.8" />
            <stop offset="45%" stopColor="#7657F6" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#07112D" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="innerCoreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
            <stop offset="35%" stopColor="#16C7E8" stopOpacity="0.7" />
            <stop offset="70%" stopColor="#0B1E42" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#07112D" stopOpacity="1" />
          </radialGradient>

          {/* Node Glow Filter */}
          <filter id="cyanGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Outer Concentric Orbit Guides */}
        <ellipse
          cx={cx}
          cy={cy}
          rx={rx}
          ry={ry}
          fill="none"
          stroke="#16C7E8"
          strokeWidth="1"
          strokeDasharray="4 8"
          className="opacity-25"
        />

        <ellipse
          cx={cx}
          cy={cy}
          rx={rx * 0.72}
          ry={ry * 0.72}
          fill="none"
          stroke="#7657F6"
          strokeWidth="1"
          strokeDasharray="2 6"
          className="opacity-30"
        />

        <ellipse
          cx={cx}
          cy={cy}
          rx={rx * 0.45}
          ry={ry * 0.45}
          fill="none"
          stroke="#16C7E8"
          strokeWidth="1"
          className="opacity-20"
        />

        {/* Dynamic Vector Convergence Beams */}
        {nodes.map((n) => {
          const isActive = activeSlug === n.slug;
          return (
            <g key={`beam-${n.slug}`}>
              <line
                x1={n.x}
                y1={n.y}
                x2={cx}
                y2={cy}
                stroke={isActive ? '#16C7E8' : 'rgba(22, 199, 232, 0.12)'}
                strokeWidth={isActive ? '2.5' : '1'}
                strokeDasharray={isActive ? 'none' : '3 6'}
                className="transition-all duration-300"
              />
              {isActive && (
                <circle cx={(n.x + cx) / 2} cy={(n.y + cy) / 2} r="3" fill="#16C7E8" filter="url(#cyanGlow)">
                  <animate
                    attributeName="opacity"
                    values="0.3;1;0.3"
                    dur="1.5s"
                    repeatCount="indefinite"
                  />
                </circle>
              )}
            </g>
          );
        })}

        {/* Central Core Ambient Pulse */}
        <circle cx={cx} cy={cy} r="110" fill="url(#corePulseGlow)" className="animate-pulse opacity-60" />

        {/* Core Outer Hexagonal Geometry */}
        <polygon
          points={`${cx},${cy - 68} ${cx + 59},${cy - 34} ${cx + 59},${cy + 34} ${cx},${cy + 68} ${cx - 59},${cy + 34} ${cx - 59},${cy - 34}`}
          fill="none"
          stroke="#16C7E8"
          strokeWidth="1.5"
          className="opacity-60"
        />

        {/* Core Center Disk */}
        <circle cx={cx} cy={cy} r="54" fill="url(#innerCoreGlow)" stroke="#16C7E8" strokeWidth="2" filter="url(#cyanGlow)" />

        {/* Core Center Text */}
        <text
          x={cx}
          y={cy - 8}
          textAnchor="middle"
          fill="#16C7E8"
          fontSize="10"
          fontFamily="monospace"
          fontWeight="bold"
          letterSpacing="2.5"
        >
          JSJ CORE
        </text>
        <text
          x={cx}
          y={cy + 8}
          textAnchor="middle"
          fill="#FFFFFF"
          fontSize="8.5"
          fontFamily="sans-serif"
          fontWeight="bold"
          letterSpacing="1.2"
        >
          AUTONOMOUS
        </text>
        <text
          x={cx}
          y={cy + 20}
          textAnchor="middle"
          fill="#94A3B8"
          fontSize="7"
          fontFamily="monospace"
          letterSpacing="0.8"
        >
          CONVERGENCE
        </text>

        {/* 9 Interactive Peripheral Nodes */}
        {nodes.map((node) => {
          const isSelected = activeSlug === node.slug;
          return (
            <g
              key={node.slug}
              className="cursor-pointer group focus:outline-none"
              tabIndex={0}
              role="button"
              aria-label={`Vertical node: ${node.title} (${node.layer} Layer)`}
              onMouseEnter={() => setActiveSlug(node.slug)}
              onMouseLeave={() => setActiveSlug(null)}
              onFocus={() => setActiveSlug(node.slug)}
              onBlur={() => setActiveSlug(null)}
            >
              {/* Outer hover halo */}
              <circle
                cx={node.x}
                cy={node.y}
                r={isSelected ? '28' : '18'}
                fill={isSelected ? 'rgba(22, 199, 232, 0.2)' : 'rgba(11, 30, 66, 0.6)'}
                stroke={isSelected ? '#16C7E8' : 'rgba(22, 199, 232, 0.4)'}
                strokeWidth={isSelected ? '2' : '1'}
                className="transition-all duration-300"
              />

              {/* Node Center Pip */}
              <circle
                cx={node.x}
                cy={node.y}
                r="6"
                fill={isSelected ? '#FFFFFF' : '#16C7E8'}
                className="transition-colors duration-200"
              />

              {/* Node Label */}
              <text
                x={node.x}
                y={node.y > cy ? node.y + 26 : node.y - 20}
                textAnchor="middle"
                fill={isSelected ? '#FFFFFF' : '#94A3B8'}
                fontSize="9"
                fontFamily="sans-serif"
                fontWeight={isSelected ? '600' : '500'}
                className="transition-all duration-200 pointer-events-none drop-shadow-md"
              >
                {node.title.split(' ')[0]}
              </text>
            </g>
          );
        })}
      </svg>

      {/* Floating Active Node Tooltip Badge */}
      {activeNode && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 bg-[#0B1E42]/95 border border-cyan-400/50 rounded-xl px-4 py-2.5 shadow-xl shadow-cyan-950/80 backdrop-blur-md flex items-center gap-3 animate-in fade-in zoom-in-95 duration-150">
          <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
          <div>
            <div className="text-xs font-semibold text-white flex items-center gap-2">
              <span>{activeNode.title}</span>
              <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-cyan-950/80 text-cyan-300 border border-cyan-500/30">
                {activeNode.layer} Layer
              </span>
            </div>
            <Link
              href={`/solutions/${activeNode.slug}`}
              className="text-[11px] text-cyan-300 hover:text-white underline mt-0.5 inline-block"
            >
              Explore dedicated capabilities →
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
