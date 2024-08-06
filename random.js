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
  return randomName;
  
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
s247r('recordSession',setReplay());
