new Vue({
    el: '#desafio',
    data: {
        nome: 'Vinicius',
        idade: 36,
        imagem: 'https://miro.medium.com/max/1200/1*zyNSb0UXhP8TfxYbj-GNWg.png'
    },
    methods: {
        getIdadeMultiplicadoPorTres: function(){
            return this.idade * 3
        },
        getNumeroRandomico: function(){
            return Math.random()
        }
    }
})