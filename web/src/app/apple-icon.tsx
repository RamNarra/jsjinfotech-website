import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { ImageResponse } from 'next/og';

export const dynamic = 'force-static';
export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

// JSJ mark on white (logo is designed for light backgrounds).
export default async function AppleIcon() {
  const svg = await readFile(path.join(process.cwd(), 'public/brand/jsj-mark.svg'));
  const src = `data:image/svg+xml;base64,${svg.toString('base64')}`;
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#ffffff' }}>
        <img src={src} width={140} height={86} alt="" />
      </div>
    ),
    size,
  );
}
