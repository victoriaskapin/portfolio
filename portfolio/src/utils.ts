
export const getImageUrl = (path: string): string => {
 
  if (window.location.hostname === 'localhost') {
    return '/portfolio/assets/' + path;
  }
  else {
    return `assets/${path}`;
  }
};
