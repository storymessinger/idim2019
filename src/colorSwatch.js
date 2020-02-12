// const colorList = [
//   ['#e8eaef', '#222', '#222', '#222', ],
//   ['#03f', '#000', 'rgba(255,255,255,0.3), #fff, #e23, #f2b'],
//   ['#51d', '#ccc', '#ff0', '#ff0', '#fff', '#f00'],
//   ['#c2a', '#f0e', '#000', '#24f', '#fff', '#ff0'],
  
//   ['#222', '#fff'],

// ];

// const randHexColor = () => {
//   return `#${parseInt(Math.random()*16).toString(16)}${parseInt(Math.random()*16).toString(16)}${parseInt(Math.random()*16).toString(16)}`
// }

// const root = document.documentElement;

// setColors(0);

// function setColors(key) {

//   if (!'abcdefghijklmnopqrstuvwxyz0123456789'.includes(key)) return;

//   let num = parseInt(key, 35);

//   let bg, txt, txtHover, txtSelect, highlightTxt, highlight;
//   if ( num===0 || num ) {
//     if (num >= colorList.length) num = 0;
//     bg = colorList[num][0];
//     txt = colorList[num][1];
//     txtHover = colorList[num][2];
//     txtSelect = colorList[num][3];
//     highlightTxt = colorList[num][4];
//     highlight = colorList[num][5];
//   }

//   else { // key is 'z'
//     bg = randHexColor();
//     txt = randHexColor();
//     txtHover = randHexColor();
//     txtSelect = randHexColor();
//     highlightTxt = randHexColor();
//     highlight = randHexColor();
//   }

//   root.style.setProperty('--color-background', bg);
//   root.style.setProperty('--color-text', txt);
//   root.style.setProperty('--color-text-hover', txtHover);
//   root.style.setProperty('--color-text-select', txtSelect);
//   root.style.setProperty('--color-highlight-text', highlightTxt);
//   root.style.setProperty('--color-highlight', highlight);
// }


// // window.addEventListener('keydown', (event)=> {

// //   setColors(event.key);

// // });