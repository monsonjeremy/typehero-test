import React from 'react';
import Image from 'next/image';
import { Card, CardHeader, CardContent, CardDescription, CardTitle } from '@repo/ui/components/card';

export default function Component() {
  return (
    <div className="bg-cover bg-center text-white py-24 px-10 object-fill" style={{ backgroundImage: `url(https://file.rendit.io/n/p.png)` }}>
      <Card className="max-w-md mx-auto bg-primary-800 shadow-lg rounded-lg overflow-hidden">
        <CardHeader className="flex justify-end items-center pt-6 pr-6">
          
        </CardHeader>
        <CardContent className="py-10 text-center">
          <CardTitle className="text-3xl uppercase tracking-wide">TypeHero</CardTitle>
          <CardDescription className="text-xl leading-relaxed mt-4 mb-12 mx-14 font-thin">
            The ultimate hero for all your typing needs. Get started today!
          </CardDescription>
        </CardContent>
      </Card>
    </div >
  );
}