// Add a link file
// var link = document.createElement("link");
// link.href = "https://fonts.googleapis.com";
// link.type = "text/css";
// link.rel = "preconnect";
// document.head.appendChild(link);

const loadHeadLinks = () => {
  // Google fonts
  var link1 = document.createElement("link");
  link1.href = "https://fonts.googleapis.com";
  link1.rel = "preconnect";
  document.head.appendChild(link1);
  var link2 = document.createElement("link");
  link2.href = "https://fonts.gstatic.com";
  link2.rel = "preconnect";
  link2.crossOrigin = 'true'
  document.head.appendChild(link2);
  var link3 = document.createElement("link");
  link3.href = "https://fonts.googleapis.com/css2?family=Architects+Daughter&family=Caveat:wght@400;500;600;700&family=Covered+By+Your+Grace&family=Dancing+Script:wght@400;500;600;700&family=Edu+VIC+WA+NT+Beginner:wght@400;500;600;700&family=Gloria+Hallelujah&family=Great+Vibes&family=Homemade+Apple&family=Mansalva&family=Nanum+Brush+Script&family=Nanum+Pen+Script&family=Nothing+You+Could+Do&family=Pacifico&family=Permanent+Marker&family=Reenie+Beanie&family=Rock+Salt&family=Satisfy&family=Shadows+Into+Light&family=Short+Stack&family=Splash&family=Square+Peg&family=Waiting+for+the+Sunrise&display=swap";
  link3.rel = "stylesheet";
  document.head.appendChild(link3);

  // xkcd font
  var xkcdStyle = document.createElement("style");
  let xkcdFamily = 'xkcd'
  let xkcdFontUrl = "https://cdn.rawgit.com/ipython/xkcd-font/master/xkcd-script/font/xkcd-script.woff"
  let fontFormat = "woff"
  let template = `
@font-face {
    font-family: '${xkcdFamily}';
    src: url('${xkcdFontUrl}') format('${fontFormat}');
}`
  xkcdStyle.appendChild(document.createTextNode(template));
  document.head.appendChild(xkcdStyle);
}

let googleFontFamilies =
  ['Architects Daughter',
    'Caveat',
    'Covered By Your Grace',
    'Dancing Script',
    'Edu VIC WA NT Beginner',
    'Gloria Hallelujah',
    'Great Vibes',
    'Homemade Apple',
    'Mansalva',
    'Nanum Brush Script',
    'Nanum Pen Script',
    'Nothing You Could Do',
    'Pacifico',
    'Permanent Marker',
    'Reenie Beanie',
    'Rock Salt',
    'Satisfy',
    'Shadows Into Light',
    'Short Stack',
    'Splash',
    'Square Peg',
    'Waiting for the Sunrise']

const availableFontFamilies = ['xkcd', ...googleFontFamilies]

const applyFontForAll = (font) => {
  var fontStyle = document.createElement("style");
  fontStyle.appendChild(document.createTextNode(`* {font-family: '${font}' !important; }`));
  document.head.appendChild(fontStyle);
}
// export { availableFontFamilies, loadHeadLinks };
