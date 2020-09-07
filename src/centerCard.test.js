import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { CenterCard } from './centerCard';

describe('CenterCard', () => {
  it('checks for text', () => {
    const history = createMemoryHistory();
    const hall = 'Alvan';
    const building = 'Taj';
    const price = 200;
    const capacity = 300;
    render(
      <Router history={history}>
        <CenterCard
          building={building}
          hall={hall}
          price={price}
          capacity={capacity}
        />
      </Router>,
    );
    expect(screen.queryByText(/click here for details/)).toBeInTheDocument();
    expect(screen.queryByText(/Alvan/));
    expect(screen.queryByText(/Taj/));
    expect(screen.queryByText(/200/));
    expect(screen.queryByText(/300/));
  });
});
