<script lang="ts">
    export let answers: NormalAnswers;
    export let questionType: String;

    const defaultColourTable = {
        backgroundColor: [
            '#F7464A',
            '#46BFBD',
            '#FDB45C',
            '#949FB1',
            '#4D5360',
            '#AC64AD',
        ],
        hoverBackgroundColor: [
            '#FF5A5E',
            '#5AD3D1',
            '#FFC870',
            '#A8B3C5',
            '#616774',
            '#DA92DB',
        ],
    }

    const closedColourTable = {
        backgroundColor: [
            '#60bf46',
            '#F7464A',

        ],
        hoverBackgroundColor: [
            '#78d35a',
            '#FF5A5E',

        ],
    }

    function getBackgroundColors() {
        if (questionType === "CLOSED") {
            return closedColourTable.backgroundColor
        }

        return defaultColourTable.backgroundColor;
    }

    function getHoverBackgroundColors() {
        if (questionType === "CLOSED") {
            return closedColourTable.hoverBackgroundColor
        }

        return defaultColourTable.hoverBackgroundColor;
    }

    const data = {
        labels: answers.options.map(o => o.answer),
        datasets: [
            {
                data: answers.options.map(o => o.votes),
                backgroundColor: getBackgroundColors(),
                hoverBackgroundColor: getHoverBackgroundColors(),
            },
        ]
    };

    const options = {
        responsive: true,
        plugins: {
            tooltip: {
                callbacks: {
                    label: function (tooltipItem: any) {
                        const dataIndex = tooltipItem.dataIndex;
                        const value = data.datasets[0].data[dataIndex];
                        const total = data.datasets[0].data.reduce((a, b) => a + b, 0);
                        const percentage = ((value / total) * 100).toFixed(2);
                        return ` ${value} votes (${percentage}%)`;
                    }
                }
            }
        }
    }

    import { Pie } from 'svelte-chartjs';

    import {
        Chart as ChartJS,
        Title,
        Tooltip,
        Legend,
        ArcElement,
        CategoryScale,
    } from 'chart.js';

    ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

</script>

<Pie {data} options={options} />
