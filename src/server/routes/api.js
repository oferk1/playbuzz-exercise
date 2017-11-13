const express1 = require('express');
const router = express1.Router();
const _ = require('lodash');

router.get('/', (req, res) => {
    const { filter } = req.query;
    const sources = filter.split(',');
    const http = require('http');
    const request = http.get("http://cdn.playbuzz.com/content/feed/items", (response) => {
        response.on('data', function (chunk) {
            const data = JSON.parse(chunk);
            const filtered = _.filter(data.items, video => {
                const shouldDisplay = _.find(sources, source => source === video.source);
                console.log(shouldDisplay, "*&*&*&*&*&should", video);
                return !_.isUndefined(shouldDisplay);
            });
            res.send({ items: filtered })
        });
    });
});

module.exports = router;
