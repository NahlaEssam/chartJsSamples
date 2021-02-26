Chart.elements.funnel = Chart.elements.Line.extend({
    draw: function () {

        // draw linesasd

        this._chart.data.datasets.forEach((element, index) => {
            var points = this._chart.getDatasetMeta(index).data;
            var lineElementOptions = this._chart.options.elements.line;

        
       
            if (lineElementOptions.stepLabel.display && element.stepLabel ) {
                var vm = this._view;
                var label = element.label
                var label_point_x = (points[0]._model.x + points[points.length - 1]._model.x) / 2;
                var label_point_y =  this._chart.height ;

                // Draw Step Label
                this._chart.ctx.font = lineElementOptions.stepLabel.fontSize + "px " + this._chart.options.defaultFontFamily;
                this._chart.fillStyle =  lineElementOptions.stepLabel.color || 'black';
                this._chart.textAlign = "center";
                this._chart.ctx.fillText(label, label_point_x - lineElementOptions.stepLabel.fontSize,  label_point_y);
            }

        });

        this._chart.ctx.restore();
    }
});


Chart.defaults.funnel = Chart.helpers.clone(Chart.defaults.line);
Chart.defaults.funnel['elements'] = {};
Chart.defaults.funnel['elements']['line'] = {};
Chart.defaults.funnel['elements']['line']['stepLabel'] = {
    display: true,
    fontSize: 15,
    color: 'red'
}



Chart.controllers.funnel = Chart.controllers.line.extend({
    dataElementType: Chart.elements.funnel
});
