const express1 = require('express');
const router = express1.Router();

const json = {
    'items': [
        {
            'title': 'Be a winner!',
            'type': 'video',
            'source': 'youtube',
            'videoId': 'I33u_EHLI3w',
            'views': 12451409
        },
        {
            'title': 'How to prepare a great beer',
            'type': 'video',
            'source': 'facebook',
            'videoId': '1052114818157758',
            'views': 4569654
        },
        {
            'type': 'video',
            'source': 'url',
            'url': 'http://cdn.playbuzz.com/content/feed/video-1.mp4',
            'views': 8820
        },
        {
            'title': 'Top 10 fastest cars in the world',
            'type': 'video',
            'source': 'youtube',
            'videoId': 'h8MbhS5XKow',
            'views': 25560867
        },
        {
            'title': 'A funny dog barking',
            'type': 'video',
            'source': 'youtube',
            'videoId': 'MveqXxB12YA',
            'views': 4287171
        }
    ]
};

router.get('/', (req, res) => {
    console.log('**********************************');
    res.send('json');
});

module.exports = router;
