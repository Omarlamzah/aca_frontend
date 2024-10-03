import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


import ReactReadMoreReadLess from "react-read-more-read-less";

export default function Cardslider({ title, desc, img,icon }) {
  return (
    <div className="">
    <Card className="text-black bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
      <CardHeader className="flex flex-col items-center">
        <div  className=" hidden text-green-300 text-4xl mb-4">{icon}</div>
        <CardTitle className="text-green-500 text-2xl font-bold mb-2 text-center">{title}</CardTitle>
        <CardDescription className="text-gray-700 text-sm text-center leading-relaxed">
          <ReactReadMoreReadLess
            charLimit={150}
            readMoreText={"Voir plus ▼"}
            readLessText={"Voir moins ▲"}
            className="mt-2 text-green-600"
          >
            {desc}
          </ReactReadMoreReadLess>
        </CardDescription>
      </CardHeader>
    </Card>
  </div>
  
  );
}
