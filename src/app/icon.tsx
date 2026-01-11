import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const size = {
    width: 32,
    height: 32,
};
export const contentType = 'image/png';

// Image generation
export default function Icon() {
    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 24,
                    background: 'transparent', // Transparent background
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <svg
                    width="32"
                    height="32"
                    viewBox="0 0 202 185"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* Definitions for Masking the Outline Chevron */}
                    <defs>
                        <mask id="cutout-mask">
                            {/* The base shape (White = Visible) */}
                            <path
                                d="M20.7773 20.7778L100.33 94.3665C100.598 94.6143 100.591 95.0401 100.314 95.2782L20.7773 163.778"
                                stroke="white"
                                strokeWidth="41.5556"
                                strokeLinecap="round"
                            />
                            {/* The inner cutout (Black = Hidden/Transparent) */}
                            <path
                                d="M20.7773 20.7778L100.33 94.3665C100.598 94.6143 100.591 95.0401 100.314 95.2782L20.7773 163.778"
                                stroke="black"
                                strokeWidth="18"
                                strokeLinecap="round"
                            />
                        </mask>
                    </defs>

                    {/* Chevron 1: Outline (Uses Mask) */}
                    <path
                        d="M20.7773 20.7778L100.33 94.3665C100.598 94.6143 100.591 95.0401 100.314 95.2782L20.7773 163.778"
                        stroke="#07258B" // Brand Color
                        strokeWidth="41.5556"
                        strokeLinecap="round"
                        mask="url(#cutout-mask)"
                    />

                    {/* Chevron 2: Solid (Offset by 80px) */}
                    <g transform="translate(80 0)">
                        <path
                            d="M20.7773 20.7778L100.33 94.3665C100.598 94.6143 100.591 95.0401 100.314 95.2782L20.7773 163.778"
                            stroke="#07258B" // Brand Color
                            strokeWidth="41.5556"
                            strokeLinecap="round"
                        />
                    </g>
                </svg>
            </div>
        ),
        {
            ...size,
        }
    );
}
