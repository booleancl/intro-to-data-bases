(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KK4B63T');

window.addEventListener('DOMContentLoaded', () => {
  const links = Array.from(document.links)
  links.forEach(link => {
    if (link.hostname !== window.location.hostname) {
      link.target = '_blank';
      link.rel    = 'noopener noreferrer';  
    };
  })
})