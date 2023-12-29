import React, { useState } from 'react';

const Modal = ({ closeModal, imageURL, description}) => {
  return (
    <div className="fixed top-0 left-1/2 transform -translate-x-1/2 w-full h-screen flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-md overflow-y-auto">
  <div className="relative w-full max-w-3xl mx-auto my-auto">
    <div className="flex flex-row">
      <div className="flex flex-col w-1/2 ">
        <img src={imageURL} alt="Project" className="w-full h-full rounded-lg" />
      </div>

      <div className="w-1/2 p-[100px]">
        <p className="text-xl font-bold mb-4">Project Description:</p>
        <p>{description}</p>
      </div>
    </div>

    <button onClick={closeModal} className="absolute top-0 right-0 text-white text-2xl cursor-pointer">
      &times;
    </button>
  </div>
</div>

  );
}



const Projects = () => {
  
  const PhotosWeb = [
    {
      image:'/realisations/web/todolist.png',
      placeholderImage:'/realisations/web/todolist.png',
      description:"Le site offre une liste de tâches à accomplir avec une date précise, permettant aux utilisateurs d'ajouter leurs propres tâches Développé avec : HTML,CSS et Javascipt"
    },
    {
      image:'/realisations/web/rock-paper-scissor.png',
      placeholderImage:'/realisations/web/rock-paper-scissors-placeholder.png',
      description:"Site qui propose un jeu de pierre-papier-ciseaux à jouer contre l'ordinateur avec fonction de lecture automatique. Développé avec : HTML,CSS et Javascipt"
    },
    {
      image:'/realisations/web/react/add.png',
      placeholderImage:'/realisations/web/react/placeholder.png',
      description:"Un site de Blogs dynamique, il offre la possibilité de créer, modifier, consulter les détails et supprimer les blogs en toute simplicité. Développé avec : React JS, HTML, Tailwind And JSON Server"
    },
    {
      image:'/realisations/web/react/todolist.png',
      placeholderImage:'/realisations/web/react/todolist.png',
      description:"L'interface offre une liste de tâches à accomplir, permettant aux utilisateurs d'ajouter leurs propres tâches Développé avec : React JS et Tailwind"
    },
    {
      image:'/realisations/web/JSON/blogs.png',
      placeholderImage:'/realisations/web/JSON/create.png',
      description:"Un site de Blogs dynamique, il offre la possibilité de créer, modifier, consulter les détails et supprimer les blogs en toute simplicité. Développé avec : HTML, Tailwind, Javascript with JSON Server"
    },
    {
      image:'/realisations/web/sonatrach/sonatrach.png',
      placeholderImage:'/realisations/web/sonatrach/2.png',
      description:"Conception et réalisation d'un Système d'information Géographique(SIG) pour la gestion des périmètres d'exploration. Développé avec : HTML,CSS, Bootstrap, Javascipt, PHP, Laravel, leaflet, HeidiSQL,"
    },
    {
      image:'/realisations/web/infrarail/infrarail1.png',
      placeholderImage:'/realisations/web/infrarail/placeholder.png',
      description:"Site dynamique pour une entreprise ferroviaire. Développé avec : HTML/CSS, Booststrap, Javascipt, PHP, MySql"
    },
  ];

  const PhotosEcommerce = [
    {
      image:'/realisations/e-commerce/amazon/amazon.png',
      placeholderImage:'/realisations/e-commerce/amazon/index.png',
      description:"Site vente et achat des vêtements (Amazon design). Développé avec : Python, Django, Bootstrap, HTML, JavaScript"
    },
    {
      image:'/realisations/e-commerce/ecom-python/shop-index.png',
      placeholderImage:'/realisations/e-commerce/ecom-python/placeholder.png',
      description:"Site vente et achat des vêtements (e-commerce). Développé avec : Python, Django, Bootstrap, HTML, JavaScript"
    },
  ];

  const PhotosDesign = [
    {
      image:'/realisations/design/portfolio-figma/portfolio.png',
      placeholderImage:'/realisations/design/portfolio-figma/placeholder.png',
      description:"Ce design expose mes compétences, mes projets, mes réalisations et mon expertise dans le domaine du développement web .Fait avec: Figma "
    },{
      image:'/realisations/design/portfolio-canva/portfolio-canva.png',
      placeholderImage:'/realisations/design/portfolio-canva/2.png',
      description:"Ce design expose mes compétences, mes projets, mes réalisations et mon expertise dans le domaine du développement web .Fait avec: Canva"
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState('Web');

  const [selectedImage, setSelectedImage] = useState(null);

  if(selectedImage) {
    document.body.classList.add('active-modal')
  } else {
      document.body.classList.remove('active-modal')
  } 

  const openModal = (imageURL) => {
    setSelectedImage(imageURL);
  }

  const closeModal = (imageURL) => {
    setSelectedImage(null);
  }

  const renderPhotoGallery = () => {
    let photos = [];

    switch (selectedCategory) {
      case 'Web':
        photos = PhotosWeb;
        break;
      case 'E-commerce website':
        photos = PhotosEcommerce;
        break;
      case 'Design':
        photos = PhotosDesign;
        break;
      default:
        break;
    }

    return (
      <div className='flex justify-center'>
        <div className="grid grid-cols-3 gap-4 mt-10">
          {photos.map((link, index) => (
            <div key={index} className="relative">
              
              <img
                src={selectedImage === link ? link.image : link.placeholderImage}
                alt="Project"
                onClick={() => openModal(link)}
                className="w-[300px] h-[140px] rounded-[40px] transition-opacity ease-in-out duration-300"
              />

              {selectedImage !== link && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-[40px]">
                  <button onClick={()=> openModal(link)} className="text-white">Click to view</button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div id='Projects' className="text-white text-center mt-16">
      <p className="text-2xl font-bold mb-3">Projects</p>
      <div className="flex flex-row justify-center">
        <button
          onClick={() => setSelectedCategory('Web')}
          className={`border border-white px-16 py-2 rounded-l-[20px] ${
            selectedCategory === 'Web' ? 'bg-gradient-to-r from-fuchsia-500 to-55106D' : ''
          }`}>Web
        </button>


        <button
          onClick={() => setSelectedCategory('E-commerce website')}
          className={`border border-white px-12 py-2 ${
            selectedCategory === 'E-commerce website' ? ' bg-gradient-to-r from-fuchsia-500 to-55106D' : ''
          }`}>E-commerce website
        </button>


        <button
          onClick={() => setSelectedCategory('Design')}
          className={`border border-white px-16 py-2 rounded-r-[20px] ${
            selectedCategory === 'Design' ? 'bg-gradient-to-r from-fuchsia-500 to-55106D' : ''
          }`}>Design
        </button>


      </div>
      {renderPhotoGallery()}
      {selectedImage && (
        <Modal closeModal={closeModal}  imageURL={selectedImage.image} description={selectedImage.description} />
      )}
    </div>
  );
};

export default Projects;
