import React from 'react';



export const metadata = {
    title: 'Apps Details 🥹',
    description: 'very good apps vai.Please Download🥹'
}



const AppsDetails = async ({ params }) => {
    const id = await params
    console.log('id is=', id.slug);

    return (
        <div>
            Apps Details page
        </div>
    );
};

export default AppsDetails;