const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  username:{type: String},
  //email: { type: String, required: true },
  password:{type: String},
  //surname: { type: String, required: true },
  // nombre: { type: String, required: true },
  // apellido2: { type: String },
  
  // puesto: { type: String }, //1..n tabla de puestos
  // motrar_empresa_actual: { type: Boolean },
  // sector: { type: String }, //1..n  tabla de sectores

  // ubicacion_pais: { type: String }, //1..n tabla de paises
  // ubicacion_Codigo_postal: { type: String },
  // ubicacion_Ciudad: { type: String }, //1..n  tabla de ciudades

  // educacion_institucion: { type: String }, //universidad,...
  // educacion_titulacion: { type: String },
  // educacion_disciplina: { type: String }, //empresariales,..

  // telefono: { type: String },
  // tipo_telefono: { type: String }, //Inicio / Trabajo / Movil
  // fecha_nacimiento: { type: Date },
  // web: { type: String },
});

const User = model("user", userSchema);

module.exports = User;
