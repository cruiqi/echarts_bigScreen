$.get('../JSON_data/近5日新增和流失用户数据.json').done(function(result) {
    var mychart = echarts.init(document.getElementById("crq_3"))
    mychart.hideLoading(),
        mychart.setOption({
            // title: {
            //     text: '近5日新增和流失用户数据'
            // },
            title: { 
                text: '近5日新增和流失用户数据',
                textStyle: { 
                    color: '#fff',
                    fontSize: 18,
                    fontWeight: 'bold',
                    textShadow: '0 0 10px rgba(79, 172, 254, 0.5)'
                },
                left: '20px',
                top: '10px',
                backgroundColor: 'rgba(79, 172, 254, 0.2)',
                borderRadius: 4,
                padding: [8, 15],
                borderLeft: '3px solid #4facfe'
            },
            legend: {
                data: result.类型,
                left: 300
            },
            xAxis: {
                type: 'value'
            },
            yAxis: {
                type: 'category',
                data: result.日期
            },
            series: [{
                name: '新增人数',
                type: 'bar',
                data: result.新增人数
            }, {
                name: '流失人数',
                type: 'bar',
                data: result.流失人数
            }],
        })
    mychart.hideLoading()
})