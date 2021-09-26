import JWTPassport from "passport-jwt";

//database models
import { UserModel } from "../database/user";

const JWTStratergy=JWTPassport.Strategy;
const ExtractJwt=JWTPassport.ExtractJwt;

const options={
    jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey:"ZomatoAPP",
};

export default(passport)=>{
    passport.use(
    new JWTStratergy(options,async(jwt__payload,done)=>{
        try{
          const doesUserExist=UserModel.findById(jwt__payload.user);
          if(!doesUserExist)return done(null,false);

          return done(null,doesUserExist);
        }catch(error){
            throw new Error(error);
        }
    })
    );
};