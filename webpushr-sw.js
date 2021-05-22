importScripts('https://www.gstatic.com/firebasejs/8.5.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.5.0/firebase-messaging.js');
importScripts('https://cdn.webpushr.com/sw-server.min.js');
var firebaseConfig = {
    apiKey: "AIzaSyDcBtiZKm1UQmBx40EMY0wweMIxUXXmB8g",
    projectId: "sapython-f016a",
    messagingSenderId: "796109016505",
    appId: "1:796109016505:web:071d0ecf3d25f5ad8afa68",
};
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

const filesToCache=[
    '/',
    'css/style.css',
    '/favicon.ico',
    'https://res.cloudinary.com/sapython/raw/upload/v1619788258/javascripts/script_xatbvo.js',
    'https://res.cloudinary.com/sapython/raw/upload/v1619788257/javascripts/output.min_jevqnr.js',
    'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css',
    'https://cdn.jsdelivr.net/npm/uikit@3.6.16/dist/js/uikit.min.js',
    'https://cdn.jsdelivr.net/npm/uikit@3.6.16/dist/css/uikit.min.css',
    'https://www.googletagmanager.com/gtag/js?id=G-37TRNTCP6D',
    'https://sapython.me/images/Sapython-Banner.webp',
    'https://res.cloudinary.com/sapython/image/upload/v1619787472/mockupMobile_yfc8zb.webp',
    'https://res.cloudinary.com/sapython/image/upload/v1619787039/parallax_vwkej4.webp',
    'https://res.cloudinary.com/sapython/image/upload/v1619787038/parallax2_ejgwfh.webp',
    'https://res.cloudinary.com/sapython/image/upload/v1619787018/Kumar_Saptam_kshcsk.jpg',
    'https://res.cloudinary.com/sapython/image/upload/v1619786993/sectionBackground2_lxezcc.webp',
    'images/heart.svg',
    'favicon2.ico',
    'https://res.cloudinary.com/sapython/image/upload/v1619788430/javaCode_bae7z2.jpg',
    'https://badges.razorpay.com/badge-dark.png',
    'https://trustlock.co/wp-content/uploads/2019/01/ssl-checkout-trust-seal.png',
    'https://trustlock.co/wp-content/uploads/2019/01/guaranteed-safe-checkout-5.png',
    'https://www.webwiki.com/etc/rating/widget/1336578861/sapython-me-rating-round-220.png',
    'https://sapython.me/images/logo.png',
    'https://sapython.me/images/Sapython-Banner.webp',
    'https://sapython.me/images/logoFull.png',
];

self.addEventListener('install',function(event){
    event.waitUntil(
        caches.open('sw-cache').then(function(cache) {
            cache.addAll(filesToCache);
        })
    )
})

self.addEventListener('fetch',function (event){
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    )
})