import mongoose, { SchemaTypes } from 'mongoose';
var ObjectId = mongoose.Schema.Types.ObjectId;


var Schema = mongoose.Schema({ driver: ObjectId, 
  createdAt:{
    type: Date,
    default: Date.now
  },
  nombre_aula: String,
  capacidad: Number,

   canon_marca_modelo: String, canon_tipo: String, canon_potencia_luminosa: Number, canon_instalacion_HDMI: Boolean, canon_observaciones: String,
  //canon.marca_modelo: String, canon.tipo: String, canon.potencia_luminosa: Number, canon.instalacion_HDMI: Boolean, canon.observaciones: String,

  retroproyector: String,
  pizarra_tipo: String,
  pizarra_tamaño: Number,
  pantalla_relacion_aspecto: String, pantalla_tamano: Number, pantalla_estado: String, pantalla_electrica: Boolean, pantalla_observaciones: String,
  megafonia: String,
  sugerencias_extra: String,
  mejoras_para_proyecto: String,
  iluminacion: String,
  canaleta_conectividad: String,
  iluminacion_especial: String,
  sonido: String,
  rack_Est1: String,
  rack_Est2: String,
  rack_Est3: String,
  rack_Est4: String,
  rack_Est5: String,
  rack_Est6: String,
  rack_Est7: String,
  rack_Est8: String,
  equipamiento_extra: String

});

export default mongoose.model('aula', Schema);
