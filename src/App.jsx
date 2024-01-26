import Testimonio from "./components/Testimonio"
import './app.css'


export default function App() {
  return (
    <div className="App ">
      <div className="contenedor-principal"> 
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
      <Testimonio 
       nombre= 'Emma Bostian'
       pais = 'Sweden'
       cargo = 'Ingeniera de Software'
       empresa = 'Spotify'
       alt = 'foto de Emma'
       imagen = 'Emma'
       testimonio ='Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify.'
      />

      <Testimonio
       nombre= 'Sarah Chima'
       pais = 'Nigeria'
       cargo = 'Ingeniera de Software'
       empresa = 'ChatDesk'
       alt = 'foto de Sarah'
       imagen = 'Sarah'
       testimonio = 'freeCoare. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que ndeCamp fue la puerta de entrada a mi carrera como desarrollador de softwecesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble.'
       
      />
      <Testimonio
       nombre= 'Shawn Wang'
       pais = 'Singapur'
       cargo = 'Ingeniero de Software'
       empresa = 'Amazon'
       alt = 'foto de Shawn'
       imagen ='Shawn'
       testimonio= 'Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida.'
       
      />
      </div>
    </div>
      


  )
}

