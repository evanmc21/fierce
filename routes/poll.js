const express = require('express');
const router = express.Router();
const Pusher = require('pusher');
const Vote = require('../models/Vote');
const keys = require('../config/keys')

var pusher = new Pusher({
    appId: keys.appID,
    key: keys.key,
    secret: keys.secret,
    cluster: keys.cluster,
    encrypted: true
});

router.get('/', (req, res) => {
    Vote.find().then(votes => res.json({ success: true, votes: votes }));
});

router.post('/', (req, res) => {
    // save to database before rendering to client
    const newVote = {
        star: req.body.star,
        points: 1
    }

    new Vote(newVote).save().then(vote => {
        pusher.trigger('star-poll', 'star-vote', {
            points: parseInt(vote.points),
            star: vote.star
        });

        return res.json({ success: true, message: 'Thanks for your vote!' })
    })

});

module.exports = router;