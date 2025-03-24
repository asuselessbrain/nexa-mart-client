"use server"

import { FieldValues } from "react-hook-form"

export const registerAction = async(data: FieldValues) => {
    try{
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/user`,{
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        return res.json()
    }catch(error:any){
       return Error(error)
    }
}

export const loginAction = async(data: FieldValues) => {
    try{
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/auth/login`,{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        return res.json()
    }catch(error: any){
        return Error(error)
    }
}