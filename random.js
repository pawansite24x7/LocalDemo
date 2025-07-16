function getRandomName() {
  const firstName = ["Alice", "Bob", "Charlie", "David", "Emma", "Frank",
  "Grace", "Hannah", "Isaac", "Jack", "Katherine", "Liam",
  "Olivia", "Noah", "Sophia", "Michael", "Elizabeth", "William",
  "Ava", "James", "Mia", "John", "Ella", "Robert",
  "Emily", "Joseph", "Sofia", "Daniel", "Chloe", "Matthew"];
  const lastName = ["Smith", "Johnson", "Williams", "Brown", "Davis", "Miller",
  "Wilson", "Moore", "Lee", "Taylor", "Anderson", "Thomas",
  "Martinez", "Harris", "Martin", "Jackson", "Garcia", "Jones",
  "Lopez", "Clark", "White", "Rodriguez", "Lewis", "Hall",
  "Walker", "Young", "King", "Hill", "Scott", "Adams"];
  
  let randomName = sessionStorage.getItem('randomName');

  
  if (!randomName) {
    const randomFirstName = firstName[Math.floor(Math.random() * firstName.length)];
    const randomLastName = lastName[Math.floor(Math.random() * lastName.length)];
    sessionStorage.setItem('randomName', randomFirstName+' '+randomLastName);
    return `${randomFirstName} ${randomLastName}`;
  }
   
  console.log("random user name assigned "+randomName);
	const now = new Date();
const currentTime = now.toLocaleTimeString();
console.log("Current Time:", currentTime);

  return randomName;
  
}

function getRandomUserAgent() {
  // const ua = [
  //     // Chrome on Windows 11
  //     "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
  //     // Chrome on Windows 10
  //     "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36",
  //     // Chrome on Windows 8.1
  //     "Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
  //     // Chrome on Windows 7
  //     "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
  //     // Chrome 118
  //     "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36",

  //     // Firefox 121 on Windows 11
  //     "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:121.0) Gecko/20100101 Firefox/121.0",
  //     // Firefox 120 on Windows 10
  //     "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:120.0) Gecko/20100101 Firefox/120.0",
  //     // Firefox on Windows 8.1
  //     "Mozilla/5.0 (Windows NT 6.3; Win64; x64; rv:121.0) Gecko/20100101 Firefox/121.0",
  //     // Firefox on Windows 7
  //     "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:121.0) Gecko/20100101 Firefox/121.0",
  //     // Firefox 119
  //     "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:119.0) Gecko/20100101 Firefox/119.0",

  //     // Edge 120 on Windows 11
  //     "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Edg/120.0.0.0",
  //     // Edge on Windows 10
  //     "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36 Edg/119.0.0.0",
  //     // Legacy Edge
  //     "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36 Edge/18.19041",
  //     // Edge 118
  //     "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36 Edg/118.0.0.0",

  //     // IE 11 on Windows 10
  //     "Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; rv:11.0) like Gecko",
  //     // IE 11 on Windows 8.1
  //     "Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; rv:11.0) like Gecko",
  //     // IE 11 on Windows 7
  //     "Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; rv:11.0) like Gecko",
  //     // IE 10 on Windows 8
  //     "Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; WOW64; Trident/6.0)",
  //     // IE 9 on Windows 7
  //     "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0)",

  //     // Opera 105 on Windows 11
  //     "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36 OPR/105.0.0.0",
  //     // Opera on Windows 10
  //     "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36 OPR/104.0.0.0",
  //     // Opera 103
  //     "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36 OPR/103.0.0.0",

  //     // Brave on Windows 11
  //     "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
  //     // Brave on Windows 10
  //     "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36"
  //   ];
  const ua = [
  "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:57.0) Gecko/20100101 Firefox/57.0",
  "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36",
  "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36 OPR/46.0.2597.57",
  "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:57.0) Gecko/20100101 Firefox/99.0",
  "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:57.0) Gecko/20100101 Firefox/64.0",
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36",
  "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1)",
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36 Edge/18.17763",
  "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_6; en-en) AppleWebKit/533.19.4 (KHTML, like Gecko) Version/5.0.3 Safari/533.19.4",
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/601.7.8 (KHTML, like Gecko) Version/9.1.3 Safari/601.7.8",
  "MacOutlook/16.12.0.180410 (Intelx64 Mac OS X Version 10.13.4 (Build 17E199))"
];
  let uaName = sessionStorage.getItem('uaName');
  if (!uaName) {
    const randomUAname = ua[Math.floor(Math.random() * ua.length)];
    sessionStorage.setItem('uaName', randomUAname);
    return randomUAname;
  }
  return uaName;
  
}

