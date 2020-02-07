const graph1_data = [10,10,10,10];
const graph1_labels = [20,50,100,300];
const graph1_opt = {

}
const graph1_config = {
    type: "line",
    data: {
        labels: graph1_labels,
        datasets:[{
            label: "label1",
            data: graph1_data,
        }]
    },
    options: graph1_opt
}

const graph1_ctx = document.getElementById("graph1").getContext('2d');
console.log("graph1_ctx","hello");