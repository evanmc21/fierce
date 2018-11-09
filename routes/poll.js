const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Pusher = require('pusher');
const Vote = require('../models/Vote');

var pusher = new Pusher({
    appId: '643445',
    key: 'f464853f6e96d7521429',
    secret: '5e68b67e4fd58f3e0589',
    cluster: 'us2',
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