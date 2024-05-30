import passport from "passport";
import { Strategy } from "passport-local";
const localStrategy = Strategy;
import bCrypt from "bcrypt-nodejs";
import  db  from "../../database/db.js";

passport.serializeUser((user, done) => {
  return done(null, user.id_admin);
});

passport.deserializeUser(async (id, done) => {
  const user = await db.Admin.findByPk(id);
  return done(null, user);
});

passport.use(
  "Login",
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true,
    },
    (req, email, password, done) => {
      const compareEncrypt = function (passwordSent, passwordDb) {
        return bCrypt.compareSync(passwordSent, passwordDb);
      };

      db.Admin.findOne({ where: { email } })
        .then((userAnswer) => {
          if (!userAnswer) {
            return done(null, false, {
              message: "Error in login",
            });
          } else if (compareEncrypt(password, userAnswer.password)) {
            return done(null, userAnswer);
          } else {
            return done(null, false);
          }
        })
        .catch((e) => {
          console.error(e);
          return done(e, false);
        });
    },
  ),
);
