const propiedades_alquiler = [
    {
        nombre: 'Departamento 1',
        src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial.',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        costo: 2220,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Departamento 2',
        src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        descripcion: 'Este departamento es ideal para personas que buscan espacio y comodidad.',
        ubicacion: '456 Oak Street, Anytown, CA 91234',
        habitaciones: 3,
        costo: 3330,
        smoke: true,
        pets: false
    },
    
];

const propiedades_venta = [
    {
        nombre: 'Departamento 3',
        src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        descripcion: 'Este departamento está en una ubicación estratégica cerca de la estación de tren y de restaurantes.',
        ubicacion: '789 Elm Street, Anytown, CA 91234',
        habitaciones: 2,
        costo: 2880,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Departamento 4',
        src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        descripcion: 'Este departamento es ideal para personas que buscan un ambiente relajado y cómodo.',
        ubicacion: '321 Birch Street, Anytown, CA 91234',
        habitaciones: 1,
        costo: 1440,
        smoke: false,
        pets: true
    },
     
];  

const renderPropiedades = (propiedades, pagina) => {
  const template = `
     <div class="card" style="width: 18rem;">
       <img class="card-img-top" src="${propiedades.src}" alt="Imagen del departamento">
       <div class="card-body">
         <h5 class="card-title">${propiedades.nombre}</h5>
         <p class="card-text">${propiedades.descripcion}</p>
         <p><i class="fas fa-map-marker-alt"></i> ${propiedades.ubicacion}</p>
         <p><i class="fas fa-bed"></i> ${propiedades.habitaciones} Habitaciones | <i class="fas fa-bath"></i> ${propiedades.bano} Baños</p>
         <p>${propiedades.smoke ? '<i class="fas fa-smoke"></i> Fumar permitido' : '<i class="fas fa-times"></i> Fumar prohibido'}</p>
         <p>${propiedades.pets ? '<i class="fas fa-paw"></i> Mascotas permitidas' : '<i class="fas fa-times"></i> Mascotas prohibidas'}</p>
       </div>
     </div>
  `;
 

  for (let i = 0; i < 3; i++) {
     const div = document.createElement('div');
     div.innerHTML = template;
     pagina.appendChild(div);
  }
 };
 
 const pagina_venta = document.getElementById('propiedades_venta');
 const pagina_alquiler = document.getElementById('propiedades_alquiler');
 
 renderPropiedades(propiedades_venta, pagina_venta);
 renderPropiedades(propiedades_alquiler, pagina_alquiler);