function setDC() {
    let dc = sessionStorage.getItem('dc');
    if(!dc){
    const now = new Date();
    const milliseconds = now.getMilliseconds();
    const lastDigit = milliseconds % 10;
	const a = lastDigit % 2 === 0;
    sessionStorage.setItem('dc', `${a}`);

    return `${a}`;
    }
	return dc
}


function setReplay(){
	    let rp = sessionStorage.getItem('replay');
	if(!rp){
    const now = new Date();
    const seconds = now.getSeconds();
    const lastDigit = seconds % 10;
		const r = lastDigit % 2 === 0;
    sessionStorage.setItem('replay', r);
    return r
		
	}
	return rp
}

// const dc = getDC();
// var appkey = 'afc8510a56cf1004f9024d9d121f2563'
// if(dc === 'in'){
// appkey = 'c9393037c1de76d77fe0dc1de5516349'
// }

// Object.defineProperty(navigator, 'userAgent', {
//   get: function() {
//     return getRandomUserAgent();
//   },
//   configurable: true
// });

if( 'true' == setDC()){
(function(w,d,s,r,k,h,m){
	if(w.performance && w.performance.timing && w.performance.navigation) {
		w[r] = w[r] || function(){(w[r].q = w[r].q || []).push(arguments)};
		h=d.createElement('script');h.async=true;h.setAttribute('src',s+k);
		d.getElementsByTagName('head')[0].appendChild(h);
		(m = window.onerror),(window.onerror = function (b, c, d, f, g) {
		m && m(b, c, d, f, g),g || (g = new Error(b)),(w[r].q = w[r].q || []).push(["captureException",g]);})
	}
})(window,document,'//static.site24x7rum.in/beacon/site24x7rum-min.js?appKey=','s247r','c9393037c1de76d77fe0dc1de5516349');
}else{
(function(w,d,s,r,k,h,m){
	if(w.performance && w.performance.timing && w.performance.navigation) {
		w[r] = w[r] || function(){(w[r].q = w[r].q || []).push(arguments)};
		h=d.createElement('script');h.async=true;h.setAttribute('src',s+k);
		d.getElementsByTagName('head')[0].appendChild(h);
		(m = window.onerror),(window.onerror = function (b, c, d, f, g) {
		m && m(b, c, d, f, g),g || (g = new Error(b)),(w[r].q = w[r].q || []).push(["captureException",g]);})
	}
})(window,document,'//static.site24x7rum.eu/beacon/site24x7rum-min.js?appKey=','s247r','afc8510a56cf1004f9024d9d121f2563');
}
s247r('setWaterfallsSamplingRate',1);
s247r('userId',getRandomName());
const allowedUrls = [
            /.*/
        ];
s247r('recordSession',{//No I18N
    "recordingSamplingRate": 0.5,
    "trackEvents":true,//No I18N
    "trackConsoleEvents":true,//No I18N
    "captureAllWaterfalls":false,//No I18N
    "maskAllInput":true,//No I18N
    "maskAllText":true,//No I18N
    "collectNetworkDetails":true,//No I18N
    "allowedNetworkUrls": allowedUrls//No I18N
});
