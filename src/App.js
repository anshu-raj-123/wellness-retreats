import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import YogaSection from './components/YogaSection';
import FilterBar from './components/FilterBar';
import RetreatCard from './components/RetreatCard';
import Pagination from './components/Pagination';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  const [retreats, setRetreats] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDate, setFilterDate] = useState('');
  const [filterType, setFilterType] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchRetreats = async () => {
      const response = await axios.get('https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats');
      setRetreats(response.data);
    };

    fetchRetreats();
  }, []);

  const filteredRetreats = retreats
    .filter((retreat) => retreat.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter((retreat) => (filterDate ? retreat.date === parseInt(filterDate) : true))
    .filter((retreat) => (filterType ? retreat.type === filterType : true));

  const retreatsPerPage = 3;
  const paginatedRetreats = filteredRetreats.slice((page - 1) * retreatsPerPage, page * retreatsPerPage);

  const handleNextPage = () => {
    if ((page * retreatsPerPage) < filteredRetreats.length) {
      setPage(page + 1);
    }
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <div className="app">
      <Header />
      <YogaSection />
      <FilterBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filterDate={filterDate}
        setFilterDate={setFilterDate}
        filterType={filterType}
        setFilterType={setFilterType}
      />
      <div className="retreats-container">
        {paginatedRetreats.map((retreat) => (
          <RetreatCard key={retreat.id} retreat={retreat} />
        ))}
      </div>
      <Pagination
        page={page}
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
      />
       <Footer />
    </div>
  );
};

export default App;
