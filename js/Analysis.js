function updateChart(selectedID) {
    async function getUserAsync() {
        let response = await fetch('../json/QuestionsData.json');
        let data = await response.json()
        // if (document.getElementById("spinnerBox").style.display == "none ") {
        //     document.getElementById("spinnerBox").style.display = "flex !important";
        // }else{

        // }
        // console.log("load")
        return data;
    }

    getUserAsync()
        .then(data => {
            let questionsData = data.questionsData;
            for (key in questionsData) {
                if (questionsData[key].id == selectedID) {
                    feedbackData = questionsData[key].feedbackData;
                    optionsName = questionsData[key].options;
                    document.getElementById('questionBox').innerHTML = questionsData[key].question;
                    let options = {
                        series: feedbackData,
                        chart: {
                            height: 450,
                            width: 1100,
                            type: 'pie',
                        },
                        labels: optionsName,
                        responsive: [{
                            breakpoint: 480,
                            options: {
                                chart: {
                                    width: 200
                                },
                                legend: {
                                    position: 'bottom'
                                }
                            }
                        }]
                    };
                    var chart = new ApexCharts(document.querySelector("#chart"), options);
                    chart.render();
                }
            }
        });
}
updateChart("Q1");