const DiscordStrategy = require('passport-discord').Strategy;
const passport = require('passport');
const User = require('../models/User');

passport.use(new DiscordStrategy({
  clientID: process.env.DISCORD_CLIENT_ID,
  clientSecret: process.env.DISCORD_CLIENT_SECRET,
  callbackURL: '/auth/discord/callback',
  scope: ['identify']
}, async (accessToken, refreshToken, profile, done) => {
  const user = await User.findOneAndUpdate(
    { discordId: profile.id },
    { username: profile.username, avatar: profile.avatar },
    { upsert: true, new: true }
  );
  return done(null, user);
}));