import sharp from 'sharp';

async function createOgImage() {
  const width = 1200;
  const height = 630;
  
  const svgOverlay = `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0B192C" />
        <stop offset="50%" stop-color="#0D213A" />
        <stop offset="100%" stop-color="#060D17" />
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#bg)" />
    <circle cx="600" cy="240" r="240" fill="#0099FF" opacity="0.1" />
    
    <text x="600" y="380" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="52" fill="#FFFFFF" text-anchor="middle" letter-spacing="4">MARTIALS</text>
    <text x="600" y="425" font-family="system-ui, -apple-system, sans-serif" font-weight="700" font-size="19" fill="#94A3B8" text-anchor="middle" letter-spacing="4">MANAGEMENT RESOURCE TECHNOLOGY SOLUTIONS</text>
    <text x="600" y="475" font-family="system-ui, -apple-system, sans-serif" font-weight="600" font-size="20" fill="#38BDF8" text-anchor="middle" letter-spacing="1">Trade • Risk • Technology • Talent</text>
  </svg>
  `;

  // Resize logo for OG center
  const logoBuffer = await sharp('public/martials_logo_transparent.png')
    .resize(240, 160, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  await sharp(Buffer.from(svgOverlay))
    .composite([
      {
        input: logoBuffer,
        top: 130,
        left: 480
      }
    ])
    .png()
    .toFile('public/og-image.png');

  await sharp('public/og-image.png').jpeg({ quality: 90 }).toFile('public/og-image.jpg');

  console.log('OG Images created successfully!');
}

createOgImage();
