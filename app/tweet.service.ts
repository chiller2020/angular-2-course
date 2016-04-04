export class TweetService {
    getTweets() {

        return (
            [{ author: 'Arnold Schwarzeneger', tweetHandle: '@Conan', tweetText: 'Woops', imageUrl: 'http://lorempixel.com/100/100/people', nLikes: 44 },
                { author: 'RandomPerson', tweetHandle: '@Randy', tweetText: 'Hello Sample Tweet schalala', imageUrl: 'http://lorempixel.com/100/100/people?1', nLikes: 28 },
                { author: 'Arno Nymous', tweetHandle: '@Arnon', tweetText: 'Weather is fine today', imageUrl: 'http://lorempixel.com/100/100/people?2', nLikes: 27 },
                { author: 'ReinDeer', tweetHandle: '@Rudolpho', tweetText: 'Im Rudolpho the Rednode Reindeer', imageUrl: 'http://lorempixel.com/100/100/people?3', nLikes: 99 },
                { author: 'TestName', tweetHandle: '@TestHandle', tweetText: 'Hello Sample Tweet schalala', imageUrl: 'http://lorempixel.com/100/100/people?4', nLikes: 59 },
            ]);
    }
}