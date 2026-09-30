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
      {/* Background Soft Enterprise Halo */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#EBF8FF]/50 via-white to-[#F7F9FC] pointer-events-none rounded-full blur-3xl opacity-60" />

      {/* SVG Vector Autonomous Core */}
      <svg
        viewBox="0 0 700 600"
        className="w-full h-full relative z-10 overflow-visible"
        aria-label="JSJ Autonomous Core Convergence Architecture - Interactive Visualization"
        role="region"
      >
        <defs>
          {/* Subtle Enterprise Gradients */}
          <radialGradient id="coreBg" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
            <stop offset="85%" stopColor="#F7F9FC" stopOpacity="1" />
            <stop offset="100%" stopColor="#EBF8FF" stopOpacity="1" />
          </radialGradient>

          <radialGradient id="ambientPulse" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#0070F2" stopOpacity="0.08" />
            <stop offset="60%" stopColor="#0070F2" stopOpacity="0.03" />
            <stop offset="100%" stopColor="#0070F2" stopOpacity="0" />
          </radialGradient>

          {/* Clean Soft Shadow Filter */}
          <filter id="cardShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#12171C" floodOpacity="0.06" />
          </filter>
        </defs>

        {/* Outer Concentric Orbit Guides */}
        <ellipse
          cx={cx}
          cy={cy}
          rx={rx}
          ry={ry}
          fill="none"
          stroke="#DDE3EA"
          strokeWidth="1.2"
          strokeDasharray="4 6"
        />

        <ellipse
          cx={cx}
          cy={cy}
          rx={rx * 0.72}
          ry={ry * 0.72}
          fill="none"
          stroke="#0070F2"
          strokeWidth="1"
          strokeDasharray="3 6"
          className="opacity-25"
        />

        <ellipse
          cx={cx}
          cy={cy}
          rx={rx * 0.45}
          ry={ry * 0.45}
          fill="none"
          stroke="#DDE3EA"
          strokeWidth="1"
          className="opacity-60"
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
                stroke={isActive ? '#0070F2' : '#DDE3EA'}
                strokeWidth={isActive ? '2' : '1'}
                strokeDasharray={isActive ? 'none' : '3 5'}
                className="transition-all duration-200"
              />
              {isActive && (
                <circle cx={(n.x + cx) / 2} cy={(n.y + cy) / 2} r="3" fill="#0070F2">
                  <animate
                    attributeName="opacity"
                    values="0.4;1;0.4"
                    dur="1.8s"
                    repeatCount="indefinite"
                  />
                </circle>
              )}
            </g>
          );
        })}

        {/* Central Core Ambient Pulse */}
        <circle cx={cx} cy={cy} r="115" fill="url(#ambientPulse)" className="animate-pulse" />

        {/* Core Outer Hexagonal Blueprint Guide */}
        <polygon
          points={`${cx},${cy - 68} ${cx + 59},${cy - 34} ${cx + 59},${cy + 34} ${cx},${cy + 68} ${cx - 59},${cy + 34} ${cx - 59},${cy - 34}`}
          fill="none"
          stroke="#0070F2"
          strokeWidth="1"
          strokeDasharray="2 4"
          className="opacity-30"
        />

        {/* Core Center Disk */}
        <circle
          cx={cx}
          cy={cy}
          r="54"
          fill="url(#coreBg)"
          stroke="#0070F2"
          strokeWidth="2"
          filter="url(#cardShadow)"
        />

        {/* Core Center Text */}
        <text
          x={cx}
          y={cy - 10}
          textAnchor="middle"
          fill="#0070F2"
          fontSize="10"
          fontFamily="monospace"
          fontWeight="bold"
          letterSpacing="2.5"
        >
          JSJ CORE
        </text>
        <text
          x={cx}
          y={cy + 7}
          textAnchor="middle"
          fill="#12171C"
          fontSize="9"
          fontFamily="sans-serif"
          fontWeight="bold"
          letterSpacing="1"
        >
          AUTONOMOUS
        </text>
        <text
          x={cx}
          y={cy + 20}
          textAnchor="middle"
          fill="#5B738B"
          fontSize="7"
          fontFamily="monospace"
          letterSpacing="0.8"
        >
          SYSTEMS ARCHITECTURE
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
                r={isSelected ? '26' : '18'}
                fill={isSelected ? '#EBF8FF' : '#FFFFFF'}
                stroke={isSelected ? '#0070F2' : '#DDE3EA'}
                strokeWidth={isSelected ? '2' : '1'}
                filter="url(#cardShadow)"
                className="transition-all duration-200"
              />

              {/* Node Center Pip */}
              <circle
                cx={node.x}
                cy={node.y}
                r="5"
                fill={isSelected ? '#0070F2' : '#475E75'}
                className="transition-colors duration-200"
              />

              {/* Node Label */}
              <text
                x={node.x}
                y={node.y > cy ? node.y + 26 : node.y - 20}
                textAnchor="middle"
                fill={isSelected ? '#0070F2' : '#12171C'}
                fontSize="9"
                fontFamily="sans-serif"
                fontWeight={isSelected ? '700' : '600'}
                className="transition-colors duration-200 pointer-events-none"
              >
                {node.title.split(' ')[0]}
              </text>
            </g>
          );
        })}
      </svg>

      {/* Floating Active Node Tooltip Badge */}
      {activeNode && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 bg-white border border-[#DDE3EA] rounded-xl px-4 py-2.5 shadow-lg flex items-center gap-3 animate-in fade-in zoom-in-95 duration-150">
          <div className="w-2.5 h-2.5 rounded-full bg-[#0070F2]" />
          <div>
            <div className="text-xs font-semibold text-[#12171C] flex items-center gap-2">
              <span>{activeNode.title}</span>
              <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[#EBF8FF] text-[#0070F2] border border-[#D1EFFF]">
                {activeNode.layer} Layer
              </span>
            </div>
            <Link
              href={`/solutions/${activeNode.slug}`}
              className="text-[11px] text-[#0070F2] hover:text-[#0057D2] font-medium underline mt-0.5 inline-block"
            >
              Explore capabilities →
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
