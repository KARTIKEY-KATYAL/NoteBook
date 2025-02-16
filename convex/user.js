import { mutation } from "./_generated/server";
import {v} from "convex/values"

export const CreateUser = mutation({
    args:{
        userName:v.string(),
        email:v.string(),
        imageURL:v.string()
    },
    handler:async(ctx,args)=>{
        // Check if User Exist
            const user = await ctx.db.query('users').filter((q)=>q.eq(q.field('email'),args.email)).collect()
        // If Not Insert User Entry
            if (user?.length == 0){
                await ctx.db.insert('users',{
                    email:args.email,
                    userName:args.userName,
                    imageURL:args.imageURL
                })

                return 'Inserted New User...'
            }

            return 'User Already Exist...'
    }
})