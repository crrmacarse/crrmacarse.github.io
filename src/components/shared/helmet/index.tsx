import React from 'react'
import { Helmet } from 'react-helmet';

const BASE_TITLE = '@crrmacarse';

// @TODO: Research more
{/* <Helmet title={pathname} /> */}
const ReactHelmet = ({ title }: { title: string }) => {
    const cleaned = title.replace(/\//, '');
    const newTitle = `${BASE_TITLE} | ${cleaned}`;

    return <div>
        <Helmet>
            <title>{newTitle}</title>
        </Helmet>
    </div>

};

export default ReactHelmet;