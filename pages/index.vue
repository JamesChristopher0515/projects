<script setup lang="ts">
  const optionsVisitorsProfile = {
    series: [70, 30],
    labels: ['Male', 'Female'],
    colors: ['#435ebe', '#55c6e8'],
    chart: {
      type: 'donut'
    },
    legend: {
      position: 'bottom'
    },
    plotOptions: {
      pie: {
        donut: {
          size: '30%'
        }
      }
    }
  }

  const optionsProfileVisit = {
    annotations: {
      position: 'back'
    },
    dataLabels: {
      enabled: false
    },
    chart: {
      type: 'bar'
    },
    fill: {
      opacity: 1
    },
    plotOptions: {
    },
    series: [{
      name: 'sales',
      data: [9, 20, 30, 20, 10, 20, 30, 20, 10, 20, 30, 20]
    }],
    colors: '#435ebe',
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    },
  }

  const optionsEurope = {
    series: [{
      name: 'series1',
      data: [310, 800, 600, 430, 540, 340, 605, 805, 430, 540, 340, 605]
    }],
    chart: {
      type: 'area',
      toolbar: {
        show: false,
      },
    },
    stroke: {
      width: 2,
    },
    grid: {
      show: false,
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      type: 'datetime',
      categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z", "2018-09-19T07:30:00.000Z", "2018-09-19T08:30:00.000Z", "2018-09-19T09:30:00.000Z", "2018-09-19T10:30:00.000Z", "2018-09-19T11:30:00.000Z"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: false,
      }
    },
    show: false,
    yaxis: {
      labels: {
        show: false,
      },
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm'
      },
    },
    colors: ['#5350e9'],
  }

  const optionsAmerica = {
    series: [{
      name: 'series1',
      data: [310, 800, 600, 430, 540, 340, 605, 805, 430, 540, 340, 605]
    }],
    chart: {
      type: 'area',
      toolbar: {
        show: false,
      },
    },
    stroke: {
      width: 2,
    },
    grid: {
      show: false,
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      type: 'datetime',
      categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z", "2018-09-19T07:30:00.000Z", "2018-09-19T08:30:00.000Z", "2018-09-19T09:30:00.000Z", "2018-09-19T10:30:00.000Z", "2018-09-19T11:30:00.000Z"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: false,
      }
    },
    show: false,
    yaxis: {
      labels: {
        show: false,
      },
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm'
      },
    },
    colors: ['#008b75'],
  }

  const optionsIndonesia = {
    series: [{
      name: 'series1',
      data: [310, 800, 600, 430, 540, 340, 605, 805, 430, 540, 340, 605]
    }],
    chart: {
      type: 'area',
      toolbar: {
        show: false,
      },
    },
    stroke: {
      width: 2,
    },
    grid: {
      show: false,
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      type: 'datetime',
      categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z", "2018-09-19T07:30:00.000Z", "2018-09-19T08:30:00.000Z", "2018-09-19T09:30:00.000Z", "2018-09-19T10:30:00.000Z", "2018-09-19T11:30:00.000Z"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: false,
      }
    },
    show: false,
    yaxis: {
      labels: {
        show: false,
      },
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm'
      },
    },
    colors: ['#dc3545'],
  }

  const statsProps = [{
      title: "Warehouses",
      color: "blue",
      value: "455",
      iconType: "svg",
      icon: "cards-icons/warehouse.svg"
    },
    {
      title: "Users",
      color: "yellow",
      value: "12K",
      iconType: "svg",
      icon: "cards-icons/users.svg"
    },
    {
      title: "Orders",
      value: "678",
      color: "red",
      iconType: "svg",
      icon: "cards-icons/orders.svg"
    },
    {
      title: "Stores",
      value: "678",
      color: "green",
      iconType: "svg",
      icon: "cards-icons/stores.svg"
    },
    {
      title: "Expiring Contracts",
      value: "56",
      color: "light-blue",
      iconType: "svg",
      icon: "cards-icons/ex-contracts.svg"
    },
    {
      title: "Returned",
      value: "89",
      color: "purple",
      iconType: "svg",
      icon: "cards-icons/returned.svg"
    },
    {
      title: "Paid Contracts",
      value: "345",
      color: "pink",
      iconType: "svg",
      icon: "cards-icons/paid.svg"
    },
    {
      title: "Unpaid Contracts",
      value: "678",
      color: "dark-green",
      iconType: "svg",
      icon: "cards-icons/unpaid.svg"
    },
  ]
</script>
<template>
  <div>
    <div class="page-heading">
      <LayoutsSidebarDark />
      <!-- <LayoutsSidebarLayoutSidebar /> -->
      <!-- <h3> Profile Statistics</h3> -->
    </div>
    <div class="page-content mb-4">
      <section class="row">
        <div class="col-12 col-lg-12">
          <div class="card-grid">
            <div v-for="(statsProp, index) in statsProps" :key="index">
              <CardStats v-bind="statsProp" />
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
  <div class="d-flex flex-row ">
    <div class="col-6 col-md-6 col-sm-12">
      <DashboardCardTwo />
    </div>
    <div class="col-6 col-md-6 col-sm-12">
      <DashboardCardThree />
    </div>
  </div>
</template>

<style scoped>
.card-grid{
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 20px;
}
</style>
