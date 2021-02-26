Chart.elements.funnel = Chart.elements.Line.extend({
    draw: function () {

        // draw linesasd
        this._chart.ctx.save();
        this._chart.ctx.strokeStyle = '#ff0000';

        this._chart.data.datasets.forEach((element, index) => {
            var points = this._chart.getDatasetMeta(index).data;
            // // debugger;

            
            // var point_x = points[0]._model.x;
            // var point_y =  points[0]._model.y ;
         

            // for(var point of points){
            //     // ctx.strokeStyle="#FF0000";
            //     this._chart.ctx.beginPath();
            //     this._chart.ctx.lineWidth = 1;
            //     this._chart.ctx.moveTo(point_x, this._chart.height - 21 -  point_y );
            //     this._chart.ctx.lineTo(point._model.x,  this._chart.height - 21 - point._model.y );
            //     console.log(point._model.x);
  
            //     point_x = point._model.x;
            //     point_y = point._model.y;
            //     this._chart.ctx.stroke();
  
            //   }

            var lineElementOptions = this._chart.options.elements.line;

        
       
            if (lineElementOptions.stepLabel.display && index % 2 ===0 ) {
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
