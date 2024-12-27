$.get('../JSON_data/售货机销售金额及其环比增长率.json').done(function(result) {
    var mychart = echarts.init(document.getElementById("crq_4"))
    mychart.hideLoading(),
        mychart.setOption({
            legend: {
                data: ["销售金额", "销售金额环比增长率"]
            },
            xAxis: [{
                type: 'category',
                data: result.日期
            }],
            yAxis: [{
                type: "value",
                axisLabel: {
                    formatter: '{value}'
                }
            }, {
                type: "value",
                axisLabel: {
                    formatter: '{value}'
                }
            }],
            series: [{
                name: '销售金额',
                type: 'bar',
                data: result.销售金额
            }, {
                name: '销售金额环比增长率',
                type: 'line',
                yAxisIndex: 1,
                data: result.销售金额环比增长率
            }],
        })
    mychart.hideLoading()
})