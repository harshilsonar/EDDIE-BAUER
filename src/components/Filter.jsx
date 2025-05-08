const Filter = ({ filters, setFilters }) => {
    const genders = ['Men', 'Women'];
    const prices = [
      { label: 'Below $50', value: 'below50' },
      { label: '$50 - $100', value: '50to100' },
      { label: '$100-$150', value: '100to150' },
      { label: '$150-$200', value: '150to200' },
      { label: 'Above $250', value: 'above250' },
    ];
  
    const handleCheckboxChange = (type, value) => {
      setFilters(prev => {
        const alreadySelected = prev[type].includes(value);
        const updatedValues = alreadySelected
          ? prev[type].filter(item => item !== value)
          : [...prev[type], value];
        return { ...prev, [type]: updatedValues };
      });
    };
  
    return (
      <div className="w-full sm:w-1/4 mb-6 sm:mb-0 sm:pr-4 mt-0">
        <div className=" p-4   space-y-4">
          {/* Main dropdown */}
          <div>
            <h3 className="font-semibold mb-2">Filters</h3>
            <div className="relative">
              <select className="block w-full  p-2 rounded-md" defaultValue="">
                <option value="" disabled>Select Filter</option>
                <option value="gender">Gender</option>
                <option value="price">Price</option>
              </select>
            </div>
  
            {/* Gender Dropdown */}
            <div className="mt-4">
              <h3 className="font-semibold mb-2">Gender</h3>
              <div className="relative">
                <select
                  className="block w-full  p-2 rounded-md"
                  onChange={(e) => handleCheckboxChange('gender', e.target.value)}
                  defaultValue=""
                >
                  <option value="" disabled>Select Gender</option>
                  {genders.map(gender => (
                    <option key={gender} value={gender}>{gender}</option>
                  ))}
                </select>
              </div>
            </div>
  
            {/* Price Dropdown */}
            <div className="mt-4">
              <h3 className="font-semibold mb-2">Price</h3>
              <div className="relative">
                <select
                  className="block w-full  p-2 rounded-md"
                  onChange={(e) => handleCheckboxChange('price', e.target.value)}
                  defaultValue=""
                >
                  <option value="" disabled>Select Price Range</option>
                  {prices.map(price => (
                    <option key={price.value} value={price.value}>{price.label}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Filter;
  