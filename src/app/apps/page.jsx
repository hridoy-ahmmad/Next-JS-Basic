import AppCard from '@/essentials/AppCard';
import React from 'react';

const appsPromise = async () => {
    const res = await fetch('http://localhost:3000/data.json')
    return res.json()
}

const AppsPage = async () => {
    const apps = await appsPromise()

    return (
        <div>
            <h1>All Apps</h1>
            <div className='grid grid-cols-5 gap-5 mx-auto container'>
                {
                    apps.map((app, index) => {
                        return <AppCard app={app} key={index}></AppCard>

                    })
                }
            </div>
        </div>
    );
};

export default AppsPage;