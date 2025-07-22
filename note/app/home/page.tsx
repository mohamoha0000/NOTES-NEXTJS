'use client';
import axios from 'axios';
import { useRouter } from 'next/navigation'
import { useEffect } from 'react';

const apiUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

export default function Home(){
    const router = useRouter();
    useEffect(() => {
  const verifyUser = async () => {
    try {
      await axios.get(`${apiUrl}/auth/verify`, { withCredentials: true });
    } catch (err: any) {
        router.push('/login');
    }
  };

  verifyUser();
   }, []);
    return (
        <>
          <h1>welcome mohamed el meayouf</h1>
          <button className="text-red-500">logaout</button>
        </>
    )
}