/**
 * PhotoSlot
 * =========
 * Shows your image if it exists, or a clearly labelled placeholder if not.
 *
 * HOW TO ADD AN IMAGE:
 * 1. Drop your image file into src/assets/images/
 * 2. Update the `src` prop to match the filename
 * 3. The placeholder disappears automatically
 *
 * Example:
 *   <PhotoSlot src={rover1} label="Rover — side view" className="photo-wide" />
 */

import './PhotoSlot.css'

export default function PhotoSlot({ src, label, filename, className = '', caption }) {
  return (
    <div className={`photo-slot-wrapper ${className}`}>
      {src ? (
        <img src={src} alt={label} className="photo-slot-img" />
      ) : (
        <div className="photo-slot-placeholder">
          <span className="photo-slot-label">{label}</span>
          {filename && (
            <code className="photo-slot-path">src/assets/images/{filename}</code>
          )}
        </div>
      )}
      {caption && <p className="photo-slot-caption">{caption}</p>}
    </div>
  )
}
