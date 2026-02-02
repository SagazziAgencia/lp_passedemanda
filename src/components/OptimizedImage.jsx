import React from 'react';

function OptimizedImage({ src, alt, className, loading = 'lazy', ...rest }) {
  // Extract base name and extension from src
  const lastDotIndex = src.lastIndexOf('.');
  const basePath = lastDotIndex > 0 ? src.slice(0, lastDotIndex) : src;
  const extension = lastDotIndex > 0 ? src.slice(lastDotIndex + 1).toLowerCase() : '';
  
  // Create webp src by replacing extension with .webp
  const webpSrc = `${basePath}.webp`;
  
  return (
    <picture>
      {extension === 'png' && (
        <source srcSet={webpSrc} type="image/webp" />
      )}
      <img
        src={src}
        alt={alt}
        loading={loading}
        className={className}
        {...rest}
      />
    </picture>
  );
}

export default OptimizedImage;
