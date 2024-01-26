import '../css/testimonio.css'
// const img = require.context('../imagenes')

function Testimonio({nombre, pais, cargo, empresa, testimonio, alt, imagen}) {
  
  return (
    <div className='contenedor-testimonio'>
      <img 
      className='imagen-testimonio'
       src={`../../imagenes/${imagen}.png`}
      alt={alt}/>
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'> <strong>{nombre}</strong> en {pais}</p>
        <p className='cargo-testimonio'>{cargo} en <strong>{empresa}</strong></p>
        <p className='texto-testimonio'>"{testimonio}"</p>
      </div>
    </div>
    
  )
}

export default Testimonio