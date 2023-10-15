import React, { useState } from 'react';
import recipes from '../recipes';
import Modal from 'react-modal';

const Menu = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const openModal = (recipe) => {
    setSelectedRecipe(recipe);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedRecipe(null);
    setModalIsOpen(false);
  };

  const handleOrder = () => {
    closeModal();
  };

  return (
    <div className="menu-container">
      <div className="menu-header">
        <h2>This week's specials!</h2>
        <button>Online Menu</button>
      </div>
      <div className="cards">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="menu-items">
            <img src={recipe.image} alt={recipe.title} />
            <div className="menu-content">
              <div className="heading">
                <h5>{recipe.title}</h5>
                <p>${recipe.price}</p>
              </div>
              <p>{recipe.description}</p>
              <button className="orderbtn" onClick={() => openModal(recipe)}>
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        {selectedRecipe && (
          <div>
            <h2>Order Confirmation</h2>
            <p>Do you want to order {selectedRecipe.title}?</p>
            <button onClick={handleOrder}>Yes, order it!</button>
            <button onClick={closeModal}>Cancel</button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Menu;
