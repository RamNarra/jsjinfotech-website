import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { ImageResponse } from 'next/og';

export const dynamic = 'force-static';
export const alt = 'JSJ INFOTECH: enterprise IT, SAP with SGN Software, AI, drones, software and smart infrastructure';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OgImage() {
  const svg = await readFile(path.join(process.cwd(), 'public/brand/jsj-mark.svg'));
  const src = `data:image/svg+xml;base64,${svg.toString('base64')}`;
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: 72, background: 'linear-gradient(120deg,#ffffff 0%,#eef1fb 55%,#efe6f6 100%)' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} width={230} height={140} alt="" />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 68, fontWeight: 700, color: '#0b1530', letterSpacing: -2 }}>Intelligent technology.</div>
          <div style={{ fontSize: 68, fontWeight: 700, color: '#604b9f', letterSpacing: -2 }}>Connected enterprise.</div>
          <div style={{ marginTop: 24, fontSize: 28, color: '#4a5573' }}>Enterprise IT, SAP with SGN Software (SAP Gold Partner), AI, drones, software and smart infrastructure</div>
        </div>
      </div>
    ),
    size,
  );
}
