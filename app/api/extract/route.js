import connectMongoDB from "@/libs/mongodb" ;
import { NextRequest, NextResponse } from "next/server";

const PDFExtract = require("pdf.js-extract").PDFExtract;
const pdfExtract = new PDFExtract();
const fs = require("fs");


export async function POST(request : NextRequest){
   
}