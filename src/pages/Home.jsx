import React from 'react';
import Filter from '../Components/Filter';
import Manage from '../Components/Manage';
import JobCategories from '../Components/JobCategories';
import Openjob from '../Components/Openjob';
import Cities from '../Components/Cities';
import Termonologies from '../Components/Termonologies';
import Blackbox from '../Components/Blacbox';
import Banner from '../Components/Banner';
import JobPortal from '../Components/JobPortal';
import CareerTV from '../Components/CareerTV';
import Blog from '../Components/Blog';
import Blackbox2 from '../Components/Blackbox2';
import HiringPartners from '../Components/Hiringpartner';

const Home = () => {
  return (
    <>
      <Filter />
      <Manage />
      <JobCategories />
      <Openjob />
      <Cities />
      <Termonologies />
      <Blackbox />
      <Banner />
      <JobPortal />
      <CareerTV />
      <Blog />
      <Blackbox2 />
      <HiringPartners />
    </>
  );
};

export default Home;
