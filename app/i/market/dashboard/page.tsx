
import { getSession } from 'next-auth/react';
import {auth} from "@/utils/auth" 


export default async function Dashboard() {
    const session = await auth()
    // const [session, setSession] = useState(null);
    // const [metrics, setMetrics] = useState({
    //     sells: 0,
    //     buys: 0,
    //     orders: 0,
    //     products: 0,
    // });
    console.log(session)
const metrics = {
            sells: 0,
            buys: 0,
            orders: 0,
            products: 0,
        }
    

    // useEffect(() => {
    //     const fetchSession = async () => {
    //         const sessionData = await getSession();
    //         setSession(sessionData);
    //         if (sessionData) {
    //             fetchMetrics(sessionData.user.id);
    //         }
    //     };

    //     const fetchMetrics = async (userId) => {
    //         // Replace with your API call to fetch metrics
    //         const response = await fetch(`/api/metrics?userId=${userId}`);
    //         const data = await response.json();
    //         setMetrics(data);
    //     };

    //     fetchSession();
    // }, []);

    // if (!session) {
    //     return <div>Loading...</div>;
    // }

    return (
        <div>
            <h1>Welcome, {session?.user?.name}</h1>
            <div>
                <h2>Dashboard Metrics</h2>
                <ul>
                    <li>Sells: {metrics.sells}</li>
                    <li>Buys: {metrics.buys}</li>
                    <li>Orders: {metrics.orders}</li>
                    <li>Products: {metrics.products}</li>
                </ul>
            </div>
        </div>
    );
};

