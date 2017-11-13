const express1 = require('express');
const router = express1.Router();
const _ = require('lodash');
const pbCdnFeed = "http://cdn.playbuzz.com/content/feed/items";


router.get('/', (req, res) => {
    const { filter } = req.query;
    const sources = filter.split(',');
    const http = require('http');
    const request = http.get(pbCdnFeed, (response) => {
        response.on('data', function (chunk) {
            const data = JSON.parse(chunk);
            const filtered = _.filter(data.items, video => {
                const shouldDisplay = _.find(sources, source => source === video.source);
                return !_.isUndefined(shouldDisplay);
            });
            res.send({ items: filtered })
        });
    });
});

module.exports = router;
