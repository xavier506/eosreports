$(function () {
  function drawDashboardItemsListSparklines () {
    $('.dashboard-page .items .sparkline').each(function () {
      var type = $(this).data('type')
      var data
      // There is predefined data
      if ($(this).data('data')) {
        data = $(this)
          .data('data')
          .split(',')
          .map(function (item) {
            if (item.indexOf(':') > 0) {
              return item.split(':')
            } else {
              return item
            }
          })
      } else {
        data = []
        for (var i = 0; i < 17; i++) {
          data.push(Math.round(100 * Math.random()))
        }
      }

      $(this).sparkline(data, {
        barColor: config.chart.colorPrimary.toString(),
        height: $(this).height(),
        type: type
      })
    })
  }

  drawDashboardItemsListSparklines()

  $(document).on('themechange', function () {
    drawDashboardItemsListSparklines()
  })
})
