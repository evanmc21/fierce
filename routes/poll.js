const express = require('express');
const router = express.Router();

const Pusher = require('pusher');

var pusher = new Pusher({
    appId: '643445',
    key: 'f464853f6e96d7521429',
    secret: '5e68b67e4fd58f3e0589',
    cluster: 'us2',
    encrypted: true
});

router.get('/', (req, res) => {
    res.send('POLL');
});

router.post('/', (req, res) => {
    pusher.trigger('star-poll', 'star-vote', {
        points: 1,
        star: req.body.star
    });

    return res.json({ success: true, message: 'Thanks for your vote!'})
});

module.exports = router;