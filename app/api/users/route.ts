import { notFound } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export function GET(request:NextRequest,{params:{id}}:{params:{id:number}}){
    if(id>10)
        return NextResponse.json({Error: "user Not Found"},{status:404});
    return NextResponse.json({name:"mohammed",age:33});
}

export async function POST(request:NextRequest){
    const body=await request.json();
    return NextResponse.json(body);
}