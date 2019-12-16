// ./react-redux-client/src/components/AulaForm.js
import React from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

const AulaForm = (props) => {
  return (
    <form className="form form-horizontal" id="addAulaForm" onSubmit={props.addAula}>
      <div className="row">
        <h3 className="centerAlign">Add Your Aula</h3>
        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>Aula: </ControlLabel>
            <FormControl
              type="text" placeholder="Enter aula"
              name="nombre_aula"
            />
          </FormGroup>
        </div>
        
        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>Capacidad: </ControlLabel>
            <FormControl
              componentClass="textarea" placeholder="Introduce capacidad"
              name="capacidad" 
            />
          </FormGroup>
        </div>

        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>Cañón: Marca y modelo </ControlLabel>
            <FormControl
              componentClass="textarea" placeholder="Introduce marca y modelo"
              name="canon_marca_modelo" 
            />
          </FormGroup>
        </div>

        
        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>Cañón: Tipo: </ControlLabel>
            <FormControl
              componentClass="textarea" placeholder="Introduce tipo(HDMI, VGA)"
              name="canon_tipo" 
            />
          </FormGroup>
        </div>

        
        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>Cañón: Potencia luminosa: </ControlLabel>
            <FormControl
              componentClass="textarea" placeholder="Introduce potencia en lúmenes"
              name="canon_potencia_luminosa" 
            />
          </FormGroup>
        </div>

        
        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>Cañón: instalacion_HDMI: </ControlLabel>
            <FormControl
              componentClass="textarea" placeholder="Introduce 'true' si tiene o 'false' si no tiene instalación HDMI"
              name="canon_instalacion_HDMI" 
            />
          </FormGroup>
        </div>

        
        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>Cañón: Observaciones: </ControlLabel>
            <FormControl
              componentClass="textarea" placeholder="Introduce datos relevantes"
              name="canon_observaciones" 
            />
          </FormGroup>
        </div>

        
        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>Retroproyector: </ControlLabel>
            <FormControl
              componentClass="textarea" placeholder="Introduce si tiene o no retroproyector, y si es portátil"
              name="retroproyector" 
            />
          </FormGroup>
        </div>

        
        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>Tipo de pizarra: </ControlLabel>
            <FormControl
              componentClass="textarea" placeholder="Introduce el tipo de la pizarra (tiza o vileda...)"
              name="pizarra_tipo" 
            />
          </FormGroup>
        </div>

        
        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>Tamaño de la pizarra: </ControlLabel>
            <FormControl
              componentClass="textarea" placeholder="Introduce el largo de la pizarra en metros"
              name="pizarra_tamaño" 
            />
          </FormGroup>
        </div>

        
        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>Pantalla: Relación de aspecto </ControlLabel>
            <FormControl
              componentClass="textarea" placeholder="Introduce la relación de aspecto de la pantalla"
              name="pantalla_relacion_aspecto" 
            />
          </FormGroup>
        </div>

        
        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>Pantalla: Tamaño </ControlLabel>
            <FormControl
              componentClass="textarea" placeholder="Introduce el ancho de la pantalla"
              name="pantalla_tamano" 
            />
          </FormGroup>
        </div>

        
        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>Pantalla: Estado</ControlLabel>
            <FormControl
              componentClass="textarea" placeholder="Introduce si el estado es bueno, medio o malo"
              name="pantalla_estado" 
            />
          </FormGroup>
        </div>

        
        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>Pantalla: Eléctrica </ControlLabel>
            <FormControl
              componentClass="textarea" placeholder="true si es eléctrica, false si no"
              name="pantalla_electrica" 
            />
          </FormGroup>
        </div>

        
        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>Pantalla: Observaciones </ControlLabel>
            <FormControl
              componentClass="textarea" placeholder="Introduce datos relevantes de la pantalla"
              name="pantalla_observaciones"
            />
          </FormGroup>
        </div>

        
        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>Megafonía: </ControlLabel>
            <FormControl
              componentClass="textarea" placeholder="Introduce si tiene megafonía en el techo"
              name="megafonia" 
            />
          </FormGroup>
        </div>

        
        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>Sugerencias: </ControlLabel>
            <FormControl
              componentClass="textarea" placeholder="Información relevantes sobre el aula"
              name="sugerencias_extra" 
            />
          </FormGroup>
        </div>

        
        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>Mejoras: </ControlLabel>
            <FormControl
              componentClass="textarea" placeholder="Introduce mejoras posibles a realizar"
              name="mejoras_para_proyecto"
            />
          </FormGroup>
        </div>

        
        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>Iluminación: </ControlLabel>
            <FormControl
              componentClass="textarea" placeholder="Introduce el tipo de iluminación del aula"
              name="iluminacion" 
            />
          </FormGroup>
        </div>

        
        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>Canaleta-conectividad: </ControlLabel>
            <FormControl
              componentClass="textarea" placeholder="Introduce conexiones que tiene la canaleta del aula"
              name="canaleta_conectividad" 
            />
          </FormGroup>
        </div>

        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>Iluminación especial (a partir de aquí solo rellenar para salas especiales(SAA, SAC, SJ, SG...)): </ControlLabel>
            <FormControl
              componentClass="textarea" placeholder="Introduce focos y demás elementos de iluminación especial del recinto"
              name="iluminacion_especial"
            />
          </FormGroup>
        </div>

        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>Sonido (salas especiales): </ControlLabel>
            <FormControl
              componentClass="textarea" placeholder="Introduce el sistema de sonido que alberga el recinto"
              name="sonido" 
            />
          </FormGroup>
        </div>

        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>Rack: </ControlLabel>
            <FormControl
              componentClass="textarea" placeholder="Introduce el contenido de los estantes del rack del lugar"
              name="rack_Est1"
            />
            <FormControl
              componentClass="textarea" placeholder="Introduce el contenido de los estantes del rack del lugar"
              name="rack_Est2"
            />
            <FormControl
              componentClass="textarea" placeholder="Introduce el contenido de los estantes del rack del lugar"
              name="rack_Est3"
            />
            <FormControl
              componentClass="textarea" placeholder="Introduce el contenido de los estantes del rack del lugar"
              name="rack_Est4"
            />
            <FormControl
              componentClass="textarea" placeholder="Introduce el contenido de los estantes del rack del lugar"
              name="rack_Est5"
            />
            <FormControl
              componentClass="textarea" placeholder="Introduce el contenido de los estantes del rack del lugar"
              name="rack_Est6" 
            />
            <FormControl
              componentClass="textarea" placeholder="Introduce el contenido de los estantes del rack del lugar"
              name="rack_Est7" 
            />
            <FormControl
              componentClass="textarea" placeholder="Introduce el contenido de los estantes del rack del lugar"
              name="rack_Est8" 
            />
          </FormGroup>
        </div>
        <div className="col-md-12"onSubmit={props.editAula}>
          <FormGroup>
            <ControlLabel>Equipamiento extra (salas espaciales): </ControlLabel>
            <FormControl
              componentClass="textarea" placeholder="Introduce el sistema de sonido que alberga el recinto"
              name="equipamiento_extra"
            />
          </FormGroup>
        </div>
      </div>
      <FormGroup>
        <Button type="submit" bsStyle="success" bsSize="large" block>Submit</Button>
      </FormGroup>
    </form>
  );
}

export default AulaForm;
