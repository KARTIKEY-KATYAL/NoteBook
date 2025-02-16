"use client"
import { UserButton, useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { useMutation } from "convex/react";
import { useEffect } from "react";

import { api } from "@/convex/_generated/api";

export default function Home() {

  const {user} = useUser()

  const CreateUser = useMutation(api.user.CreateUser);

  useEffect(() => {
    user&&CheckUser()
  }, [user])
  

  const CheckUser = async ()=>{
    const result = await CreateUser({
      email:user?.primaryEmailAddress?.emailAddress,
      userName:user?.fullName,
      imageURL:user?.imageUrl
    })

    console.log(result);
    
  }
  return (
    <div>
      <h1>Hello world</h1>
      <Button>Hello</Button>
      <UserButton/>
    </div>
  );
}
