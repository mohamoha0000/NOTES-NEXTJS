import axios from 'axios';
import { useRouter } from 'next/navigation'


const apiUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

export default function Home(){
    const router = useRouter();
    try{
        axios.get(`${apiUrl}/auth/verify`, { withCredentials: true });
    }catch(err:any){
        router.push('/login');
    }
    return (
        <>
          <h1>welcome mohamed el meayouf</h1>
          <button className="text-red-500">logaout</button>
        </>
    )
}