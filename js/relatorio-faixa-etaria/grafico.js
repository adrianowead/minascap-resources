var graficoFaixaEtaria = {
	categories : [],
	somaTotal: 0,
	homem: [],
	mulher: [],
	subtitulo: '',

	popularDados: function( categorias, soma, dadosHomem, dadosMulher ){
		graficoFaixaEtaria.categories = categorias.split('|');
		graficoFaixaEtaria.somaTotal = soma;

		graficoFaixaEtaria.homem = dadosHomem.split('|');
		graficoFaixaEtaria.mulher = dadosMulher.split('|');
	},

	criarGrafico : {

	    Highcharts.chart('container', {
	            chart: {
	                type: 'bar'
	            },
	            title: {
	                text: 'Gráfico Quantitativo por Idade e Gênero'
	            },
	            subtitle: {
	                text: graficoFaixaEtaria.subtitulo
	            },
	            xAxis: [{
	                categories: graficoFaixaEtaria.categories,
	                reversed: false,
	                labels: {
	                    step: 1
	                }
	            }, { // mirror axis on right side
	                opposite: true,
	                reversed: false,
	                categories: graficoFaixaEtaria.categories,
	                linkedTo: 0,
	                labels: {
	                    step: 1
	                }
	            }],
	            yAxis: {
	                title: {
	                    text: null
	                },
	                labels: {
	                    formatter: function () {
	                        //return Math.abs(this.value) + '%';
	                        return Math.abs(this.value);
	                    }
	                }
	            },
	            plotOptions: {
	                series: {
	                    dataLabels: {
	                        enabled: true,
	                        color: '#000',
	                        style: {fontWeight: 'normal'},
	                        //formatter: function() {return this.x + ': ' + Math.abs(this.y)},
	                        formatter: function(){
	                            return ((Math.abs(this.y) / graficoFaixaEtaria.somaTotal) * 100).toFixed(2) + '%' + ' (' + Math.abs(this.y) + ')';
	                        },
	                        crop: false,
	                        overflow: 'none',
	                        inside: false,
	                        rotation: 0
	                    },
	                    stacking: 'normal'
	                }
	            },

	            tooltip: {
	                formatter: function () {
	                    return '<b>' + this.series.name + ': ' + this.point.category + '</b><br/>' +
	                        'Quantidade: ' + Highcharts.numberFormat(Math.abs(this.point.y), 0) + '</b><br/>' +
	                        'Percentual: ' + ((Math.abs(this.point.y) / graficoFaixaEtaria.somaTotal) * 100).toFixed(2) + '%';
	                }
	            },

	            series: [{
	                name: 'Homem',
	                data: graficoFaixaEtaria.homem
	            }, {
	                name: 'Mulher',
	                data: graficoFaixaEtaria.mulher
	            }]
	        });
	}
}
