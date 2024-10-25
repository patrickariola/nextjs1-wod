'use client';

const SecondMenu = () => (
 
    <div className="navbar white-background">
      <nav className="container-fluid justify-content-start">
        <ul className="nav justify-content-start">
          <li className="nav-item">
            <a className="navbar-brand ps-5">
              <img
                src="/beerlogo.png"
                alt="Logo"
                style={{ width: '120px', height: '100px' }}
                className="ps-3 pb-2"
              />
            </a>
          </li>
        </ul>
        <ul className="nav justify-content-end" id="topMenu" style={{ display: 'flex', alignItems: 'center' }}>
          {['Location & Menus', 'Events', 'Brewery', 'Shop'].map((item, index) => (
            <li key={index} className="nav-item" style={{ marginTop: '0px', marginRight: '5px' }}>
              <a
                className="nav-link"
                href="#"
                style={{
                  color: item === 'Shop' ? '#EDC601' : 'black',
                }}
              >
                {item}
              </a>
            </li>
          ))}
          <li className="nav-item" style={{ marginTop: '0px', marginLeft: '180px', marginRight: '5px' }}>
            <a
              className="nav-link"
              href="#"
              style={{
                color: 'black', 
              }}
            >
              Account
            </a>
          </li>
          <li className="nav-item" style={{ marginTop: '0px', marginRight: '5px' }}>
            <a className="nav-link" href="#">
              Search <i className="bi bi-search"></i>
            </a>
          </li>
          <li className="nav-item" style={{ marginTop: '0px', marginRight: '5px' }}>
            <a className="nav-link" href="#">
              Cart <i className="bi bi-cart"></i>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );


export default SecondMenu;
