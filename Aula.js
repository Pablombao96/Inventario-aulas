// ./react-redux-client/src/components/Aula.js
import React from 'react';

export default class Aula extends React.Component {
  componentDidMount(){
    this.props.mappedfetchAulaById(this.props.params.id);
  }

  render(){
    const aulaState = this.props.mappedAulaState;
    return(
      <div className="aulaDetail">
       <h2>Detalles</h2>
         {!aulaState.aula && aulaState.isFetching &&
           <div>
             <p>Cargando aula o sala....</p>
           </div>
         }
       {aulaState.aula && !aulaState.isFetching &&
         <div>
           <h3>{aulaState.aula.nombre_aula}</h3>
           <p><b>Capacidad: </b>{aulaState.aula.capacidad +' personas'}</p>
           <p><b>Cañón:</b></p>
           <b></b>
           <p><b>  - Marca y modelo:</b> {aulaState.aula.canon_marca_modelo}</p>
           <p><b>  - Tipo: </b>{aulaState.aula.canon_tipo}</p>
           <p><b>  - Potencia: </b>{aulaState.aula.canon_potencia_luminosa +' lúmenes' }</p>
           <p><b>  - Instalación HDMI: </b>{aulaState.aula.canon_instalacion_HDMI.toString() }</p>
           <p><b>  - Observaciones: </b>{aulaState.aula.canon_observaciones }</p>
           <p><b>Retroproyector: </b>{aulaState.aula.retroproyector}</p>
           <p><b>Tipo de pizarra:</b> {aulaState.aula.pizarra_tipo}</p>
           <p><b>Tamaño de la pizarra:</b> {aulaState.aula.pizarra_tamaño +' metros de ancho'}</p>
           <p><b>Pantalla:</b></p>
           <p><b>  - Relación de aspecto:</b> {aulaState.aula.pantalla_relacion_aspecto}</p>
           <p><b>  - Tamaño: </b>{aulaState.aula.pantalla_tamano +' metros de ancho'}</p>
           <p><b>  - Estado: </b>{aulaState.aula.pantalla_estado}</p>
           <p><b>  - Eléctrica:</b> {aulaState.aula.pantalla_electrica.toString()}</p>
           <p><b>  - Observaciones:</b> {aulaState.aula.pantalla_observaciones}</p>
           <p><b>Megafonía: </b>{aulaState.aula.megafonia}</p>
           <p><b>Sugerencias: </b>{aulaState.aula.sugerencias_extra}</p>
           <p><b>Mejoras: </b>{aulaState.aula.mejoras_para_proyecto}</p>
           <p><b>Iluminación:</b> {aulaState.aula.iluminacion}</p>
           <p><b>Canaleta para conexiones:</b> {aulaState.aula.canaleta_conectividad}</p>
           <p><b>Aulas especiales:</b></p>
           <p><b>  - Iluminación especial:</b> {aulaState.aula.iluminacion_especial}</p>
           <p><b>  - Sonido:</b> {aulaState.aula.sonido}</p>
           <p><b>    - Rack Estante 1:</b> {aulaState.aula.rack_Est1}</p>
           <p><b>    - Rack Estante 2: </b>{aulaState.aula.rack_Est2}</p>
           <p><b>    - Rack Estante 3:</b> {aulaState.aula.rack_Est3}</p>
           <p><b>    - Rack Estante 4:</b> {aulaState.aula.rack_Est4}</p>
           <p><b>    - Rack Estante 5:</b> {aulaState.aula.rack_Est5}</p>
           <p><b>    - Rack Estante 6: </b>{aulaState.aula.rack_Est6}</p>
           <p><b>    - Rack Estante 7:</b> {aulaState.aula.rack_Est7}</p>
           <p><b>    - Rack Estante 8:</b> {aulaState.aula.rack_Est8}</p>
           <p><b>  - Equipamiento extra: </b>{aulaState.aula.equipamiento_extra}</p>

         </div>
       }
      </div>
    );
  }
}
