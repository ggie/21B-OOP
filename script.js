class ChartManager {
    constructor(canvasId, type, data) {
      this.canvasId = canvasId;
      this.type = type;
      this.data = data;
      this.chart = null;
    }
  
    renderChart() {
      const ctx = document.getElementById(this.canvasId).getContext("2d");
      this.chart = new Chart(ctx, {
        type: this.type,
        data: this.data
      });
    }
  }
  
  async function initializeCharts() {
    const response = await fetch("data.json");
    const chartData = await response.json();
  
    const barChart = new ChartManager("barChart", "bar", chartData.barChart);
    barChart.renderChart();
  
    const pieChart = new ChartManager("pieChart", "pie", chartData.pieChart);
    pieChart.renderChart();
  }
  
  window.onload = initializeCharts;
  