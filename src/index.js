import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './pages/App';
import reportWebVitals from './scripts/reportWebVitals';
import ans from './pol';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
  
);

let L = shL();
let F = shF();
let K = shK();

console.log(sh(L,"L"));
console.log(sh(F,"F"));
console.log(sh(K,"K"));

let Hs = shHs();
let D  = shD();
let Hy = shHy();
let Pd = shPd();
let Mf = shMf();
let Pa = shPa();
let Pt = shPt();
let Sc = shSc();
let Ma = shMa();
let Si = shSi();

console.log(sh(Hs,"Hs"));
console.log(sh(D,"D"));
console.log(sh(Hy,"Hy"));
console.log(sh(Pd,"Pd"));
console.log(sh(Mf,"Mf"));
console.log(sh(Pa,"Pa"));
console.log(sh(Pt,"Pt"));
console.log(sh(Sc,"Sc"));
console.log(sh(Ma,"Ma"));
console.log(sh(Si,"Si"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

function sh(arr, name) {
  return `Шкалла ${name}\nВерно ${arr.trueSh.toString()} (${arr.trueSh.length} баллов)\nНе верно ${arr.unSh.toString()} (${arr.unSh.length} баллов)`;
}


function shL() {
  let trueSh = [];
  let unSh = [];
  let unTrue = [15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 195, 225, 255, 285 ]
  ans.forEach((an, i) => {
    if(unTrue.includes(i+1) && an === "-") {
      unSh.push(i+1);
    }
  })
  return({trueSh, unSh});
}

function shF() {
  let trueSh = []
  let unSh = [];
  let ansTrue = [ 
    23, 27, 31, 34, 35, 40, 42, 49, 50, 53, 56, 85, 139, 146, 156,
    202, 206, 209, 210, 211, 215, 218, 227, 245, 246, 247, 252, 256, 269, 286, 291
  ];
  let unTrue = [17, 20, 54, 65, 75, 83, 112, 113, 115, 164, 169, 177, 185, 196, 199, 220, 257, 258, 272, 276 ]
  ans.forEach((an, i) => {
    if(unTrue.includes(i+1) && an === "-") {
      unSh.push(i+1);
    } 
    if(ansTrue.includes(i+1) && an === "+") {
      trueSh.push(i+1)
    } 
  })
  return({trueSh, unSh});
}

function shK() {
  let trueSh = []
  let unSh = [];
  let ansTrue = [96];
  let unTrue = [30, 39, 71, 89, 124, 129, 134, 138, 142, 148, 160, 170, 171,
    180, 183, 217, 234, 267, 272, 296, 316, 322, 374, 383, 397,
    398, 406, 461, 502 ]
  ans.forEach((an, i) => {
    if(unTrue.includes(i+1) && an === "-") {
      unSh.push(i+1);
    } 
    if(ansTrue.includes(i+1) && an === "+") {
      trueSh.push(i+1)
    } 
  })
  return({trueSh, unSh});
}

function shHs() {
  let trueSh = []
  let unSh = [];
  let ansTrue = [23, 29, 43, 62, 72, 108, 114, 125, 161, 189, 273];
  let unTrue = [2, 3, 7, 9, 18, 51, 55, 68, 103, 130, 153, 155, 163, 175,
    188, 190, 192, 230, 243, 274, 281]
  ans.forEach((an, i) => {
    if(unTrue.includes(i+1) && an === "-") {
      unSh.push(i+1);
    } 
    if(ansTrue.includes(i+1) && an === "+") {
      trueSh.push(i+1)
    } 
  })
  return({trueSh, unSh});
}

function shD() {
  let trueSh = []
  let unSh = [];
  let ansTrue = [5, 13, 23, 32, 41, 43, 52, 67, 86, 104, 130, 138, 142, 158, 159, 189, 193, 236, 259];
  let unTrue = [2, 8, 9, 18, 30, 36, 39, 45, 46, 51, 57, 58, 64, 80, 88, 89, 95,
    98, 107, 122, 131, 152, 153, 154, 155, 160, 178, 191, 207,
    208, 238, 241, 242, 248, 263, 270, 271, 272, 285, 296]
  ans.forEach((an, i) => {
    if(unTrue.includes(i+1) && an === "-") {
      unSh.push(i+1);
    } 
    if(ansTrue.includes(i+1) && an === "+") {
      trueSh.push(i+1)
    } 
  })
  return({trueSh, unSh});
}

function shHy() {
  let trueSh = []
  let unSh = [];
  let ansTrue = [10, 23, 32, 43, 44, 47, 76, 114, 179, 186, 189, 238];
  let unTrue = [2, 3, 6, 7, 8, 9, 12, 26, 30, 51, 55, 71, 89, 93, 103, 107, 109,
    124, 128, 129, 136, 137, 141, 147, 153, 160, 162, 163, 170,
    172, 174, 175, 180, 188, 190, 192, 201, 213, 230, 234, 243,
    265, 267, 274, 279, 289, 292]
  ans.forEach((an, i) => {
    if(unTrue.includes(i+1) && an === "-") {
      unSh.push(i+1);
    } 
    if(ansTrue.includes(i+1) && an === "+") {
      trueSh.push(i+1)
    } 
  })
  return({trueSh, unSh});
}

function shPd() {
  let trueSh = []
  let unSh = [];
  let ansTrue = [16, 21, 24, 32, 35, 38, 42, 61, 67, 84, 94, 102, 106, 110,
    118, 127, 215, 216, 224, 239, 244, 245, 284];
  let unTrue = [8, 20, 37, 82, 91, 96, 107, 134, 137, 141, 155, 170, 171, 173,
    180, 183, 201, 231, 235, 237, 248, 267, 287, 289, 294, 296 
    ]
  ans.forEach((an, i) => {
    if(unTrue.includes(i+1) && an === "-") {
      unSh.push(i+1);
    } 
    if(ansTrue.includes(i+1) && an === "+") {
      trueSh.push(i+1)
    } 
  })
  return({trueSh, unSh});
}

function shMf() {
  let trueSh = []
  let unSh = [];
  let ansTrue = [4, 25, 70, 74, 77, 78, 87, 92, 126, 132, 134, 140, 149,
    187, 203, 204, 217, 226, 239, 261, 278, 282, 295, 299];
  let unTrue = [1, 19, 26, 28, 79, 80, 81, 89, 99, 112, 115, 116, 117, 120,
    144, 176, 179, 198, 213, 214, 219, 221, 223, 229, 231, 249,
    254, 260, 262, 264, 280, 283, 297, 300
    ]
  ans.forEach((an, i) => {
    if(unTrue.includes(i+1) && an === "-") {
      unSh.push(i+1);
    } 
    if(ansTrue.includes(i+1) && an === "+") {
      trueSh.push(i+1)
    } 
  })
  return({trueSh, unSh});
}

function shPa() {
  let trueSh = []
  let unSh = [];
  let ansTrue = [15, 16, 22, 24, 27, 35, 110, 127, 157, 158,
    202, 284, 291, 299, 305, 317, 338, 341, 364, 365];
  let unTrue = [93, 107, 109, 111, 117, 124, 268, 281, 294, 313, 316, 319,
    327, 347, 348
    ]
  ans.forEach((an, i) => {
    if(unTrue.includes(i+1) && an === "-") {
      unSh.push(i+1);
    } 
    if(ansTrue.includes(i+1) && an === "+") {
      trueSh.push(i+1)
    } 
  })
  return({trueSh, unSh});
}

function shPt() {
  let trueSh = []
  let unSh = [];
  let ansTrue = [10, 15, 22, 32, 41, 67, 76, 86, 94, 102, 106, 142, 159, 189, 217, 238, 301, 304, 305, 317, 321, 336, 337, 340,
    342, 343, 344, 346, 351, 352, 356, 357, 359, 360, 361];
  let unTrue = [3, 8, 36, 122, 152, 164, 178, 329, 353
    ]
  ans.forEach((an, i) => {
    if(unTrue.includes(i+1) && an === "-") {
      unSh.push(i+1);
    } 
    if(ansTrue.includes(i+1) && an === "+") {
      trueSh.push(i+1)
    } 
  })
  return({trueSh, unSh});
}

function shSc() {
  let trueSh = []
  let unSh = [];
  let ansTrue = [15, 16, 21, 22, 24, 32, 35, 38, 40, 41, 47, 52, 76, 97, 104,
    156, 157, 159, 179, 194, 202, 210, 212,
    238, 241, 251, 259, 273, 282, 291, 297, 301, 303, 305,
    307, 312, 320, 324, 325, 332, 335, 339, 341, 345,
     352, 354, 355, 356, 360, 363, 364];
  let unTrue = [8, 17, 20, 37, 65, 103, 119, 177, 178, 187, 192, 196, 220, 276,
    281, 306, 309, 322, 330
    ]
  ans.forEach((an, i) => {
    if(unTrue.includes(i+1) && an === "-") {
      unSh.push(i+1);
    } 
    if(ansTrue.includes(i+1) && an === "+") {
      trueSh.push(i+1)
    } 
  })
  return({trueSh, unSh});
}

function shMa() {
  let trueSh = []
  let unSh = [];
  let ansTrue = [11, 13, 21, 22, 59, 64, 73, 97, 100, 109, 127, 134, 143, 156,
    157, 167, 181, 194, 212, 222, 226, 228, 232, 233, 238, 240,
    250, 251, 263, 268, 271, 277, 279, 298];
  let unTrue = [101, 105, 111, 119, 120, 148, 166, 171, 180, 267, 289
    ]
  ans.forEach((an, i) => {
    if(unTrue.includes(i+1) && an === "-") {
      unSh.push(i+1);
    } 
    if(ansTrue.includes(i+1) && an === "+") {
      trueSh.push(i+1)
    } 
  })
  return({trueSh, unSh});
}

function shSi() {
  let trueSh = []
  let unSh = [];
  let ansTrue = [32, 67, 82, 111, 117, 124, 138, 147, 171, 172, 180, 201, 236,
    267, 278, 292, 304, 316, 321, 332, 336, 342, 357, 377, 383,
    398, 411, 427, 436, 455, 473, 487, 549, 564];
  let unTrue = [25, 57, 91, 99, 119, 126, 143, 193, 208, 229, 231, 254,
    262, 281, 296, 309, 353, 359, 371, 391, 400, 415, 440, 446,
    449, 450, 451, 469, 479, 481, 482, 505, 521, 547
    ]
  ans.forEach((an, i) => {
    if(unTrue.includes(i+1) && an === "-") {
      unSh.push(i+1);
    } 
    if(ansTrue.includes(i+1) && an === "+") {
      trueSh.push(i+1)
    } 
  })
  return({trueSh, unSh});
}



/*
L 3 -- 47
F 2 -- 49
K 23 -- 70
1 6 18 -- 60
2 17 -- 47
3 21 -- 54
4 15 24 64
5 28 -- 67
6 9 -- 54
7 4 27 53
8 4 27 59
9 16 21 61
10 16 41

*/