import { render } from '@testing-library/react';
import Header from '../../components/Header';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Header', () => {
  test('Renders the header', () => {
    const { container } = render(
      <Router>
        <Header />
      </Router>
    
    );
    expect(container).toMatchSnapshot();
  });
});