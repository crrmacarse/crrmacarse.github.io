import orderBy from 'lodash/orderBy';
import Card from './card';

// @TODO:
// add filter here to personal and company related projects
// add pagination?
const PortfolioPage = () => (
    <div className="portfolio-section">
      <ul className="portfolio-section__grid w-11/12 mx-auto">
        {true && <p>Fetching...</p>}
        {orderBy([], 'priority').map((project: any, key: number) => (
          <li key={key} className="lg:mx-auto">
            <Card {...project} />
          </li>
        ))}
      </ul>
    </div>
  );

export default PortfolioPage;
