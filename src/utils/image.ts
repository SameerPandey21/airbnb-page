/**
 * Utility to adjust the width parameter (`im_w`) of Airbnb's muscache CDN URLs,
 * allowing responsive, razor-sharp rendering on retina screens and fast loading on smaller cards.
 */
export function getOptimizedImageUrl(src: string, targetWidth: number): string {
  if (!src) return src;
  if (src.includes('muscache.com')) {
    if (src.includes('im_w=')) {
      return src.replace(/im_w=\d+/, `im_w=${targetWidth}`);
    }
    const separator = src.includes('?') ? '&' : '?';
    return `${src}${separator}im_w=${targetWidth}`;
  }
  return src;
}
