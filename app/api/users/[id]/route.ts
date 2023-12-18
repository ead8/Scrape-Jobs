import { notFound } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export function GET(request:NextRequest,{params:{id}}:{params:{id:number}}){
    if(id>10)
        return NextResponse.json({Error: "user Not Found"},{status:404});
    return NextResponse.json({name:"mohammed",age:33});
}

export async function PUT(request:NextRequest,{params:{id}}:{params:{id:number}}){
    const body=await request.json();

    if (!body.email)
        return NextResponse.json({error:"email is required"},{status:400});
    if(id>13)
        return NextResponse.json({error:"usemail not found "},{status:404})
    return NextResponse.json({id:12,email:body.email})
}