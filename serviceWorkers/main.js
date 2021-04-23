
const filesToCache=[
    '/',
    'css/style.css',
    '/favicon.ico',
    'js/script.js',
    'js/output.min.js',
    'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
    'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js',
    'https://cdn.jsdelivr.net/npm/uikit@3.6.16/dist/js/uikit.min.js',
    'https://cdn.jsdelivr.net/npm/uikit@3.6.16/dist/css/uikit.min.css',
    'https://www.googletagmanager.com/gtag/js?id=G-37TRNTCP6D',
    '/images/mockupMobile.png',
    'images/parallax.jpg',
    '/images/Kumar Saptam.jpg',
    'images/sectionBackground2.jpg',
    'images/heart.svg',
    'favicon2.ico',
    'images/javaCode.jpg',
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