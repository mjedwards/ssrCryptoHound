import React from 'react';
import { Menu } from 'semantic-ui-react'
import styles from '../../styles/pagination.module.css';


const Pagination = ({ assetsPerPage, totalAssets, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalAssets / assetsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <Menu className={styles.pagination} inverted>
        {pageNumbers.map(number => (
          <Menu.Item key={number} className='page-item' as='a' onClick={() => paginate(number)}>
              {number}
          </Menu.Item>
        ))}
      </Menu>
    </nav>
  );
};

export default Pagination;