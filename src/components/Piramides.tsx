/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import '../styles/Piramides.css';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Box } from '@mui/material';
import { BiCollapse } from 'react-icons/bi';
import { listProducts } from '../ts/listProducts';

function Piramides() {
  const [openProduct, setOpenProduct] = React.useState(null);

  const handleOpen = (product: any) => {
    setOpenProduct(product);
  };

  const handleClose = () => {
    setOpenProduct(null);
  };

  return (
    <section className="piramides-container">
      {listProducts.map((products) => products.Piramides.flatMap((product) => (
        <div className="card-piramides" key={ product.product }>
          <h3>{product.product}</h3>
          <img src={ product.img } alt="" onClick={ () => handleOpen(product) } />
          <p>{product.description}</p>
          <p>
            <b>R$:</b>
            {' '}
            {product.price}
          </p>
          <button
            className="btnOpenImg"
            onClick={ () => handleOpen(product) }
          >
            Abrir imagem
          </button>
          <Modal
            open={ openProduct === product }
            onClose={ handleClose }
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box>
              <Typography id="modal-modal-description" sx={ { mt: 2 } }>
                <img id="imgModal-Piramides" src={ product.img } alt="" />
              </Typography>
              <Typography
                onClick={ handleClose }
                id="modal-modal-title"
                variant="h6"
                component="h2"
              >
                <BiCollapse id="closeImg" />
              </Typography>
            </Box>
          </Modal>
        </div>
      )))}
    </section>
  );
}

export default Piramides;
