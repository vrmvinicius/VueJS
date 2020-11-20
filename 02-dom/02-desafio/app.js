new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods:{
        exibirAlerta(){
            alert('Exibindo alerta!')
        },
        atualizarValor(event){
            this.valor = event.target.value
        }
    }
})