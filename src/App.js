import React from 'react';
import './App.css';
import Business from './components/business';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: [
        {
          imageSrc: '',
          name: 'MarginOtto Pfizzeria',
          address: '1010 Paddington Way',
          city: 'Flavortown',
          state: 'NY',
          zipCode: '10101',
          category: 'Italian',
          rating: 4.5,
          reviewCount: 90,
        },
        // Add more hardcoded businesses as needed  git init ravenous

      ],
    };
  }

  render() {
    return (
      <div className="App">
        {/* other components go here */}
        {this.state.businesses.map((business, index) => (
          <Business key={index} business={business} />
        ))}
      </div>
    );
  }
}

export default App;

