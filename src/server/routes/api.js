const express = require('express');
const router = express.Router();
const _ = require('lodash');
const http = require('http');
const pbCdnFeed = "http://cdn.playbuzz.com/content/feed/items";

const extractFilter = (req) => {
    const sources = _.split(req.query.filter, ',');
    const filter = video => {
        const source = _.find(sources, src => src === video.source);
        return !_.isUndefined(source);
    };
    return filter;
};

router.get('/', (req, res) => {
    http.get(pbCdnFeed, (response) => {
        response.on('data', function (str) {
            const videos = JSON.parse(str);
            const filterBy = extractFilter(req);
            const items = _.filter(videos.items, filterBy );
            res.send({ items })
        });
    });
});

module.exports = router;
