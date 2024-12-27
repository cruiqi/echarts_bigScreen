// 不同类型用户的人数
$.get("../JSON_data/各类商品存货周转天数.json").done(function(data) {
    var myChart = echarts.init(document.getElementById("crq_2"));
    myChart.setOption({
        
        backgroundColor: 'rgba(128,128,128,0.1)',
        //
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c}天 <br/>占比:({d}%)'
        },
        // title: {
        //     text: '各类商品存货周转天数',
        //     left: 'center'
        // },
        title: { 
            text: '各类商品存货周转天数',
            textStyle: { 
                color: '#fff',
                fontSize: 18,
                fontWeight: 'bold',
                textShadow: '0 0 10px rgba(79, 172, 254, 0.5)'
            },
            left: 'center',
            top: '10px',
            backgroundColor: 'rgba(79, 172, 254, 0.2)',
            borderRadius: 4,
            padding: [8, 15],
            borderLeft: '3px solid #4facfe'
        },
        legend: {
            orient: 'vertical',
            left: 2,
            top: 2,
            // data: []
        },
        series: [{
            name: '商品名称',
            type: 'pie',
            label: {
                normal: {
                    formatter: '{b}',
                    show: true,
                    position: "inner"
                }
            },
            radius: ['45%', '75%'],
            center: ['55%', '58%'],
            data: data.data
        }]
    })
});