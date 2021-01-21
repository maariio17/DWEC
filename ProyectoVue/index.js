var app = new Vue({
  el: '#app',
  data: {
    nuevoRecordatorio:'',
    arrayRecordatorio:[],
    isButtonDisabled:true,
  },
  computed:{
      totalTareas: function(){
          return this.arrayRecordatorio.length;
      },
      totalCompletadas: function(){
          let completados=0;
          for (let i = 0; i < this.arrayRecordatorio.length; i++) {
              if(this.arrayRecordatorio[i].completado==true){
                  completados++;
              }
          }
          return completados;
      },
      elementoCompletado: function(){

      }
  },
  methods:{
      addRecordatorio: function(){
          this.arrayRecordatorio.push({
              titulo:this.nuevoRecordatorio,
              prioridad: 0,
              fecha: new Date(),
              completado:false,
          });
          console.log(this.arrayRecordatorio);
          this.nuevoRecordatorio='';
      },
      cambiarEstadoTarea: function(index){
          this.arrayRecordatorio[index].completado = !this.arrayRecordatorio[index].completado;
      },
      teclaPulsada: function(){
          this.nuevoRecordatorio.length > 0 ? this.isButtonDisabled=false : this.isButtonDisabled=true;
      },
      borrarTareasCompletadas: function(){
          this.this.arrayRecordatorio = this.arrayRecordatorio.filter((nota)=>{
              if (nota.completado == false) return true;
          })
          /* for (let i = 0; i < this.arrayRecordatorio.length; i++) {
              if(this.arrayRecordatorio[i].completado){
                  this.arrayRecordatorio.splice(i,1);
              }
          } */
      }

      //cada nota tiene:
      //titulo
      //fecha creacion
      //completado
      //prioridad(alta, media, baja)
  }
  //linkame lista notas filtrado
  //que es un campo calculado

})