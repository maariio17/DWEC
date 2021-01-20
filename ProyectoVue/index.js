var app = new Vue({
    el: '#miAplicacion',
    data: {
        nuevoRecordatorio: "",
        listaRecordatorios: [],
        isButtonDisabled: true
      },
      methods: {
        anadirRecordatorio: function(){
          this.listaRecordatorios.push({
            titulo: this.nuevoRecordatorio,
            prioridad: 0,
            fechaCreacion: new Date(),
            completado: false
          });
          this.nuevoRecordatorio = "";
        },
        cambiarEstadoTarea: function(posicion){
          //this.listaRecordatorios.splice(posicion,1);
          this.listaRecordatorios[posicion].completado = !this.listaRecordatorios[posicion].completado;
        },
        teclaPulsada: function(){
          if (this.nuevoRecordatorio.length>0){
            this.isbuttonDisabled = false;
          } else{
            this.isbuttonDisabled = true;
          }
        },
        borrarTareasCompletadas: function(){
          for (i=0; i<this.listaRecordatorios.length; i++){
            if (this.listaRecordatorios[i].completado){
              this.listaRecordatorios.splice(i, 1);
            }
          }
        }
      },
      computed: {
        totalTareas: function(){
           return this.listaRecordatorios.length;
        },
        totalPendientes: function(){
          let total = 0;
          for (i=0; i<this.listaRecordatorios.length; i++){
            if (!this.listaRecordatorios[i].completado){
              total++;
            }
          }

          return total;
        }
      }
  })