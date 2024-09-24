function getBrowser() {
    const userAgent = navigator.userAgent.toLowerCase();
  
    if (userAgent.includes('safari') && !userAgent.includes('chrome')) {
      return 'Safari';
    } else if (userAgent.includes('chrome')) {
      return 'Chrome';
    } else {
      return 'Other';
    }
  }
  
  const browser = getBrowser();
  
  if (browser === 'Safari') {
    // styles specifically for Safari
    document.body.classList.add('safari-browser');
  } else if (browser === 'Chrome') {
    // styles specifically for Chrome
    document.body.classList.add('chrome-browser');
  }