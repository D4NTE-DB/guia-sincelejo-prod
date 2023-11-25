import { useEffect, useState } from 'react'
import './App.css'
import AppNavBar from './components/AppNavBar'
import Cards from './components/Cards'
import DATA from './DATA'
import { Card, Dropdown, Pagination } from 'react-bootstrap'
import { HashRouter, Link, Route, Routes } from 'react-router-dom'
import AboutMe from './components/AboutMe'
import ModalFeature from './components/ModalFeature'
import MyVerticallyCenteredModal from './components/MyVerticallyCenteredModal'
import ModalRandom from './components/ModalRandom'

const initialPage = 1

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [sortedData, setSortedData] = useState(DATA);
  const [isSorted, setIsSorted] = useState(DATA);
  const [show, setShow] = useState(false);
  const [random, setRandom] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [page, setPage] = useState(initialPage)
  const [pantallaPequena, setPantallaPequena] = useState(false);

  useEffect(() => {
    function verificarTamanoPantalla() {
      setPantallaPequena(window.innerWidth < 768); // Define el punto de corte para considerar una pantalla pequeña
      // const dDATA = DATA.slice(0,6)
    }

    // Verificar el tamaño de la pantalla al cargar el componente
    verificarTamanoPantalla();

    // Agregar un event listener para verificar el tamaño de la pantalla cuando cambie
    window.addEventListener('resize', verificarTamanoPantalla);

    // Limpiar el event listener al desmontar el componente
    return () => {
      window.removeEventListener('resize', verificarTamanoPantalla);
    };
    // setPage(1)
  }, []);

  useEffect(() => {
    if (isSorted) {
      // setPage(1)
      setSortedData([...sortedData].sort((a, b) => a.name.localeCompare(b.name)));
    } else {
      // setPage(1)
      setSortedData(DATA);
    }
  }, [isSorted]);

  useEffect(() => {
    setPage(initialPage)
  }, [selectedCategory])

  const uniqueData = DATA.filter((item, index) => {
    return DATA.findIndex(obj => obj?.category === item.category) === index;
  });

  const filteredData = selectedCategory ? DATA.filter(item => (item.category === selectedCategory)) : sortedData;

  const totalPages = Math.ceil(Object.keys(filteredData).length / 8);

  const handleRandom = () => {
    setSortedData([...filteredData].sort(() => Math.random() - 0.5))
    setRandom(true)
  }

  return (
    <HashRouter>

      <div className="App">
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
        <ModalFeature show={show} setShow={setShow} />
        <div style={{ position: 'fixed', width: '100%', zIndex: '1000', top: '-10px' }}>
          {<AppNavBar />}
        </div>
        <ModalRandom data={sortedData} show={random} onHide={() => setRandom(false)} />
        <Dropdown
          className='dropdown-cat'
          drop='down-centered'
        >
          <button
            className={`btn btn-${isSorted ? 'secondary' : 'success'}`}
            onClick={() => setIsSorted(!isSorted)}
          >
            <box-icon name='sort-a-z' style={{ fill: 'white' }}></box-icon>
          </button>
          <Dropdown.Toggle
            variant="success"
            id="dropdown-basic"
            style={{ zIndex: '10' }}
          >
            {selectedCategory ? selectedCategory : 'Categoría'}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item
              className='category-f'
              onClick={() => setSelectedCategory(null)}
            >
              Todas
            </Dropdown.Item>
            {
              uniqueData.map((data) => (

                <Dropdown.Item
                  className='category-f'
                  key={data.id}
                  // onClick={() => setPage(1)}
                  onClick={() => setSelectedCategory(data.category)}
                >
                  {data.category}
                </Dropdown.Item>


              ))
            }

          </Dropdown.Menu>
          <button
            className='btn btn-success'
            style={{ fill: 'white', zIndex: '2' }}
            onClick={handleRandom}
          >
            <box-icon name='shuffle' animation='' ></box-icon>
          </button>
        </Dropdown>
        <div className='pag-item'>
          <Pagination>
            {Array.from({ length: totalPages }).map((_, index) => (
              <Pagination.Item
                key={index + 1}
                active={page === index + 1}
                onClick={() => setPage(index + 1)}
              >
                {index + 1}
              </Pagination.Item>
            ))}
          </Pagination>
        </div>
        <Card className='contact-box'>
          <Card.Body className='contact'>
            {/* <Card.Title
            className='info-title'
          >¡Contactanos para agregar a tu restaurante!</Card.Title> */}
            <div className='div-socials' >
              <Card.Link onClick={() => setModalShow(true)} >
                <box-icon name='info-circle' animation="" size='md'></box-icon>
              </Card.Link>
              <Card.Link className='socials-items' href="https://forms.gle/sFyGSV3ieQqFUhUx8">
                <img src='images/formulario.png' alt="" />
              </Card.Link>
              <Card.Link className='socials-items' href="https://www.instagram.com/foodguiasincelejo/">
                <img src='images/instagram.png' alt="" />
              </Card.Link>

              <Card.Link className='socials-items' href="https://www.facebook.com/foodguiasincelejo/">
                <img src='images/facebook.png' alt="" />
              </Card.Link>
            </div>
          </Card.Body>
        </Card>
        <Routes>
          <Route path='/' element={
            <div className='div-need' style={{ position: 'relative', top: '80px' }}>

              <Link className='info-aboutme' as={Link} to='/about-us'>
                <box-icon name='info-circle' size='md'></box-icon>
              </Link>

              {<Cards data={filteredData} pag={page} view={pantallaPequena} />}
            </div>} />

          <Route path='/about-us' element={<AboutMe />} />

        </Routes>
        <div className="pag-item" style={{ zIndex: '-1' }}>
          <Pagination>
            {Array.from({ length: totalPages }).map((_, index) => (
              <Pagination.Item
                key={index + 1}
                active={page === index + 1}
                onClick={() => setPage(index + 1)}
              >
                {index + 1}
              </Pagination.Item>
            ))}
          </Pagination>
        </div>
      </div>
    </HashRouter>
  )
}

export default App;