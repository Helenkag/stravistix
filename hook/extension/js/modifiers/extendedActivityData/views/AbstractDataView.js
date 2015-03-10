var AbstractDataView = Fiber.extend(function(base) {

    return {

        viewId: null,

        content: '',

        grid: null,

        graph: null,

        graphData: null,

        graphTitle: '',

        graphUnits: '',

        mainColor: [0, 0, 0],

        table: null,

        appResources: null,

        init: function() {
            console.log('AbstractDataView::init');
        },

        setViewId: function(id) {
            this.viewId = id;
        },

        setGraphTitle: function(title) {
            this.graphTitle = title;
        },

        setAppResources: function(appResources) {
            this.appResources = appResources;
        },

        render: function() {
            console.log('AbstractDataView::render');
        },

        getContent: function() {
            return this.content;
        },

        generateSectionTitle: function(title) {
            return "<h3 style='border-bottom: 3px solid rgb(" + this.mainColor[0] + ", " + this.mainColor[1] + ", " + this.mainColor[2] + "); padding: 10px;'># " + title + "</h3>";
        },

        generateCanvasForGraph: function() {
            var graph = '';
            graph += '<div>';
            graph += '<div>';
            graph += '<div class="distributionGraphTitle">' + this.graphTitle + '</div>';
            graph += '<canvas id="' + this.viewId + '" height="450" width="450"></canvas>';
            graph += '</div>';
            graph += '</div>';
            this.graph = jQuery(graph);
        },

        setupDistributionGraph: function(zones, units) {

            this.graphUnits = units;

            var labelsData = [];
            for (var zone in zones) {
                var label = zones[zone].from.toFixed(1) + " - " + zones[zone].to.toFixed(1) + " " + this.graphUnits;
                labelsData.push(label);
            }

            var distributionArray = [];
            for (var zone in zones) {
                distributionArray.push((zones[zone].s / 60).toFixed(0));
            }

            this.graphData = {
                labels: labelsData,
                datasets: [{
                    label: "Distribution",
                    fillColor: "rgba(" + this.mainColor[0] + ", " + this.mainColor[1] + ", " + this.mainColor[2] + ", 0.5)",
                    strokeColor: "rgba(" + this.mainColor[0] + ", " + this.mainColor[1] + ", " + this.mainColor[2] + ", 0.8)",
                    highlightFill: "rgba(" + this.mainColor[0] + ", " + this.mainColor[1] + ", " + this.mainColor[2] + ", 0.75)",
                    data: distributionArray
                }]
            };
        },

        displayGraph: function() {

            if (!this.viewId) {
                console.error('View Id must exist in ' + typeof this);
                return;
            }

            // Generating the chart
            var chart = new Chart(document.getElementById(this.viewId).getContext("2d")).Bar(this.graphData, { // TODO canvas id must be specific to view
                barShowStroke: false,
                scaleGridLineColor: "rgba(0,0,0,.05)",
                showTooltips: true,
                tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %> Minutes"
            });

        },

        setupDistributionTable: function(zones, units) {

            var table = '';
            table += '<div>';
            table += '<div>';
            table += '<table class="distributionTable">';

            // Generate table header
            table += '<tr>'; // Zone
            table += '<td><strong>Zone</strong></td>'; // Zone
            table += '<td><strong>From ' + units.toUpperCase() + '</strong></td>'; // bpm
            table += '<td><strong>To ' + units.toUpperCase() + '</strong></td>'; // bpm
            table += '<td><strong>Time<br/>(hh:mm:ss)</strong></td>'; // Time
            table += '<td><strong>% in zone</strong></td>'; // % in zone
            table += '</tr>';

            var zoneId = 1;
            for (var zone in zones) {
                table += '<tr>'; // Zone
                table += '<td>Z' + zoneId + '</td>'; // Zone
                table += '<td>' + zones[zone].from.toFixed(1) + '</th>'; // %HRR
                table += '<td>' + zones[zone].to.toFixed(1) + '</th>'; // %HRR
                table += '<td>' + Helper.secondsToHHMMSS(zones[zone].s) + '</td>'; // Time%
                table += '<td>' + zones[zone].percentDistrib.toFixed(1) + '%</td>'; // % in zone
                table += '</tr>';
                zoneId++;
            }

            table += '</table>';
            table += '</div>';
            table += '</div>';
            this.table = jQuery(table);
        },

        makeGrid: function(columns, rows) {

            var grid = '';
            grid += '<div>';
            grid += '<div class="grid">';
            grid += '<table>';

            for (var i = 0; i < rows; i++) {
                grid += '<tr>';
                for (var j = 0; j < columns; j++) {
                    grid += '<td data-column="' + j + '" data-row="' + i + '">';
                    grid += '</td>';
                }
                grid += '</tr>';
            }
            grid += '</table>';
            grid += '</div>';
            grid += '</div>';
            this.grid = jQuery(grid);
        },

        insertContentAtGridPosition: function(columnId, rowId, data, title, units, userSettingKey) {

            var onClickHtmlBehaviour = "onclick='javascript:window.open(\"" + this.appResources.settingsLink + "#/commonSettings?viewOptionHelperId=" + userSettingKey + "\",\"_blank\");'";

            if (this.grid) {
                var content = '<span class="gridDataContainer" ' + onClickHtmlBehaviour + '>' + data + ' <span class="gridUnits">' + units + '</span><br /><span class="gridTitle">' + title + '</span></span>';
                this.grid.find('[data-column=' + columnId + '][data-row=' + rowId + ']').html(content);
            } else {
                console.error('Grid is not initialized');
            }
        }
    }
});
