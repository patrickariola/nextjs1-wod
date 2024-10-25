'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './style.css';
import TopMenu from '../components/TopMenu';
import SecondMenu from '../components/SecondMenu';
import CenterImage from '../components/CenterImage';
import Footer from '../components/Footer';

const AlohaBeer = () => (
  <main>
    <TopMenu />
    <SecondMenu />
    <CenterImage />
    <Footer />
  </main>
  );

export default AlohaBeer;
