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

const handwritingfySVG = () => {
  let svgs = document.querySelectorAll("svg");
  // prepare the filter
  let filter = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "filter"
  );
  filter.setAttribute("id", "displacementFilter");
  const feTurbulence = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "feTurbulence"
  );
  feTurbulence.setAttribute("type", "fractalNoise");
  feTurbulence.setAttribute("baseFrequency", "0.05");
  feTurbulence.setAttribute("result", "noise");
  filter.appendChild(feTurbulence);
  const feDisplacementMap = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "feDisplacementMap"
  );
  feDisplacementMap.setAttribute("in2", "noise");
  feDisplacementMap.setAttribute("in", "SourceGraphic");
  feDisplacementMap.setAttribute("scale", "5");
  feDisplacementMap.setAttribute("xChannelSelector", "R");
  feDisplacementMap.setAttribute("yChannelSelector", "G");
  filter.appendChild(feDisplacementMap);

  // inject the filter
  svgs.forEach((svg) => {
    svg.appendChild(filter);
    for (let i = 0; i < svg.children.length; i++) {
      svg.children[i].setAttribute(
        "style",
        "filter: url(#displacementFilter)"
      );
    }
  });
}
// export { availableFontFamilies, loadHeadLinks };
