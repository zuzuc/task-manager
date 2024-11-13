function useIsMobile() {
    const isDevelopment = window.location.host === 'localhost:3000';
    const isFakeMobile = isDevelopment && window.location.search === '?mobile=true';
    const toMatch = [/Android/i, /webOS/i, /iPhone/i, /iPad/i, /iPod/i, /BlackBerry/i, /Windows Phone/i];
  
    return (
      isFakeMobile ||
      toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
      })
    );
  }
  
  export default useIsMobile;