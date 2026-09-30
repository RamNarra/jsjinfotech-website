import { ImageResponse } from 'next/og';
import { BRAND } from '@/shared';

export const alt = `${BRAND.name} — ${BRAND.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Text-only social card. Replace with the official logo lockup when the asset is supplied.
export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 80,
          background: '#FFFFFF',
          color: '#12171C',
        }}
      >
        <div style={{ display: 'flex', fontSize: 30, color: '#0062DA', fontWeight: 600 }}>{BRAND.tagline}</div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', fontSize: 96, fontWeight: 700, letterSpacing: -3 }}>{BRAND.name}</div>
          <div style={{ display: 'flex', fontSize: 34, color: '#475E75', marginTop: 20 }}>
            Technology consulting and project execution · Hyderabad
          </div>
        </div>
        <div style={{ display: 'flex', height: 6, width: 120, background: '#0070F2' }} />
      </div>
    ),
    size,
  );
}
