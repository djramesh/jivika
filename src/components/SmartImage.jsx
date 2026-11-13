/* eslint-disable react/prop-types */
import { useState } from "react";

const SmartImage = ({
  src,
  alt,
  className = "",
  style = {},
  fallbackLabel = "Photo Pending Upload",
  onClick,
  loading = "lazy",
}) => {
  const [hasError, setHasError] = useState(!src);

  if (hasError) {
    return (
      <div
        className={`jv-img-fallback ${className}`}
        style={style}
        role="img"
        aria-label={alt || fallbackLabel}
        onClick={onClick}
      >
        <i className="bi bi-camera" />
        <span>{alt || fallbackLabel}</span>
        <small>Add photo in /public</small>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      loading={loading}
      onClick={onClick}
      onError={() => setHasError(true)}
    />
  );
};

export default SmartImage;

